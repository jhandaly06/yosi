/*CMD
  command: User Settings
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
      [ { title: "Check User Balance", command: "CheckBal"} ],
      [ { title: "Add Funds To User", command: "/add_balance"} ],
      [ { title: "Remove Funds To User", command: "/remove_balance"} ],
      [ { title: "User Information", command: "/user_info"} ]
]

Bot.sendInlineKeyboard(buttons,"👤 *User Settings*\nYou can Manage and See The Total Information of a User Here");

