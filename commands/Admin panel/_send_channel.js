/*CMD
  command: /send_channel
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel
  answer: *Send Your Message To Channel*
  keyboard: 🔙 Return
  aliases: 
CMD*/

if(message=="🔙 Return"){
Bot.runCommand("/adminpanelko")
}else{
let msg = data.message
Api.sendMessage({chat_id: "@DemoKirigaya1", text: msg})
Bot.sendMessage("*Your Message Sent To Channel*")
}
