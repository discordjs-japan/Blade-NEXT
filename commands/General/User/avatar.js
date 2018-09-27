const { Command } = require("klasa")

module.exports = class extends Command {

  constructor(...args) {
    super(...args, {
      runIn: ["text", "dm", "group"],
      description: language => language.get("COMMAND_AVATAR_DESCRIPTION"),
    })
  }

  async run(message) {
    return message.sendMessage(message.author.avatarURL())
  }
}
