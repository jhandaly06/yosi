/*CMD
  command: /mina28
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Coinpayment
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("balance");
let profit = Libs.ResourcesLib.userRes("profit");
let amount = User.getProperty("minerDoge");
amount = parseFloat(amount);
//You Can set the Growth Percentage By Changing the Amount to be Multiplied to "amount"
let max = amount*3.75;
let hourly = amount*0.08333333;
//Max value: -1
let secs_in_hour = 1*60*60;
let add = res.growth.add({
  value:hourly,
  interval:3600,
  max:max,
});

res.add(add)
profit.add(add)
