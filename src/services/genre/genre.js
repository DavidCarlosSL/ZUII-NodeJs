"use strict"

const sqlize = require("../../../database/sequelize");
const genreModel = require("../../models/genre/genre");

class GenreServices{
    static async findGenreByName(genreName){
        try{
            let response = await genreModel.findOne({
                where: {
                    genre_name: genreName
                }
            });
            return response;
        }catch(err){
            throw err.message;
        }
    }

    static async createGenre(genreName){
        try{
            let genre = await this.findGenreByName(genreName);

            if (genre !== null) return genre
               
            let response = sqlize.transaction(t => {
                return genreModel.create({
                    genre_name: genreName
                })
            })
            return response;
        }catch(err){
            throw err.message;
        }
    }
}

module.exports = GenreServices;