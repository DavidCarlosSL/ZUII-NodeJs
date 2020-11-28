"use strict"

const sqlize = require("../../../database/sequelize");
const purchaseModel = require("../../models/purchase/purchase");
const userServices = require("../user/user");
const trackServices = require("../track/track");
const library_trackServices = require("../library_track/library_track");
const library_albumServices = require("../library_album/library_album");

class purchaseServices{
    static async getPurchasesByUser(user_id){
        try{
            let response = await sqlize
            .query(`select track_name, purchase_value, pur.createdAt, tra.albumId, alb.album_image from purchases as pur inner JOIn tracks as tra on pur.trackId = tra.id inner join albums as alb on tra.albumId = alb.id where pur.userId = '${user_id}' ORDER BY pur.createdAt DESC`);

            return response[0];
        }catch(err){
            throw err.message;
        }
    }

    static async createPurchase(user_id, track_id){
        try{
            let user = await userServices.findUserById(user_id);
            if (user == null) return 0;

            let userCoins = user.dataValues.user_coins;
            let userLibraryId = user.dataValues.libraryId;

            let track = await trackServices.findTrackById(track_id);
            if(track == null) return 1;

            let trackPrice = track.dataValues.track_price;
            let album_id = track.dataValues.albumId;

            if(userCoins < trackPrice) return 2;

            let library_track = await library_trackServices.createLibrary_track(track_id, userLibraryId);
            if(library_track == 1) return 3;

            let response = await sqlize.transaction(t => {
                return purchaseModel.create({
                    purchase_value: trackPrice,
                    userId: user_id,
                    trackId: track_id
                });
            });
            
            await library_albumServices.createLibrary_album(album_id, userLibraryId);
            await userServices.changeUserCoins(user_id, userCoins, trackPrice);

            return response;
        }catch(err){
            throw err.message;
        }
    }
}

module.exports = purchaseServices;