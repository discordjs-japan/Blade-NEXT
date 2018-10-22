const {Command} = require("klasa")

module.exports = class extends Command {
  constructor (...args) {
    super(...args, {
      enabled: true,
      runIn: ["text"],
      requiredPermissions: ["KICK_MEMBERS", "SEND_MESSAGES"],
      permissionLevel: 6,
      description: "",
      extendedHelp: "No extended help available.",
      usage: "<member:member> [reason:...string]",
      usageDelim: " "
    })
  }

  async run (msg, [member, reason]) {
    if (member.id === msg.author.id) throw "Why would you kick yourself?"
    if (member.id === this.client.user.id) throw "Have I done something wrong?"
    if (member.roles.highest.position >= msg.member.roles.highest.position) throw "You cannot kick this user."
    if (!member.kickable) throw "I cannot kick this user."
    await member.kick(reason)
    return msg.sendMessage(`${member.user.tag} got kicked.${reason ? ` With reason of: ${reason}` : ""}`)
  }
}
