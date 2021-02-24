const Sequelize = require('sequelize')
const db = require('../db')

const Empolyee = db.define('empolyee', {
    name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    yearsAtJob : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    picUrl : {
        type : Sequelize.STRING,
    }
})

module.exports = Empolyee