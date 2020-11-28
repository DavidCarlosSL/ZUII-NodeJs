"use strict"

const sqlize = require("../sequelize");
const userPopulate = require("./user");
const libraryPopulate = require("./library");
const genrePopulate = require("./genre");
const artistPopulate = require("./artist");
const albumPopulate = require("./album");
const purchasePopulate = require("./purchase");
const library_trackPopulate = require("./library_track");
const library_albumPopulate = require("./library_album");

const populate = async() => {
    await sqlize.sync();
    await libraryPopulate;
    await userPopulate;
    await genrePopulate;
    await artistPopulate;
    await albumPopulate;
    await artistPopulate.artists();
    await albumPopulate.albums();
    await purchasePopulate;
    await library_trackPopulate;
    await library_albumPopulate;
}

populate();