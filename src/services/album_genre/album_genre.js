"use strict"

const sqlize = require("../../../database/sequelize");
const album_genreModel = require("../../models/album_genre/album_genre");

class albumgenreServices{
    static async createAlbumgenre(album_id, genre_id){
        try{
            let response = sqlize.transaction(t => {
                return album_genreModel.create({
                    albumId: album_id,
                    genreId: genre_id
                });
            });
            return response;
        }catch(err){
            throw err.message;
        }
    }
}

module.exports = albumgenreServices;