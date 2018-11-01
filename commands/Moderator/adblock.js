const { Command } = require('klasa')

module.exports = class extends Command {

  constructor(...args) {
    super(...args, {
      runIn: ['text'],
      requiredPermissions: ['MANAGE_CHANNELS'],
      permissionLevel: 6,
      description: language => language.get('COMMAND_ADBLOCK_DESCRIPTION'),
      usage: '<enable|disable>',
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
}
