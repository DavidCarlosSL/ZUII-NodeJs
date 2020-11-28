"use strict"

const sqlize = require("../../../database/sequelize");
const albumModel = require("../../models/album/album");
const genreServices = require("../genre/genre");
const album_genreServices = require("../album_genre/album_genre");
const artistServices = require("../artist/artist");
const trackServices = require("../track/track");

class albumServices{
    static async getAlbumsByGenre(genre){
        try{
            let response = await sqlize
            .query(`SELECT alb.id, album_name, album_image, art.artist_name from album_genres as ag inner JOIN albums as alb on ag.albumId = alb.id inner JOIN genres as gen on ag.genreId = gen.id inner JOIN artists as art on alb.artistId = art.id where gen.genre_name = '${genre}' ORDER BY alb.album_name ASC`);

            return response[0];
        }catch(err){
            throw err.message;
        }
    }

    static async getAlbumsByArtist(artist_id){
        try{
            let response = await sqlize
            .query(`select alb.id, album_name, album_image, artist_name from albums as alb inner join artists as art on alb.artistId = art.id where artistId = '${artist_id}'`);

            return response[0];
        }catch(err){
            throw err.message;
        }
    }

    static async getAlbums(){
        try{
            let response = await sqlize
            .query("SELECT alb.id, album_name, album_image, artist_name from albums as alb inner join artists as art on alb.artistId = art.id ORDER BY album_name ASC");

            return response[0];
        }catch(err){
            throw err.message;
        }
    }
    
    static async findAlbum(albumName, artist_Id){
        try{
           let response = await albumModel.findOne({
               where: {
                   album_name: albumName,
                   artistId: artist_Id
               }
           });
           return response;
        }catch(err){
            throw err.message;
        }
    }

    static async createAlbum(albumName, albumBio, albumTracks,albumTags, artistName){
        try{
            let artist = await artistServices.findArtistByName(artistName);

            if(artist == null) return 0;

            let artist_Id = artist.dataValues.id;

            let album = await this.findAlbum(albumName, artist_Id);

            if(album !== null) return 1;

            let response = await sqlize.transaction(t => {
                return albumModel.create({
                    album_name: albumName,
                    album_bio: albumBio,
                    album_image: "/images/albums/" + artistName + albumName + ".jpg",
                    artistId: artist_Id
                });
            });

            for(let i = 0; i < albumTags.tag.length; i++){
                let genre = await genreServices.createGenre(albumTags.tag[i].name);
                await album_genreServices.createAlbumgenre(response.dataValues.id, genre.dataValues.id);
            }

            for(let t = 0; t < albumTracks.track.length; t++){
                let track = await trackServices.createTrack(albumTracks.track[t].name, albumTracks.track[t].duration, response.dataValues.id);
                if(track == 1) console.log(`A Música ${albumTracks.track[t].name} do album ${albumName} do artista ${artistName} já existe na base de dados`);
            }

            return response;
        }catch(err){
            throw err.message;
        }
    }
}

module.exports = albumServices;
