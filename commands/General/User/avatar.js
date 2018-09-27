const { Command } = require("klasa")

module.exports = class extends Command {

  constructor(...args) {
    super(...args, {
      enabled: true,
      runIn: ["text", "dm", "group"],
      requiredPermissions: [],
      requiredSettings: [],
      aliases: [],
      autoAliases: true,
      bucket: 1,
      cooldown: 0,
      promptLimit: 0,
      promptTime: 30000,
      deletable: false,
      guarded: false,
      nsfw: false,
      permissionLevel: 0,
      description: language => language.get("COMMAND_AVATAR_DESCRIPTION"),
      usageDelim: undefined,
      quotedStringSupport: false,
      subcommands: false
    })
  }

  async run(message) {
    return message.sendMessage(message.author.avatarURL())
  }
}
