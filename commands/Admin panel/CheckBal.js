/*CMD
  command: CheckBal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel
  answer: *Send User Telegram ID*
  keyboard: 🔙 Return
  aliases: 
CMD*/

if(message=="🔙 Return"){
Bot.runCommand("/adminpanelko")
}else{
let id = data.message; 
let user_bal = Libs.ResourcesLib.anotherUserRes("balance" , id);
Bot.sendMessage("*Users Total Balance:* \n"+user_bal.value().toFixed(8) + " Doge")
}
