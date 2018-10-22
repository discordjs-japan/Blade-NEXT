const {Command} = require("klasa")

module.exports = class extends Command {
  constructor (...args) {
    super(...args, {
      enabled: true,
      runIn: ["text"],
      requiredPermissions: ["SEND_MESSAGES"],
      cooldown: 5,
      permissionLevel: 6,
      description: language => language.get("COMMAND_LANGUAGE_DESCRIPTION"),
      extendedHelp: "No extended help available.",
      usage: "<ja_jp|en_us>",
      usageDelim: undefined,
      subcommands: true
    })
  }

  async ja_jp(message) {
    if (message.guild.settings.language === "ja") throw message.language.get("COMMAND_LANGUAGE_SAME")
    await message.guild.settings.update("language", "ja")
    return message.sendMessage(`${message.language.get("COMMAND_LANGUAGE_UPDATE")} \`ja_JP\``)
  }

  async en_us(message) {
    if (message.guild.settings.language === "en-US") throw message.language.get("COMMAND_LANGUAGE_SAME")
    await message.guild.settings.update("language", "en-US")
    return message.sendMessage(`${message.language.get("COMMAND_LANGUAGE_UPDATE")} \`en_US\``)
  }
}
