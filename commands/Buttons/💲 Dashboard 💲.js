/*CMD
  command: 💲 Dashboard 💲
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/

let miner = Libs.ResourcesLib.userRes("miner")
let daily = miner.value() * 2
let profit = Libs.ResourcesLib.userRes("profit")
let active = Libs.ResourcesLib.userRes("active")
let balance = Libs.ResourcesLib.userRes("balance")
let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
let refcom = Libs.ResourcesLib.userRes("refCom")
Bot.sendMessage(
  "*👤 Account Dashboard*" +
    "" +
    "\n\n *💳 Withdrawable Balance:*"+
    "\n" +
    (balance.value() + profit.value()).toFixed(8) +
    " *BTC*" +
    "\n\n➕ *Active Investment:* " +
    "\n" +
    active.value().toFixed(8) +
    " *BTC*" +
    "\n\n💹 *Total Profit:*" +
    "\n" +
    profit.value().toFixed(8) +
    " *BTC*" +
    "\n\n🎁 *Affiliate Earning:*" +
    "\n" +
    refcom.value().toFixed(8) +
    " *BTC*" +
    "\n\n*💸 Total Withdrawn:  *" +
    "\n" +
    withdrawn.value().toFixed(8) +
    " *BTC*"
)

