// Copyright (c) 2017-2018 dirigeants. All rights reserved. MIT license.
const { Monitor } = require('klasa')

module.exports = class extends Monitor {
  constructor(...args) {
    super(...args, {
      name: 'AdblockMonitor',
      ignoreEdits: false,
      ignoreBlacklistedUsers: false,
      ignoreOthers: false
    })
  }

  async run(message) {
    if (!message.guild || !message.guild.settings.adblock.enabled || !message.guild.settings.adblock.exclude[message.guild.channels.id]) return null
    if (await message.hasAtLeastPermissionLevel(6)) return null
    if (!/(https?:\/\/)?(www\.)?(discord\.(gg|li|me|io)|discordapp\.com\/invite)\/.+/.test(message.content)) return null
    return message.delete().catch(err => this.client.emit('log', err, 'error'))
  }
}
