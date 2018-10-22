const { Task } = require("klasa")

module.exports = class extends Task {
  constructor(...args) {
    super(...args, {enadle: true}) 
  }

  async run() {
    await this.client.user.setActivity(this.playing[this.client.fun.random(0, 4)], {type: "PLAYING"})
  }

  async init() {
    this.playing = [
      `@${this.client.user.tag} help｜djs-jpn.ga`,
      `${this.client.guilds.size} guilds｜djs-jpn.ga`,
      `Default Prefix：${this.client.options.prefix}｜djs-jpn.ga`,
      `${this.client.users.size} users｜djs-jpn.ga`,
      `${this.client.commands.size} commands｜djs-jpn.ga`
    ]
    this.client.schedule.create("UpdatePlayingGameTask", "* */5 * * *")
    await this.client.user.setActivity(this.playing[this.client.fun.random(0, 4)], {type: "PLAYING"})
  }
}
