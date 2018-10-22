const { Command } = require("klasa")

module.exports = class extends Command {

  constructor(...args) {
    /**
     * Any default options can be omitted completely.
     * if all options are default, you can omit the constructor completely
     */
    super(...args, {
      enabled: true,
      runIn: ["text", "dm", "group"],
      description: language => language.get("COMMAND_SUPPORT_DESCRIPTION"),
      extendedHelp: "No extended help available."
    })
  }

  async run(message) {
    return message.sendMessage("https://discord.gg/DbTpjXV")
  }
}
