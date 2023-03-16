const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    firstname: {
        type: DataTypes.STRING(30),
        allowNull:false,
    },
    lastname: {
        type: DataTypes.STRING(30),
        allowNull:false,
    },
    username: {
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    avatarId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'avatar_id'
    }
})

module.exports= Users;
