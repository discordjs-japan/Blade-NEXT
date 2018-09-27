const { sqlite } = require("./database/sqlite")
const DataManager = require("./database/DataManager")
const discordjs = require("discord.js")

const client = new discordjs.Client()

require("dotenv").config()

client.on("ready", () => {
  sqlite.sync({force: true, logging: console.log})
}).on("message", (message) => {
  if (message.author.bot) return
  DataManager.upsert(message.author.id)
}).on("userUpdate", (olduser, newuser) => {
  if (newuser.bot) return
  DataManager.upsert(newuser.id)
}).on("reconnecting", () => {
  console.log("[API] 再接続")
})

client.login(process.env.TOKEN)
