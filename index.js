const { Client } = require("klasa")
const { config, token } = require("./config")

Client.use(require("klasa-dashboard-hooks"))
class BladeNEXTClient extends Client {
  constructor (...args) {
    super(...args)
  }
}

new BladeNEXTClient(config).login(token)
