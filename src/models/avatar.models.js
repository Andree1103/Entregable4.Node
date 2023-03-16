const {DataTypes} = require('sequelize');
const db = require('../utils/database');

const Avatar = db.define('avatar', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
    },
},{
    timestamps:false
})

module.exports = Avatar;