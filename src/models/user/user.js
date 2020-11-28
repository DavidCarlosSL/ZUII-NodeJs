"use strict"

const sqlize = require("../../../database/sequelize");
const Sequelize = require("sequelize");
const Library = require("../library/library");

const User = sqlize.define("user", {
    user_name: {type: Sequelize.STRING(50), notNull: true},
    user_email: {type: Sequelize.STRING(100), notNull: true, validate: {isEmail: true}, unique: true},
    user_password: {type: Sequelize.STRING(32), notNull: true},
    user_coins: {type: Sequelize.FLOAT(10,2), notNull: true},
    libraryId: {type: Sequelize.INTEGER, notNull: true}
});

User.belongsTo(Library);
module.exports = User;