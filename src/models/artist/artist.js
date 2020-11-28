"use strict"

const sqlize = require("../../../database/sequelize");
const Sequelize = require("sequelize");

const Artist = sqlize.define("artist", {
    artist_name: {type: Sequelize.STRING(50), notNull: true, unique: true},
    artist_bio: {type: Sequelize.STRING(1000), notNull: true},
    artist_image: {type: Sequelize.STRING(150), notNull: true, unique: true}
});

module.exports = Artist;