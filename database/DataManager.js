const { sqlite } = require("./sqlite.js")
const sequelize = require("sequelize")
const db = sqlite.define("userdatas", {
  userid: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  }
}, {
  timestamps: false,
})

exports.upsert = async function(id) {
  db.upsert({
    userid: id
  })
}
  
