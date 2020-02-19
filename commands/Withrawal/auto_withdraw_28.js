/*CMD
  command: auto_withdraw_28
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withrawal

  <<ANSWER
*📤 How many BTC you want to withdraw?* 

*Minimum:* `0.0005 BTC`

*➡ Send now the amount of  you want to withdraw*
  ANSWER
  keyboard: 🔙 Return
  aliases: 
CMD*/

if(message == "🔙 Return"){
Bot.runCommand("/bahay")
}else{
let withrawn =
Libs.ResourcesLib.userRes("withrawn");
let total = 
Libs.ResourcesLib.anotherChatRes("totalPayment","global")
let wallet =
User.getProperty("dogewallet")
let balance = Libs.ResourcesLib.userRes("balance");
let amount = parseFloat(message);
if (amount<=0.00049){
Bot.sendMessage("*⛔ Oops! The minimum withdrawal is 0.0005 BTC*");
}else{
if (amount>balance.value()){
Bot.sendMessage("⛔ *You don't have enough balance for this amount*")

}else{
balance.remove(amount)
total.add(amount)
withrawn.add(amount)
Libs.CoinPayments.apiCall({
  fields: { cmd: "create_withdrawal",
            amount: amount,
            currency:"DOGE",
            address: wallet,
            auto_confirm: 1
},
  onSuccess: '/onSuccessAuto'
});
}
}
}
