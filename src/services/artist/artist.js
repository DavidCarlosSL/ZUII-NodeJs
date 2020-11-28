"use strict";

const sqlize = require("../../../database/sequelize");
const artistModel = require("../../models/artist/artist");
const genreServices = require("../../services/genre/genre");
const ArtistGenreServices =require("../artist_genre/artist_genre");

class ArtistServices{
    static async getArtistsByGenre(genre){
        try{
            let response = await sqlize
            .query(`select art.id, artist_name, artist_image from artist_genres as ag inner join artists as art on ag.artistId = art.id inner join genres as gen on ag.genreId = gen.id where genre_name = '${genre}' ORDER BY art.artist_name ASC`);
            
            return response[0];
        }catch(err){
            throw err.message;
        }
    }

    static async getArtists(){
        try{
            let response = await artistModel.findAll({
                order: [
                    ['artist_name', 'ASC']
                ],
                attributes: ['id', 'artist_name', 'artist_image']
            });

            return response;
        }catch(err){
            throw err.message;
        }
    }

    static async getArtistById(artist_id){
        try{
            let response = await artistModel.findOne({
                attributes: ['id', 'artist_name', 'artist_bio', 'artist_image'],
                where: {id: artist_id}
            })
            return response;
        }catch(err){
            throw err.message;
        }
    }

    static async findArtistByName(artistName){
        try{
            let response = await artistModel.findOne({where: {
                artist_name: artistName
            }});
            return response;
        }catch(err){
            throw err.message
        }
    }

    static async createArtist(artistName, artistBio, artistTags){
        let artist = await this.findArtistByName(artistName);

        if (artist !== null) return 1;

        let response = await sqlize.transaction(t => {
            return artistModel.create({
                artist_name: artistName,
                artist_bio: artistBio,
                artist_image: "/images/artists/" + artistName + ".jpg"
            });
        })
        
        for(let i = 0; i < artistTags.tag.length; i++){
            let genre = await genreServices.createGenre(artistTags.tag[i].name);
            await ArtistGenreServices.createArtistGenre(response.dataValues.id, genre.dataValues.id);
        }
        return response;
    }
}

module.exports = ArtistServices;