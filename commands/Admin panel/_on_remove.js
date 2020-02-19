/*CMD
  command: /on_remove
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel
  answer: *Send Amount*
  keyboard: 
  aliases: 
CMD*/

if (message == "🔙 Return") {
  Bot.runCommand("/adminpanelko")
}else{
let amount = parseFloat(message);
let tgid = User.getProperty("tgid");
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid);
res.remove(parseFloat(amount));
Bot.sendMessage("*Succesfully Removed Balance* \n👤 User: "+tgid+"\n💰 Amount - "+amount+" DOGE");

Bot.sendMessageToChatWithId(tgid,"💳 Removed Balance  "+amount+" DOGE\n`Removed To Balance`");
}
