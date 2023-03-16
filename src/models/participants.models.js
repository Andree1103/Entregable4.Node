const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Participants = db.define('participants', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:'user_id'
    },
    conversationsId: {
        type: DataTypes.INTEGER,
        allowNull:false,
        field:'conversation_id'
    }
},{
    timestamps:false
});

module.exports = Participants;