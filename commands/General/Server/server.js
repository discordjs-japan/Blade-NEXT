const { Command } = require("klasa")
const { MessageEmbed } = require("discord.js")

module.exports = class extends Command {

  constructor(...args) {
    super(...args, {
      runIn: ["text", "group"],
      description: language => language.get("COMMAND_SERVER_DESCRIPTION"),
    })
  }

  async run(message) {
    const Server = new MessageEmbed()
      .setColor("#0x00FF00")
      .setTitle(message.language.get("COMMAND_SERVER_TITLE"))
      .setThumbnail(message.guild.iconURL() || "https://github.com/DJS-JPN/res/blob/master/No_Image.png?raw=true")
      .addField(message.language.get("COMMAND_SERVER_ID"), message.guild.id, true)
      .addField(message.language.get("COMMAND_SERVER_OWNER"), message.guild.owner.id, true)
      .addField(message.language.get("COMMAND_SERVER_MEMBER"), message.guild.members.size, true)
      .addField(message.language.get("COMMAND_SERVER_REGION"), message.guild.region, true)
      .addField(message.language.get("COMMAND_SERVER_CHANNEL"), message.guild.channels.size, true)
      .addField(message.language.get("COMMAND_SERVER_CREATE"), message.guild.createdAt)
      .setFooter("DEVELOPED BY DJS-JPN", "https://avatars3.githubusercontent.com/u/35397294?s=200&v=4")
    return message.channel.send(Server)
  }
}
