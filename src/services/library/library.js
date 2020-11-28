"use strict"

const modelLibrary = require("../../models/library/library");
const sqlize = require("../../../database/sequelize");

class LibraryServices {
    static async createLibrary(){
        try{
            let response = await sqlize.transaction(t => {
                return modelLibrary.create({

                })
            })
            return response;
        }catch(err){
            throw err.message;
        }
    }
}

module.exports = LibraryServices;