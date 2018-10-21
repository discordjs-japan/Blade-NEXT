const {Command} = require("klasa")

module.exports = class extends Command {
  constructor (...args) {
    super(...args, {
      aliases: ["setPrefix"],
      cooldown: 5,
      description: language => language.get("COMMAND_PREFIX_DESCRIPTION"),
      permissionLevel: 6,
      runIn: ["text"],
      usage: "[reset|prefix:str{1,10}]"
    })
  }

  async run (message, [prefix]) {
    if (!prefix) return message.send(`Prefix: \`${message.guild.settings.prefix}\``)
    if (prefix === "reset") return this.reset(message)
    if (message.guild.settings.prefix === prefix) throw message.language.get("COMMAND_PREFIX_SAME")
    await message.guild.settings.update("prefix", prefix)
    return message.send(`${message.language.get("COMMAND_PREFIX_UPDATE")} \`${prefix}\``)
  }

  async reset (message) {
    await message.guild.settings.reset("prefix")
    return message.send(`${message.language.get("COMMAND_PREFIX_UPDATE")} \`${this.client.options.prefix}\``)
  }
}
