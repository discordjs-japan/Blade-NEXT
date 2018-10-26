// Copyright (c) 2017-2018 dirigeants. All rights reserved. MIT license.
const { Monitor } = require('klasa')

module.exports = class extends Monitor {
  constructor(...args) {
    super(...args, {
      enabled: true,
      name: 'AdblockMonitor',
      ignoreBots: true,
      ignoreWebhooks: true,
      ignoreSelf: true,
      ignoreEdits: false,
      ignoreBlacklistedUsers: false,
      ignoreBlacklistedGuilds: true,
      ignoreOthers: false
    })
  }

  async run(message) {
    if (!message.guild || !message.guild.options.adblock.enabled) return null
    if (await message.hasAtLeastPermissionLevel(6)) return null
    if (!/(https?:\/\/)?(www\.)?(discord\.(gg|li|me|io)|discordapp\.com\/invite)\/.+/.test(message.content)) return null
    return message.delete().catch(err => this.client.emit('log', err, 'error'))
  }
}