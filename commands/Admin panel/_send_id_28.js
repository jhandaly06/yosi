/*CMD
  command: /send_id_28
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
let msg = User.getProperty("msg");
let pmid = data.message;
Bot.sendMessageToChatWithId(pmid, msg);
Bot.sendMessage("*Message Sent *\n👤 To User "+pmid+"\n✉️ Your Messsage:\n\n"+msg);
}
