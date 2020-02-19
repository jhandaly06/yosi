/*CMD
  command: Withrawal Settings
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    {title: "Automatic Withrawals", command: "Automatically"},
    {title: "Manual Withrawal", command: 
"Manually"},
    {title: "Stop Payments", command: 
"StopPayments"}
];
Bot.sendInlineKeyboard(buttons,"⚙️* Withrawal Settings* \nYou can Setup Your Withrawal Setting Here  ");
