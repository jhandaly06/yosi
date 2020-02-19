/*CMD
  command: /remove_balance
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
  let msg = message
  User.setProperty("id", msg, "integer")
  Bot.runCommand("/on_remove")
}

