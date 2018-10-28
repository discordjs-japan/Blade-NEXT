const { Command } = require('klasa')

module.exports = class extends Command {

  constructor(...args) {
    super(...args, {
      description: language => language.get('COMMAND_VOTE_DESCRIPTION'),
      requiredPermissions: ['SEND_MESSAGES']
    })
  }

  async run(message) {
    return message.sendMessage('https://discordbots.org/bot/447211129257721856/vote')
  }
}
