const Sequelize = require('sequelize')
require('dotenv').config()
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    // database: ,
    // user: 'root',
    // password: 'Jitloml-2019',
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

module.exports = sequelize