const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Conversation = db.define('conversations', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type:DataTypes.STRING(40),
        allowNull:false
    },
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:'created_by'
    },
    typeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:'type_id'
    },
   /* messageId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field:'message_id'
    }*/
});

module.exports = Conversation;