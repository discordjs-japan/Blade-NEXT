const { Task } = require("klasa")

module.exports = class extends Task {
  async run() {
    const playing = [
      `@${this.client.user.tag} help｜djs-jpn.ga`,
      `${this.client.guilds.size} guilds｜djs-jpn.ga`,
      `Default Prefix：${this.client.settings.prefix}｜djs-jpn.ga`,
      `${this.client.users.size} users｜djs-jpn.ga`,
      `${this.client.commands.size} commands｜djs-jpn.ga`
    ]
    await this.client.user.setActivity(playing[this.client.fun.random(0, 4)], {type: "PLAYING"})
  }

  async init() {
    this.client.schedule.create("UpdatePlayingGameTask", "* */3 * * *")
  }
}
