const { Language } = require("klasa")

module.exports = class extends Language {

  constructor(...args) {
    super(...args)
    this.language = {
      COMMAND_AVATAR_DESCRIPTION: "Get the URL of your Avatar",
    }
  }

  async init() {
    await super.init()
  }

}
