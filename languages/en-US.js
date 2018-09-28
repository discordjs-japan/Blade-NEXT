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
      COMMAND_SERVER_TITLE: "Server status",
      COMMAND_SERVER_ID: "Server ID",
      COMMAND_SERVER_MEMBER: "Members",
      COMMAND_SERVER_OWNER: "Owner",
      COMMAND_SERVER_REGION: "Region",
      COMMAND_SERVER_CHANNEL: "Channels",
      COMMAND_SERVER_CREATE: "Created On",
      UNKNOWN_COMMAND: (prefix) => `Unknown command check with ${prefix}help`
    }
  }

  async init() {
    await super.init()
  }

}
