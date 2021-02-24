const Sequelize = require('sequelize')
const db = require('../db')

const Shift = db.define('shift', {
    dayOfWeek : {
        type : Sequelize.STRING,
        allowNull : false,
        validate : {
            isIn : [['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']]
        }

    },
    morning : {
        type : Sequelize.BOOLEAN,
        allowNull : false,
        defaultValue : false
    },
    afternoon : {
        type : Sequelize.BOOLEAN,
        allowNull : false,
        defaultValue : false
    },
    overnight : {
        type : Sequelize.BOOLEAN,
        allowNull : false,
        defaultValue : false
    },
    doorman : {
        type : Sequelize.BOOLEAN,
        allowNull : false,
        defaultValue : false
    },
    desk : {
        type : Sequelize.BOOLEAN,
        allowNull : false,
        defaultValue : false
    },
})

module.exports = Shift