/*CMD
  command: 🔼 Withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet =
User.getProperty("dogewallet");
let balance = Libs.ResourcesLib.userRes("balance");
let wdinfo = 
Bot.getProperty("wdInfo")

if(wallet==undefined){
var button = [
    {title: "✏ Set Wallet", command: "Setwallet_28"} ];
Bot.sendInlineKeyboard(button,"*💬 Your currently BTC wallet is:* \n `Not Found` \n\n *📝 Set your Bitcoin wallet, that's where your payout will be credited.*")
}else{
if (balance.value()<0.0005){
Bot.sendMessage("*⛔ Insufficient balance, minimum withdrawal is 0.0005 BTC! *");
}else{
if (wdinfo=="auto"){
Bot.runCommand("auto_withdraw_28");
}else{
if (wdinfo=="manual"){
Bot.runCommand("manual_withdraw_28")
}else{
if (wdinfo=="StopPayments"){
Bot.runCommand("Stop_28")
}
}
}
}
}
