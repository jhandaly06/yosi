/*CMD
  command: /onIncome
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Coinpayment
  answer: 
  keyboard: 
  aliases: 
CMD*/

var name=user.username ? user.username : user.first_name

let mention="["+name+"]"+"("+"tg://user?id="+user.telegramid+")"
let wallet = options.address;
let currency = options.currency;
let amount = options.amount;
let txn_id = options.txn_id;

User.setProperty("minerDoge" , amount, "integer");
Bot.runCommand("/mina28");

let profit = Libs.ResourcesLib.userRes("profit");
let active =
Libs.ResourcesLib.userRes("active");
let total = Libs.ResourcesLib.anotherChatRes("totalDeposit", "global");
let balance = Libs.ResourcesLib.userRes("balance");
let miner = Libs.ResourcesLib.userRes("miner");
let multi = amount*2;

if(amount>=1){
Api.sendMessage({chat_id:"@DemoKirigaya1", text:"🚩 *New Investment* \n\n *"+user.first_name+"* just invested *"+amount.toFixed(4)+" BTC*\n\n *🆔 TXID:*\nhttps://www.blockchain.com/btc/tx/"+txn_id,parse_mode:"markdown", disable_web_page_preview: true})

Bot.sendMessage("🙌 "+mention+"\n\n*✅ Your Funds already received to our bot*\n*💸 Amount Invested:* "+amount.toFixed(4)+" BTC\n📨* Expected Return:* "+multi.toFixed(4)+" BTC\n\nhttps://blockchain.com/btc/tx/"+txn_id)

Bot.sendMessageToChatWithId(978337988,"✅ *New Investment* \n\n👤 *Investor:* "+user.first_name+" ("+user.telegramid+")\n\n💵 *Amount: "+amount.toFixed(4)+" DOGE*")

active.add(amount);
total.add(amount);
miner.add(amount);
balance.growth.add({
value : miner.value()*2,
interval : 1*60*60*24
})
let referrer = Libs.ReferralLib.currentUser.attractedByUser();
let refcom = amount*0.1;

if(referrer){
  let referrerRes = Libs.ResourcesLib.anotherUserRes("balance", referrer.telegramid);
let referrerEarn = Libs.ResourcesLib.anotherUserRes("refCom", referrer.telegramid);
let referrerDeposit = Libs.ResourcesLib.anotherUserRes("refDeposit", referrer.telegramid);

referrerRes.add(refcom);
referrerEarn.add(refcom);
referrerDeposit.add(amount);

Bot.sendMessageToChatWithId(referrer.telegramid, "✅ *Referral Commission: " +refcom.toFixed(8)+" BTC*");
}
}
