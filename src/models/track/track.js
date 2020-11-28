"use strict"

const sqlize = require("../../../database/sequelize");
const Sequelize = require("sequelize");
const Album = require("../album/album");

const Track = sqlize.define("track", {
    track_name: {type: Sequelize.STRING(50), notNull: true},
    track_duration: {type: Sequelize.STRING(10), notNull: true},
    track_price: {type: Sequelize.FLOAT(2,2), notNull: true},
    albumId: {type: Sequelize.INTEGER, notNull: true}
});

Album.hasMany(Track);
module.exports = Track;