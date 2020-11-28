"use strict"

const sqlize = require("../../../database/sequelize");
const Sequelize = require("sequelize");
const Album = require("../album/album");
const Library = require("../library/library");

const Library_album = sqlize.define("library_album", {
    libraryId: {type: Sequelize.INTEGER, notNull: true},
    albumId: {type: Sequelize.INTEGER, notNull: true}
});

Library.hasMany(Library_album);
Album.hasMany(Library_album);

module.exports = Library_album;