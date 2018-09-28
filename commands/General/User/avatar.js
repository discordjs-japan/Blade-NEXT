const { Command } = require("klasa")
const { MessageEmbed } = require("discord.js")

module.exports = class extends Command {

  constructor(...args) {
    super(...args, {
      runIn: ["text", "dm", "group"],
      description: language => language.get("COMMAND_AVATAR_DESCRIPTION"),
    })
  }

  async run(message) {
    return message.sendMessage(new MessageEmbed()
      .setTitle("Avatar Link")
      .setURL(message.author.avatarURL() || "https://github.com/DJS-JPN/res/blob/master/No_Image.png?raw=true")
      .setImage(message.author.avatarURL() || "https://github.com/DJS-JPN/res/blob/master/No_Image.png?raw=true")
    )
  }
}
