/*CMD
  command: /onWalletCreation
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Coinpayment
  answer: 
  keyboard: 
  aliases: 
CMD*/

//Bot.sendMessage(inspect(options));

let wallet = options.result.address;
Bot.sendMessage("✋ *Please wait while generating your deposit address...*")
Bot.run({command: "🔽 Deposit", run_after: 30,
})
User.setProperty("depoWallet", wallet, "string")
