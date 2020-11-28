"use strict"

const sqlize = require("../../../database/sequelize");
const artist_genreModel = require("../../models/artist_genre/artist_genre");

class ArtistGenreServices{
    static async createArtistGenre(artist_id, genre_id){
        try{
            let response = await sqlize.transaction(t => {
                return artist_genreModel.create({
                    artistId: artist_id,
                    genreId: genre_id
                });
            });

            return response;
        }catch(err){
            throw err.message;
        }
    }
}

module.exports = ArtistGenreServices;