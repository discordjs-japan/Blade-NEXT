const { Command } = require('klasa')

module.exports = class extends Command {

  constructor(...args) {
    super(...args, {
      runIn: ['text'],
      requiredPermissions: ['MANAGE_CHANNELS'],
      permissionLevel: 6,
      description: '', // TODO
      usage: '<exclude|enable|disable> [add|remove] [channel:channelname]',
      usageDelim: ' ',
      subcommands: true
    })
  }

  async enable(message) {
    await message.guild.settings.update('adblock.enabled', true)
    return message.sendMessage('Done.')
  }

  async disable(message) {
    await message.guild.settings.update('adblock.enabled', false)
    return message.sendMessage('Done.')
  }

  async exclude(message, [mode, channel = message.guild.channel]) {

  }
}
