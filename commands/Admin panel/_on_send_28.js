/*CMD
  command: /on_send_28
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel
  answer: *Send Amount*
  keyboard: 🔙 Return
  aliases: 
CMD*/

if(message=="🔙 Return"){
Bot.runCommand("/adminpanelko")
}else{
let amount = parseFloat(message);
let tgid = User.getProperty("tgid");
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid);
res.add(parseFloat(amount));
Bot.sendMessage("*Succesfully Added Balance* \n👤 User: "+tgid+"\n💰 Amount:"+amount+" DOGE");

Bot.sendMessageToChatWithId(tgid,"🎁 You Received "+amount+" DOGE\n`Added To Balance`");
}
