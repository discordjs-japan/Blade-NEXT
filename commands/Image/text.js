const { Command } = require("klasa")
const { Canvas } = require("canvas-constructor")
const { get } = require("snekfetch")
const fs = require("fs-nextra")

Canvas.registerFont(`${process.cwd()}/assets/fonts/Roboto-Regular.ttf`, "Roboto")

module.exports = class extends Command {

  constructor(...args) {
    super(...args, {
      enabled: false,
      runIn: ["text", "dm", "group"],
      requiredPermissions: [],
      cooldown: 60,
      description: "text",
      extendedHelp: "No extended help available."
    })
  }

  async run(message) {
    const load = await message.sendMessage("画像生成中")
    message.channel.sendFile(await this.createImage(message.member.user))
    return load.delete()
  }

  async createImage(member) {
    const avatar = await get(member.displayAvatarURL({ format: "png", size: 256 })).then(res => res.body).catch(e => {
      Error.captureStackTrace(e)
      return e
    })
    const ImagePath = await fs.readFile(`${process.cwd()}/assets/images/img3.png`)
    return new Canvas(400, 180)
      .addImage(ImagePath, 0, 0, 400, 180)
      .setGlobalAlpha(0.5)
      .setColor("#99AAB5")
      .addRect(155, 0, 300, 180)
      .setGlobalAlpha(1)
      .setTextFont("20px Roboto")
      .setColor("#23272A")
      .addText(member.tag, 360, 360, 120)
      .setShadowColor("rgba(22, 22, 22, 1)")
      .setShadowOffsetY(5)
      .setShadowBlur(10)
      .save()
      .addCircle(84, 90, 62)
      .restore()
      .addRoundImage(avatar, 20, 26, 128, 128, 64)
      .toBufferAsync()
  }
}
