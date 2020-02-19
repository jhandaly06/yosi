/*CMD
  command: /onSuccessManual
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withrawal
  answer: 
  keyboard: 
  aliases: 
CMD*/

var name=user.username ? user.username : user.first_name

let mention="["+name+"]"+"("+"tg://user?id="+user.telegramid+")"
let wallet = User.getProperty("dogewallet")
let amount = User.getProperty("amount")
Bot.sendMessage("🙌 "+mention+"\n💸 *Your Withdrawal Paid*\n\n💰 *Your withdrawal is being processed automatically right now!*\n\n_🏧 Just wait for 6 confirmation on the blockchain before you receive your payment_\n\n *📖 Withdrawal Details:\n"+amount+" BTC was sent to the wallet:*\n`"+wallet+"`\n\n⌛ *Check your wallet for your incoming payment!*")

Api.sendMessage({
chat_id : "@DemoKirigaya1" ,
text : "*💸 New Withdrawal Paid.\n\n 🧑‍ "+user.first_name+ "* just made a withdrawal of amount *"+amount+" BTC* "+"\n💰 _Receiving Wallet Address:_ \n`"+wallet+"`\n\n🙏* Please check your wallet for your receiving payout, thank you for trusting us and congratulations!*" , parse_mode : "Markdown"})

let admin = 978337988
Bot.sendMessageToChatWithId( admin, "➖ *New Withrawal*\n\n👤 Requested By: "+user.first_name+" ( "+user.telegramid+" )\n💵 Amount:"+amount+" DOGE\n💼 To Wallet:\n"+wallet)
Bot.runCommand("/bahay")
