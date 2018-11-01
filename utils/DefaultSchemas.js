const {Client} = require('klasa')

module.exports.Adblock = Client.defaultGuildSchema
  .add('adblock', folder => folder
    .add('enabled', 'boolean', {default: false})
    .add('exclude', 'any', {array: true})
  )