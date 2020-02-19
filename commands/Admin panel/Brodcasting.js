/*CMD
  command: Brodcasting
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    {title: "Send Message To Bot User", command: "/send_user"},
    {title: "Send Message To Group", command: 
"/send_group"},
    {title: "Send Message To Channel", command: 
"/send_channel"}
];
Bot.sendInlineKeyboard(buttons,"*🔊 Brodcasting* \nYou can send Message To Bot user Community and Payment Channel");
