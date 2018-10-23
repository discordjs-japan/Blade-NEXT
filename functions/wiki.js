const { Function } = require('klasa-functions')

module.exports = class extends Function {
  run(language) {
    switch (language) {
    case 'en-US':
      return 'https://en.wikipedia.org/api/rest_v1/page/summary'
    case 'ja':
      return 'https://ja.wikipedia.org/api/rest_v1/page/summary'
    default:
      throw 'Language that does not exist'
    }
  }
}