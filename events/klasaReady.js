const { Event } = require("klasa")

module.exports = class extends Event {
  async run() {
    await this.client.user.setActivity(`@${this.client.user.tag} help｜djs-jpn.ga`, {type: "PLAYING"})
  }
}
