/*CMD
  command: /manuaal_28
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withrawal

  <<ANSWER
*📤 How many DOGE you want to withdraw? *

*Minimum:* 100 DOGE
*Maximum:* No Maximium  

➡ *Send now the amount of  you want to withdraw*
  ANSWER
  keyboard: 
  aliases: 
CMD*/

let message = data.message;
if(message=="🔙 Return"){
Bot.runCommand("/bahay")
}else{
let amount = parseFloat(message);
let balance =
Libs.ResourcesLib.userRes("balance")
let withrawn =
Libs.ResourcesLib.userRes("withrawn")
let total =
Libs.ResourcesLib.anotherChatRes("totalPayment","global")
let admin = 978337988
let wallet = User.getProperty("dogewallet")

if(amount>balance.value()){
Bot.sendMessage("⛔ *You don't have enough balance for this amount*")
}else{
if(amount<=balance.value()){
Bot.sendMessage("💸 *Withdrawal Paid*\nYour payment is being processed automatically right now!\n\n_🏧 Just wait for 6 confirmation on the blockchain_\n\n *📖 Withdrawal Details:*\n`"+(amount.toFixed(8))+" BTC`to the wallet:\n`"+wallet+"`\n\n⌛ *Always check your wallet*");

Bot.sendMessageToChatWithId(admin,"➖ *New Withrawal Request* \n\n👤 *From User:* "+user.username+"("+user.telegramid+")\n💰* Amount:* "+amount+" DOGE\n💼 *Wallet:* \n"+wallet+"")

Api.sendMessage({chat_id:"@DemoKirigaya1",text:"💸 *New Withrawal Paid\n\n"+user.first_name+" made a withdrawal of* "+amount.toFixed(8)+" *BTC*\n💰 _Receiving Wallet Address:\n`"+wallet+"`\n\n🙏* Please check your wallet for your payout, thank you for trusting us! *", parse_mode:"markdown"})
}else{
total.add(amount)
balance.remove(amount)
withrawn.add(amount)
Libs.CoinPayments.apiCall({
  fields: { cmd: "create_withdrawal",
            amount: amount,
            currency:"DOGE",
            address: wallet,
            //auto_confirm: 1
},
  onSuccess: '/onSuccessManual'
});
Bot.runCommand("/bahay")
}
}
}

