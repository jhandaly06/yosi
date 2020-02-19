/*CMD
  command: /send_user
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel
  answer: *Send Your Message*
  keyboard: 🔙 Return
  aliases: 
CMD*/

if(message=="🔙 Return"){
Bot.runCommand("/adminpanelko")
}else{
let msg = "🔍 *Message From Administrator * \n\n√ " +data.message;
User.setProperty("msg", msg, "string");
Bot.runCommand("/send_id_28");
}
