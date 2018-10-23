const { Command } = require('klasa')
const request = require('request')

module.exports = class extends Command {

  constructor(...args) {
    super(...args, {
      enabled: true,
      runIn: ['text', 'dm', 'group'],
      requiredPermissions: ['EMBED_LINKS'],
      description: 'Searches the Discord.js docs for your query.',
      extendedHelp: 'No extended help available.',
      usage: '<master|stable|commando|rpc> <query:str>',
      usageDelim: ' ',
      subcommands: true
    })
  }

  async master(message, [query]) {
    await request('https://djsdocs.sorta.moe/main/master/embed', {
      qs: {
        q: query
      },
      method: 'GET',
      json: true
    }, (error, request, body) => {
      if (!body) return message.sendMessage(`Information matching \`${query}\` could not be found.`)
      return message.sendEmbed(body)
    })
  }

  async stable(message, [query]) {
    await request('https://djsdocs.sorta.moe/main/stable/embed', {
      qs: {
        q: query
      },
      method: 'GET',
      json: true
    }, (error, request, body) => {
      if (!body) return message.sendMessage(`Information matching \`${query}\` could not be found.`)
      return message.sendEmbed(body)
    })
  }

  async commando(message, [query]) {
    await request('https://djsdocs.sorta.moe/commando/master/embed', {
      qs: {
        q: query
      },
      method: 'GET',
      json: true
    }, (error, request, body) => {
      if (!body) return message.sendMessage(`Information matching \`${query}\` could not be found.`)
      return message.sendEmbed(body)
    })
  }

  async rpc(message, [query]) {
    await request('https://djsdocs.sorta.moe/rpc/master/embed', {
      qs: {
        q: query
      },
      method: 'GET',
      json: true
    }, (error, request, body) => {
      if (!body) return message.sendMessage(`Information matching \`${query}\` could not be found.`)
      return message.sendEmbed(body)
    })
  }
}
