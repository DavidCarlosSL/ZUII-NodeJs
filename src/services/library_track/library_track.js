"use strict"

const sqlize = require("../../../database/sequelize");
const library_trackModel = require("../../models/library_track/library_track");

class library_trackServices{
    static async getTracksByLibrary(user_id){
        try{
            let response = await sqlize
            .query(`select alb.album_image, tra.track_name, tra.track_duration, artistId, art.artist_name, albumId, alb.album_name from library_tracks as lt inner join tracks as tra on lt.trackId = tra.id inner join albums as alb on tra.albumId = alb.id inner join artists as art on alb.artistId = art.id inner join users as us on lt.libraryId = us.libraryId where us.id = ${user_id} order by alb.album_name ASC`);

            return response[0];
        }catch(err){
            throw err.message;
        }
    }

    static async getTracksLibrary_tracks(user_id, album_id){
        try{
            let response = await sqlize
            .query(`select tra.id, track_name, track_duration, album_name, album_image, artist_name from library_tracks as lt inner join tracks as tra on lt.trackId = tra.id inner join albums as alb on tra.albumId = alb.id inner join artists as art on alb.artistId = art.id inner join users as us on lt.libraryId = us.libraryId where us.id = '${user_id}' and alb.id = '${album_id}' ORDER BY tra.track_name ASC`);

            return response[0];
        }catch(err){
            throw err.message;
        }
    }

    static async findLibrary_track(track_id, library_id){
        try{
            let response = await library_trackModel.findOne({
                where: {
                    trackId: track_id,
                    libraryId: library_id
                }
            });
            return response;
        }catch(err){
            throw err.message;
        }
    }

    static async createLibrary_track(track_id, library_id){
        try{
            let library_track = await this.findLibrary_track(track_id, library_id);

            if(library_track !== null) return 1;

            let response = sqlize.transaction(t => {
                return library_trackModel.create({
                    libraryId: library_id,
                    trackId: track_id
                });
            });
            return response;
        }catch(err){
            throw err.message;
        }
    }
}

module.exports = library_trackServices;