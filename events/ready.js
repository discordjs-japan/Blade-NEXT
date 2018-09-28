const { Event } = require("klasa")

module.exports = class extends Event {

  constructor(...args) {
    super(...args, {
      enabled: true,
      once: false,
      event: "ready"
    })
  }

  async run() {
    await this.client.user.setActivity(`@${this.client.user.tag} help｜djs-jpn.ga`, {type: "STREAMING"})
  }
}
