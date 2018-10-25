// Copyright (c) 2017-2018 dirigeants. All rights reserved. MIT license.
const { Monitor } = require('klasa')

module.exports = class extends Monitor {
  constructor(...args) {
    super(...args, {
      ignoreSelf: true
      
    })
  }

  async run(message) {
    if (!message.guild || !message.guild.settings.adblock.enabled) return
    if (await message.hasAtLeastPermissionLevel(6)) return
    if (!/(https?:\/\/)?(www\.)?(discord\.(gg|li|me|io)|discordapp\.com\/invite)\/.+/.test(message.content)) return
    return message.delete().catch(err => this.client.emit('log', err, 'error'))
  }
}