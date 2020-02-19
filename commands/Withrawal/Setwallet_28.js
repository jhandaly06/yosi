/*CMD
  command: Setwallet_28
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withrawal
  answer: 📌* Enter your receiving wallet address:*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let message = data.message;
if (message.length == 34) {
  Bot.sendMessage(
    "✅* Your Bitcoin Wallet Address accepted*\n_Enjoy our automated system_\n\n🏧* Your receiving payout address:* "+message)
  User.setProperty("dogewallet", message, "string")
}else{
Bot.sendMessage("⛔ _Please enter a valid Bitcoin Wallet Address_")
Bot.runCommand("Setwallet_28")
}
