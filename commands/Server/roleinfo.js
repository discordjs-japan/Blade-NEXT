const { Command, Timestamp } = require("klasa")
const { MessageEmbed } = require("discord.js")
module.exports = class extends Command {

  constructor(...args) {
    super(...args, {
      runIn: ["text"],
      requiredPermissions: ["SEND_MESSAGES", "SEND_MESSAGES"],
      description: language => language.get("COMMAND_ROLEINFO_DESCRIPTION"),
      usage: "<Role:rolename>"
    })
    this.timestamp = new Timestamp("dddd, MMMM d YYYY")
  }

  run(msg, [role]) {
    const perms = {
      ADMINISTRATOR: msg.language.get("COMMAND_ROLEINFO_ADMINISTRATOR"),
      VIEW_AUDIT_LOG: msg.language.get("COMMAND_ROLEINFO_VIEW_AUDIT_LOG"),
      MANAGE_GUILD: msg.language.get("COMMAND_ROLEINFO_MANAGE_GUILD"),
      MANAGE_ROLES: msg.language.get("COMMAND_ROLEINFO_MANAGE_ROLES"),
      MANAGE_CHANNELS: msg.language.get("COMMAND_ROLEINFO_MANAGE_CHANNELS"),
      KICK_MEMBERS: msg.language.get("COMMAND_ROLEINFO_KICK_MEMBERS"),
      BAN_MEMBERS: msg.language.get("COMMAND_ROLEINFO_BAN_MEMBERS"),
      CREATE_INSTANT_INVITE: msg.language.get("COMMAND_ROLEINFO_CREATE_INSTANT_INVITE"),
      CHANGE_NICKNAME: msg.language.get("COMMAND_ROLEINFO_CHANGE_NICKNAME"),
      MANAGE_NICKNAMES: msg.language.get("COMMAND_ROLEINFO_MANAGE_NICKNAMES"),
      MANAGE_EMOJIS: msg.language.get("COMMAND_ROLEINFO_MANAGE_EMOJIS"),
      MANAGE_WEBHOOKS: msg.language.get("COMMAND_ROLEINFO_MANAGE_WEBHOOKS"),
      VIEW_CHANNEL: msg.language.get("COMMAND_ROLEINFO_VIEW_CHANNEL"),
      SEND_MESSAGES: msg.language.get("COMMAND_ROLEINFO_SEND_MESSAGES"),
      SEND_TTS_MESSAGES: msg.language.get("COMMAND_ROLEINFO_SEND_TTS_MESSAGES"),
      MANAGE_MESSAGES: msg.language.get("COMMAND_ROLEINFO_MANAGE_MESSAGES"),
      EMBED_LINKS: msg.language.get("COMMAND_ROLEINFO_EMBED_LINKS"),
      ATTACH_FILES: msg.language.get("COMMAND_ROLEINFO_ATTACH_FILES"),
      READ_MESSAGE_HISTORY: msg.language.get("COMMAND_ROLEINFO_READ_MESSAGE_HISTORY"),
      MENTION_EVERYONE: msg.language.get("COMMAND_ROLEINFO_MENTION_EVERYONE"),
      USE_EXTERNAL_EMOJIS: msg.language.get("COMMAND_ROLEINFO_USE_EXTERNAL_EMOJIS"),
      ADD_REACTIONS: msg.language.get("COMMAND_ROLEINFO_ADD_REACTIONS"),
      CONNECT: msg.language.get("COMMAND_ROLEINFO_CONNECT"),
      SPEAK: msg.language.get("COMMAND_ROLEINFO_SPEAK"),
      MUTE_MEMBERS: msg.language.get("COMMAND_ROLEINFO_MUTE_MEMBERS"),
      DEAFEN_MEMBERS: msg.language.get("COMMAND_ROLEINFO_DEAFEN_MEMBERS"),
      MOVE_MEMBERS: msg.language.get("COMMAND_ROLEINFO_MOVE_MEMBERS"),
      USE_VAD: msg.language.get("COMMAND_ROLEINFO_USE_VAD")
    }
    const allPermissions = Object.entries(role.permissions.serialize()).filter(perm => perm[1]).map(([perm]) => perms[perm]).join(", ")
    return msg.sendEmbed(new MessageEmbed()
      .setColor(role.hexColor || 0xFFFFFF)
      .addField(msg.language.get("COMMAND_ROLEINFO_NAME"), role.name, true)
      .addField(msg.language.get("COMMAND_ROLEINFO_ID"), role.id, true)
      .addField(msg.language.get("COMMAND_ROLEINFO_COLOR"), role.hexColor || msg.language.get("NONE"), true)
      .addField(msg.language.get("COMMAND_ROLEINFO_CREATION_DATE"), this.timestamp.display(role.createdAt), true)
      .addField(msg.language.get("COMMAND_ROLEINFO_HOISTED"), role.hoist ? msg.language.get("YES") : msg.language.get("NO"), true)
      .addField(msg.language.get("COMMAND_ROLEINFO_MENTIONABLE"), role.mentionable ? msg.language.get("YES") : msg.language.get("NO"), true)
      .addField(msg.language.get("COMMAND_ROLEINFO_PERMISSIONS"), allPermissions))
  }
}