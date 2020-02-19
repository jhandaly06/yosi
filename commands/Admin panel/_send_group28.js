/*CMD
  command: /send_group28
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel
  answer: *Send Message To Group*
  keyboard: 🔙 Return
  aliases: 
CMD*/

let msg = data.message
Bot.sendMessageToAllChats(msg)
if(message=="🔙 Return"){
Bot.runCommand("/adminpanelko")
}
