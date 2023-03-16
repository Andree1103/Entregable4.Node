const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Messages = db.define('messages', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
        allowNull: false
    },
    userId: {
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    conversationId: {
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    messages: {
        type:DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = Messages;