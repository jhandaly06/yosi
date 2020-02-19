/*CMD
  command: check
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Join System
  answer: 
  keyboard: 
  aliases: 
CMD*/

let user = options.result.status;
User.setProperty("status" , user, "string");
if (user=="member" | user =="administrator" | user=="creator"){
Bot.runCommand("/bahay")
}

if (user=="left"){
Bot.sendMessage("⌛* You need to join to our channel to use this bot:* @DemoKirigaya1")
}
