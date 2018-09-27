const { Client } = require("klasa")
const { config, token } = require("./config")

class BladeNEXTClient extends Client {

  constructor(...args) {
    super(...args)

    // Add any properties to your Klasa Client
  }

  // Add any methods to your Klasa Client

}

new BladeNEXTClient(config).login(token)