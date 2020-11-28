"use strict"

const sqlize = require("../../../database/sequelize");
const Sequelize = require("sequelize");

const Genre = sqlize.define("genre", {
    genre_name: {type: Sequelize.STRING(50), notNull: true, unique: true}
})

module.exports = Genre;