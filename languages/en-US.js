const { Language } = require("klasa")

module.exports = class extends Language {

  constructor(...args) {
    super(...args)
    this.language = {
      COMMAND_AVATAR_DESCRIPTION: "Get the URL of your Avatar",
      COMMAND_DISCORDSTATS_DESCRIPTION: "Check Discord server status",
      COMMAND_DISCORDSTATS_NORMAL: "Normal",
      COMMAND_DISCORDSTATS_ABNORMAL: "Abnormal",
      COMMAND_DISCORDSTATS_RESOLVED: "Resolved",
      COMMAND_DISCORDSTATS_REUNRESOLVED: "Unresolved",
    }
  }

  async init() {
    await super.init()
  }

}
