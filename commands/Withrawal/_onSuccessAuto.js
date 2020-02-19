/*CMD
  command: /onSuccessAuto
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withrawal
  answer: 
  keyboard: 
  aliases: 
CMD*/

//Bot.sendMessage(inspect(options))
Bot.run({command: "/onSuccessAuto" , run_after: 60,
})
let result = options.body.result;
let error = options.body.error;
let wallet = User.getProperty("dogewallet")
let currency = options.currency; 
let txn_id = options.txn_id;

if (error == "ok"){

Api.sendMessage({chat_id:"@DemoKirigaya1",text:"💸 *New Withrawal Paid\n\n"+user.first_name+" made a withdrawal of* "+result.amount+" *BTC*\n💰 _Receiving Wallet Address:\n`"+wallet+"`\n\n🙏* Please check your wallet for your payout, thank you for trusting us! *\n\n"+txn_id , parse_mode:"markdown"})

Bot.sendMessage("💸 *Withdrawal Paid*\nYour payment is being processed automatically right now!\n\n_🏧 Just wait for 6 confirmation on the blockchain_\n\n *📖 Withdrawal Details:*\n`"+(result.amount)+" BTC`to the wallet:\n`"+wallet+"`\n\n⌛ https://dogechain.info/tx"+txn_id);

}else{
Bot.sendMessage(error)
}
