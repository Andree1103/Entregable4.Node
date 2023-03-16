const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database:"entregable4",
  host:"localhost",
  port:5433,
  username:"postgres",
  password:"post",
  dialect:"postgres",
  // logging:false,
})

module.exports = db


