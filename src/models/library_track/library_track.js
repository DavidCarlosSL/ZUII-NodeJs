"use strict"

const sqlize = require("../../../database/sequelize");
const Sequelize = require("sequelize");
const Track = require("../track/track");
const Library = require("../library/library");

const Library_track = sqlize.define("library_track", {
    libraryId: {type: Sequelize.INTEGER, notNull: true},
    trackId: {type: Sequelize.INTEGER, notNull: true}
});

Library.hasMany(Library_track);
Track.hasMany(Library_track);

module.exports = Library_track;