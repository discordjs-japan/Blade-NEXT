const { Client } = require('klasa')
const { config, token } = require('./config')

const { Adblock } = require('./utils/DefaultSchemas')

Client.use(require('klasa-dashboard-hooks'))
Client.use(require('klasa-functions'))

class BladeNEXTClient extends Client {
  constructor (options) {
    super({...options, Adblock})
  }
}

new BladeNEXTClient(config).login(token)