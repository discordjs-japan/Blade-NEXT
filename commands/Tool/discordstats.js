const { Command } = require('klasa')
const fetch = require('node-fetch')

module.exports = class extends Command {

  constructor(...args) {
    super(...args, {
      runIn: ['text', 'dm', 'group'],
      description: language => language.get('COMMAND_DISCORDSTATS_DESCRIPTION'),
      requiredPermissions: ['EMBED_LINKS', 'SEND_MESSAGES']
    })
  }

  async run(message) {
    const summary = await fetch('https://status.discordapp.com/api/v2/summary.json').then(res => res.json())
    const incidents = await fetch('https://status.discordapp.com/api/v2/incidents.json').then(res => res.json())
    const status = summary.components.map(component => ({
      name: component.name,
      value: component.status === 'operational'
        ? message.language.get('COMMAND_DISCORDSTATS_NORMAL')
        : message.language.get('COMMAND_DISCORDSTATS_ABNORMAL'),
      inline: true,
    }))
    const allstats = (summary.status.description === 'All Systems Operational')
      ? message.language.get('COMMAND_DISCORDSTATS_GREED')
      : message.language.get('COMMAND_DISCORDSTATS_RED')
    const maintenance = {
      at: incidents.incidents[0].created_at,
      resolved: (incidents.incidents[0].status === 'resolved')
        ? message.language.get('COMMAND_DISCORDSTATS_RESOLVED')
        : message.language.get('COMMAND_DISCORDSTATS_REUNRESOLVED'),
    }
    return message.channel.send({
      embed: {
        color: 0x00FF00,
        footer: {
          icon_url: 'https://avatars3.githubusercontent.com/u/35397294?s=200&v=4',
          text: 'DEVELOPED BY DJS-JPN',
        },
        fields: [{
          name: '❯ Discord Server Status',
          value: allstats,
        }, ...status, {
          name: message.language.get('COMMAND_DISCORDSTATS_LAST_MAINTENANCE'),
          value: `${maintenance.at}（${maintenance.resolved}）`,
        }],
      },
    })
  }
}
