"use strict"

const sqlize = require("../../../database/sequelize");
const library_albumModel = require("../../models/library_album/library_album");

class library_albumServices{
    static async getAlbumsLibrary_album(user_id){
        try{
            let response = await sqlize
            .query(`SELECT alb.id, album_name, album_image, artist_name from library_albums as la inner join albums as alb on la.albumId = alb.id inner join artists as art on alb.artistId = art.id INNER JOIN users as us on la.libraryId = us.libraryId where us.id = '${user_id}' order by artist_name ASC`);

            return response[0];
        }catch(err){
            throw err.message;
        }
    }

    static async findLibrary_album(library_id, album_id){
        try{
            let response = await library_albumModel.findOne({where: {
                libraryId: library_id,
                albumId: album_id
            }});

            return response;
        }catch(err){
            throw err.message;
        }
    }

    static async createLibrary_album(album_id, library_id){
        try{
            let library_album = await this.findLibrary_album(library_id, album_id);

            if(library_album !== null) return 1;

            let response = await sqlize.transaction(t => {
                return library_albumModel.create({
                    libraryId: library_id,
                    albumId: album_id
                });
            });
            return response;
        }catch(err){
            throw err.message;
        }
    }
}

module.exports = library_albumServices;