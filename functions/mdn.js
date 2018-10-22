const { Function } = require("klasa-functions")

module.exports = class extends Function {
  run(language) {
    switch(language) {
    case "en-US":
      return "https://developer.mozilla.org/en-US/search.json"
    case "ja":
      return "https://developer.mozilla.org/ja/search.json"
    default:
      throw "Language that does not exist"
    }
  }
}