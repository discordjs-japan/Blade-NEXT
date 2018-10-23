const { Command, Timestamp } = require('klasa')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {

  constructor(...args) {
    super(...args, {
      description: language => language.get('COMMAND_USERINFO_DESCRIPTION'),
      usage: '[Member:membername]'
    })
    this.timestamp = new Timestamp('d MMMM YYYY')
  }

  async run(msg, [member]) {
    if (!member) member = await msg.guild.members.fetch(msg.author.id).catch(() => null)
    const statuses = {
      online: msg.language.get('COMMAND_USERINFO_ONLINE'),
      idle: msg.language.get('COMMAND_USERINFO_IDLE'),
      dnd: msg.language.get('COMMAND_USERINFO_DND'),
      offline: msg.language.get('COMMAND_USERINFO_OFFLINE')
    }
    return msg.sendEmbed(new MessageEmbed()
      .setColor(member.displayHexColor || 0xFFFFFF)
      .setThumbnail(member.user.displayAvatarURL() || 'https://github.com/DJS-JPN/res/blob/master/No_Image.png?raw=true')
      .addField(msg.language.get('COMMAND_USERINFO_NAME'), member.user.tag, true)
      .addField(msg.language.get('COMMAND_USERINFO_ID'), member.id, true)
      .addField(msg.language.get('COMMAND_USERINFO_DISCORDJOINDATE'), this.timestamp.display(member.user.createdAt), true)
      .addField(msg.language.get('COMMAND_USERINFO_SERVERJOINDATE'), this.timestamp.display(member.joinedTimestamp), true)
      .addField(msg.language.get('COMMAND_USERINFO_STATUS'), statuses[member.presence.status], true)
      .addField(msg.language.get('COMMAND_USERINFO_PLAYING'), member.presence.activity ? member.presence.activity.name : 'N/A', true)
      .addField(msg.language.get('COMMAND_USERINFO_HIGHESTROLE'), member.roles.size > 1 ? member.roles.highest.name : 'None', true)
      .addField(msg.language.get('COMMAND_USERINFO_HOISTROLE'), member.roles.hoist ? member.roles.hoist.name : 'None', true))
  }
}