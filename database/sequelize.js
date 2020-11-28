"use strict"

const Sequelize = require('sequelize')
let DB = 'zuii'

const sequelize = new Sequelize(DB, 'root', null, {
  dialect: 'mysql',
  host: process.env.DB_HOST || 'localhost'
})

module.exports = sequelize