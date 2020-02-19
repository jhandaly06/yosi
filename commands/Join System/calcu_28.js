/*CMD
  command: calcu_28
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Join System
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg = parseFloat(data.message)

let amount = parseFloat(data.message)

if (msg) {
  let hourly = amount * 0.083333333
  let daily = amount * 2
  let profit = amount * 2

  Bot.sendMessage(
    "*💻 Profit Calculator 💻*\n\n🔱 *Plan:* _200% after 1 day! _\n\n💸 *Daily Profit: " +
      daily.toFixed(6) +
      " BTC*\n⌛ _You will receive your all profits after 1 day!_\n\n🤑 *Total Profit: " +
      profit.toFixed(6) +
      " BTC*"
  )
}
