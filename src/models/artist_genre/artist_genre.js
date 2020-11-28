"use strict"

const sqlize = require("../../../database/sequelize");
const Sequelize = require("sequelize");
const Artist = require("../artist/artist");
const Genre = require("../genre/genre");

const Artist_Genre = sqlize.define("artist_genre", {
    artistId: {type: Sequelize.INTEGER, notNull: true},
    genreId: {type: Sequelize.INTEGER, notNull: true}
});

Artist_Genre.belongsTo(Artist);
Artist_Genre.belongsTo(Genre);

module.exports = Artist_Genre;