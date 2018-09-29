const { Command, Timestamp } = require("klasa")
const { MessageEmbed } = require("discord.js")

module.exports = class extends Command {

  constructor(...args) {
    super(...args, {
      runIn: ["text", "group"],
      description: language => language.get("COMMAND_SERVER_DESCRIPTION"),
    })
    this.timestamp = new Timestamp("d MMMM YYYY")
  }

  async run(message) {
    const verificationLevels = [
      message.language.get("COMMAND_SERVER_VERIFICATIONLEVEL_NONE"),
      message.language.get("COMMAND_SERVER_VERIFICATIONLEVEL_LOW"),
      message.language.get("COMMAND_SERVER_VERIFICATIONLEVEL_MEDIUM"),
      message.language.get("COMMAND_SERVER_VERIFICATIONLEVEL_HARD"),
      message.language.get("COMMAND_SERVER_VERIFICATIONLEVEL_VERYHARD")
    ]
    const Server = new MessageEmbed()
      .setColor("#0x00FF00")
      .setTitle(message.language.get("COMMAND_SERVER_TITLE"))
      .setThumbnail(message.guild.iconURL() || "https://github.com/DJS-JPN/res/blob/master/No_Image.png?raw=true")
      .addField(message.language.get("COMMAND_SERVER_NAME"), message.guild.name, true)
      .addField(message.language.get("COMMAND_SERVER_ID"), message.guild.id, true)
      .addField(message.language.get("COMMAND_SERVER_OWNER"), message.guild.owner.user.tag, true)
      .addField(message.language.get("COMMAND_SERVER_MEMBER"), message.guild.memberCount, true)
      .addField(message.language.get("COMMAND_SERVER_REGION"), message.guild.region, true)
      .addField(message.language.get("COMMAND_SERVER_CHANNEL"), message.guild.channels.size, true)
      .addField(message.language.get("COMMAND_SERVER_VERIFICATIONLEVEL"), verificationLevels[message.guild.verificationLevel], true)
      .addField(message.language.get("COMMAND_SERVER_CREATE"), this.timestamp.display(message.guild.createdAt))
      .setFooter("DEVELOPED BY DJS-JPN", "https://avatars3.githubusercontent.com/u/35397294?s=200&v=4")
    return message.channel.send(Server)
  }
}
