const { Command } = require("klasa")
const { MessageEmbed } = require("discord.js")

module.exports = class extends Command {

  constructor(...args) {
    super(...args, {
      runIn: ["text"],
      description: language => language.get("COMMAND_AVATAR_DESCRIPTION"),
      usage: "[user:username]",
      requiredPermissions: ["EMBED_LINKS"]
    })
  }

  async run(message, [user = message.author]) {
    if (!user) user = await message.guild.members.fetch(message.author.id).catch(() => null)
    return message.sendMessage(new MessageEmbed()
      .setTitle("Avatar Link")
      .setURL(user.avatarURL() || "https://github.com/DJS-JPN/res/blob/master/No_Image.png?raw=true")
      .setImage(user.avatarURL() || "https://github.com/DJS-JPN/res/blob/master/No_Image.png?raw=true")
    )
  }
}
