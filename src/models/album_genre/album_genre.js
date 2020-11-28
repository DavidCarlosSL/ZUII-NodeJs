"use strict"

const sqlize = require("../../../database/sequelize.js");
const Sequelize = require("sequelize");
const Album = require("../album/album");
const Genre = require("../genre/genre");

const Album_genre = sqlize.define("album_genre", {
    albumId: {type: Sequelize.INTEGER, notNull: true},
    genreId: {type: Sequelize.INTEGER, notNull: true}
});

Album.hasMany(Album_genre);
Genre.hasMany(Album_genre);

module.exports = Album_genre;