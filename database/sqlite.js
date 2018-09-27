const sequelize = require("sequelize")

const sqlite = new sequelize("database", "djsjpn", "password", {
  host: "localhost",
  dialect: "sqlite",
  storage: "./database.sqlite",
  operatorsAliases: false
})
exports.sqlite = sqlite