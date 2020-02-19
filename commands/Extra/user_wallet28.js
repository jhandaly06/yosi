/*CMD
  command: user_wallet28
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Extra
  answer: 
  keyboard: 
  aliases: 💼 wallet info
CMD*/

let wallet = User.getProperty("dogewallet")

if (wallet == undefined) {
  msg =
    "*💬 Your currently BTC wallet is:* \n `Not Found` \n\n *📝 Set your Bitcoin wallet, that's where your payout will be credited.*"
} else {
  msg =
    "*💬 Your currently BTC wallet is: *`" +
    wallet +
    "` \n\n_🏧 This wallet address is where your payout will be credited_\n\n *📝 Set your Bitcoin wallet, that's where your payout will be credited.*"
}

var button = [[{ title: " ✏ Set/ Change Wallet", command: "Setwallet_28" }]]
Bot.sendInlineKeyboard(button, msg)

