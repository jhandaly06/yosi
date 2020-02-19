/*CMD
  command: Trial
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("Please wait 1 minute")
Bot.run({command: "🔽 Deposit", run_after: 60,
})
