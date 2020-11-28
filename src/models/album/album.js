"use strict"

const sqlize = require("../../../database/sequelize");
const Sequelize = require("sequelize");
const Artist = require("../artist/artist");

const Album = sqlize.define("album", {
    album_name: {type: Sequelize.STRING(50), notNull: true},
    album_bio: {type: Sequelize.STRING(1000), notNull: true},
    album_image: {type: Sequelize.STRING(150), notNull: true},
    artistId: {type: Sequelize.INTEGER, notNull: true}
});

Artist.hasMany(Album);
module.exports = Album;