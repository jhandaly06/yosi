/*CMD
  command: manual_withdraw_28
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withrawal

  <<ANSWER
*📤 How many BTC you want to withdraw?* 

*ℹ Minimum:* `0.0005` BTC

*➡ Send now the amount you want to withdraw*
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let withdrawn =
Libs.ResourcesLib.userRes("withdrawn");
let wallet =
User.getProperty("dogewallet")
let balance = Libs.ResourcesLib.userRes("balance");
let amount = parseFloat(data.message);
let total = 
Libs.ResourcesLib.anotherChatRes("totalPayment" ,"global")
if (amount<="0.00049"){
Bot.sendMessage("*⛔ Oops! You didn't reach the minimum withdrawal. *")
Bot.runCommand("/bahay")
}else{
if (amount>balance.value()){
Bot.sendMessage("*⛔ Oops! You don't have this enough balance.*")
Bot.runCommand("manual_withdraw_28")
}else{
User.setProperty("amount" , amount, "string")
balance.remove(amount)
total.add(amount)
withdrawn.add(amount)
Libs.CoinPayments.apiCall({
  fields: { cmd: "create_withdrawal",
            amount: amount,
            currency:"DOGE",
            address: wallet,
            //auto_confirm : 1
},
  onSuccess: '/onSuccessManual'
});
}
}


