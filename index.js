const { Client } = require("klasa")
const { config, token } = require("./config")

class BladeNEXTClient extends Client {

  constructor(...args) {
    super(...args)
  }
}

new BladeNEXTClient(config).login(token)
