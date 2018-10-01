const { Command } = require("klasa")

module.exports = class extends Command {

  constructor(...args) {
    super(...args, {
      enabled: true,
      runIn: ["text"],
      description: "api",
      usage: "<wiki|guilds|guild|users|members|channels|channel|roles> (key:key) (value:value) [...]",
      requiredPermissions: ["SEND_MESSAGES"],
      subcommands: true
    })
  }

  run(message, [type, ...params]) {
    return this[type](message, params)
  }

  async wiki(message) {
    return message.sendCode("asciidoc", [
      "=== BladeNEXT API ===",
      "",
      "Wiki :: https://github.com/DJS-JPN/Blade-NEXT/wiki"
    ])
  }

  async guilds(message) {
    return message.sendMessage("http://blade-next.now.sh/api/guilds\n\nWiki: https://github.com/DJS-JPN/Blade-NEXT/wiki/guilds")
  }

  async users(message) {
    return message.sendMessage("https://blade-next.now.sh/api/users\n\nWiki: https://github.com/DJS-JPN/Blade-NEXT/wiki/users")
  }

  async guild(message) {
    return message.sendMessage(`http://blade-next.now.sh/api/guilds/${message.guild.id}\n\nWiki: https://github.com/DJS-JPN/Blade-NEXT/wiki/guild`)
  }

  async members(message) {
    return message.sendMessage(`http://blade-next.now.sh/api/guilds/${message.guild.id}/members\n\nWiki: https://github.com/DJS-JPN/Blade-NEXT/wiki/members`)
  }

  async channels(message) {
    return message.sendMessage(`http://blade-next.now.sh/api/guilds/${message.guild.id}/channels\n\nWiki: https://github.com/DJS-JPN/Blade-NEXT/wiki/channels`)
  }

  async channel(message, [key, ...params]) {
    return message.sendMessage(`http://blade-next.now.sh/api/guilds/${message.guild.id}/channels/${this.client.channels.get(key) || message.channel.id}\n\nWiki: https://github.com/DJS-JPN/Blade-NEXT/wiki/channels`)
  }

  async roles(message) {
    return message.sendMessage(`http://blade-next.now.sh/api/guilds/${message.guild.id}/roles`)
  }
}
