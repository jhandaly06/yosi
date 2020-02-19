/*CMD
  command: /wallet28
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withrawal
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (message.length == 34) {
  Bot.sendMessage(
    "✅* Your Bitcoin Wallet Address accepted*\n_Enjoy our automated system_\n\n🏧* Your receiving payout address:* " +
      message +
      ""
  )
  User.setProperty("dogewallet", message, "string")
} else {
  Bot.sendMessage(
    "🚫*Verification Failed*\n_ Please enter a valid Bitcoin Wallet Address_"
  )
  Bot.runCommand("Setwallet_28")
}
