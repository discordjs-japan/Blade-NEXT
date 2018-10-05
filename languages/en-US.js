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
      COMMAND_SERVER_DESCRIPTION: "Check Guild server status",
      COMMAND_SERVER_NAME: "❯ Name",
      COMMAND_SERVER_TITLE: "❯ Server status",
      COMMAND_SERVER_ID: "❯ Server ID",
      COMMAND_SERVER_MEMBER: "❯ Members",
      COMMAND_SERVER_OWNER: "❯ Owner",
      COMMAND_SERVER_REGION: "❯ Region",
      COMMAND_SERVER_CHANNEL: "❯ Channels",
      COMMAND_SERVER_CREATE: "❯ Created On",
      COMMAND_SERVER_VERIFICATIONLEVEL: "❯ Verification Level",
      COMMAND_SERVER_VERIFICATIONLEVEL_NONE: "None",
      COMMAND_SERVER_VERIFICATIONLEVEL_LOW: "Low",
      COMMAND_SERVER_VERIFICATIONLEVEL_MEDIUM: "Medium",
      COMMAND_SERVER_VERIFICATIONLEVEL_HARD: "(╯°□°）╯︵ ┻━┻ ()",
      COMMAND_SERVER_VERIFICATIONLEVEL_VERYHARD: "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻",
      COMMAND_IMAGE_DESCRIPTION: "Search image",
      COMMAND_R18IMAGE_DESCRIPTION: "Display an image including NSFW",
      UNKNOWN_COMMAND: (prefix) => `Unknown command check with ${prefix}help`,
      COMMAND_VOTE_DESCRIPTION: "Vote for this bot",
      COMMAND_USERINFO_DESCRIPTION: "Get information on a mentioned user.",
      COMMAND_USERINFO_ONLINE: "💚 Online",
      COMMAND_USERINFO_IDLE: "💛 Idle",
      COMMAND_USERINFO_DND: "❤ Do Not Disturb",
      COMMAND_USERINFO_OFFLINE: "💔 Offline",
      COMMAND_USERINFO_NAME: "❯ Name",
      COMMAND_USERINFO_ID: "❯ ID",
      COMMAND_USERINFO_DISCORDJOINDATE: "❯ Discord Join Date",
      COMMAND_USERINFO_SERVERJOINDATE: "❯ Server Join Date",
      COMMAND_USERINFO_STATUS: "❯ Status",
      COMMAND_USERINFO_PLAYING: "❯ Playing",
      COMMAND_USERINFO_HIGHESTROLE: "❯ Highest Role",
      COMMAND_USERINFO_HOISTROLE: "❯ Hoist Role"
    }
  }

  async init() {
    await super.init()
  }

}
