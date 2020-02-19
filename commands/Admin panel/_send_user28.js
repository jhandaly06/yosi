/*CMD
  command: /send_user28
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel
  answer: *Send User Telegram ID*
  keyboard: 🔙 Return
  aliases: 
CMD*/

if (message == "🔙 Return") {
  Bot.runCommand("/adminpanelko")
} else {
  let msg = "✨ *Administrator's Message:* \n\n √" + data.message
  User.setProperty("msg", msg, "string")
  Bot.runCommand("/send_id_28")
}

