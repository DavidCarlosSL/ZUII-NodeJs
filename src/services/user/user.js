"use strict"

const modelUser = require("../../models/user/user");
const sqlize = require("../../../database/sequelize");
const libraryServices = require("../library/library");
const md5 = require("md5");
const config = require("../../../config/globalConfig");

class UserServices {
    static async findUserById(user_id){
        try{
            let response = await modelUser.findOne({where: {
                id: user_id
            }});
            return response;
        }catch(err){
            throw err.message;
        }
    }

    static async findUserByEmail(userEmail){
        try{
            let response = await modelUser.findOne({where: {
                user_email: userEmail
            }})
            return response;
        }catch(err){
            throw err.message;
        }
    }

    static async createUser(userName, userEmail, userPassword){
        try{
            let user = await this.findUserByEmail(userEmail);
            if (user !== null) {
                return 1;
            }

            let newPassword = md5(userPassword + config.secret_key);
            let library = await libraryServices.createLibrary();
            let libraryId = await library.dataValues.id;
            let response = await sqlize.transaction(t => {
                return modelUser.create({
                    user_name: userName,
                    user_email: userEmail,
                    user_password: newPassword,
                    user_coins: 0,
                    libraryId
                })
            })
            return response;
        }catch(err){
            throw err.message;
        }
    }

    static async authUser(userEmail, userPassword){
        try{
            let newPassword = md5(userPassword + config.secret_key);
            let response = await sqlize.transaction(t=> {
                return modelUser.findOne({
                    where: {
                        user_email: userEmail,
                        user_password: newPassword
                    }
                })
            });
            return response;
        }catch(err){
            throw err.message;
        }
    }

    static async transformUser(user, token){
        let newUser = {
            token,
            id: user.id,
            name: user.user_name,
            email: user.user_email,
            coins: user.user_coins,
            library: user.libraryId
        }
        return newUser;
    }

    static async changeUserCoins(user_id, userCoins, trackPrice){
        try{
            let newCoins = userCoins - trackPrice;

            let response = await modelUser.update({
                    user_coins: newCoins
                }, {where: {
                    id: user_id
                }});
            return response;
        }catch(err){
            throw err.message;
        }
    }

    static async addCoins(user_id, coins){
        try{
            if(coins <= 0) return 0;
            if(coins > 100) return 1;

            let user = await this.findUserById(user_id);
            if(user == null) return 2;

            let userCoins = user.dataValues.user_coins;
            let newCoins = userCoins + coins;

            let response = await modelUser.update({
                user_coins: newCoins
            }, {where: {
                id: user_id
            }});

            return 3;
        }catch(err){
            throw err.message;
        }
    }
}

module.exports = UserServices;