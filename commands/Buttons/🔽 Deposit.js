/*CMD
  command: 🔽 Deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = User.getProperty("depoWallet")

if(wallet==undefined){

Libs.CoinPayments.createPermanentWallet({
  currency: "DOGE",
  label: "@"+user.username,
  onSuccess: "/onWalletCreation",
  onIPN: "/onPermanentWalletIPN",
  onIncome: "/onIncome"
});
}else{
Bot.sendMessage("🔰* We offer 200% daily*\n\n🔱 _Our plan starts with a minimum investment of 0.0002 BTC_\n\n⚠* Please note don't send below 0.0002 BTC or your investment will be consider as a donation*")
Bot.sendMessage("*📍 To deposit funds please send to the following address:*\n\n📝 _Copy this address and make a payment: _`"+wallet+"`\n\n📖* Note: *_Your investment will start after the confirmation is done._")
}
