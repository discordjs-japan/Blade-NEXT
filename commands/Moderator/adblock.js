const { Command } = require('klasa')

module.exports = class extends Command {

  constructor(...args) {
    /**
     * Any default options can be omitted completely.
     * if all options are default, you can omit the constructor completely
     */
    super(...args, {
      enabled: true,
      runIn: ['text'],
      requiredPermissions: [],
      permissionLevel: 6,
      description: '',
      extendedHelp: 'No extended help available.',
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
