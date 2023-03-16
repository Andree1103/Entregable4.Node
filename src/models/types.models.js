const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Type = db.define('types', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(35)
    }
},{
    timestamps:false
});

module.exports = Type;