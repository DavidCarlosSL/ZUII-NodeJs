"use strict"

const sqlize = require("../../../database/sequelize");
const Sequelize = require("sequelize");
const User = require("../user/user");
const Track = require("../track/track");

const Purchase = sqlize.define("purchase", {
    purchase_value: {type: Sequelize.FLOAT(10,2), notNull: true},
    userId: {type: Sequelize.INTEGER, notNull: true},
    trackId: {type: Sequelize.INTEGER, notNull: true}
});

User.hasMany(Purchase);
Track.hasMany(Purchase);

module.exports = Purchase;