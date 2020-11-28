"use strict"

const sqlize = require("../../../database/sequelize");
const trackModel = require("../../models/track/track");

class trackServices{
    static async getTracksByAlbum(album_id){
        try{
            let response = await sqlize
            .query(`select tra.id, track_name, track_duration, album_name, album_image, artistId, artist_name from tracks as tra inner JOIN albums as alb on tra.albumId = alb.id inner JOIN artists as art on alb.artistId = art.id where tra.albumId = '${album_id}'`);

            return response[0];
        }catch(err){
            throw err.message;
        }
    }

    static async findTrackById(track_id){
        try{
            let response = await trackModel.findOne({where: {
                id: track_id
            }});

            return response;
        }catch(err){
            throw err.message;
        }
    }

    static async findTrack(trackName, album_id){
        try{
            let response = await trackModel.findOne({
                where: {
                    track_name: trackName,
                    albumId: album_id
                }
            });

            return response;
        }catch(err){
            throw err.message;
        }
    }

    static async createTrack(trackName, trackDuration, album_id){
        try{
            let track = await this.findTrack(trackName, album_id);

            if(track !== null) return 1;

            let response = await sqlize.transaction(t => {
                return trackModel.create({
                    track_name: trackName,
                    track_duration: trackDuration,
                    track_price: 0.40,
                    albumId: album_id
                });
            });

            return response;
        }catch(err){
            throw err.message;
        }
    }
}

module.exports = trackServices;