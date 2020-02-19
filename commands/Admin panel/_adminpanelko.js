/*CMD
  command: /adminpanelko
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin panel
  answer: 
  keyboard: 
  aliases: 📮 admin panel 📮
CMD*/

var name=user.username ? user.username : user.first_name

let mention="["+name+"]"+"("+"tg://user?id="+user.telegramid+")"

if(user.telegramid==978337988){
User.addToGroup('Admin')
Bot.sendKeyboard(" User Settings , Withrawal Settings \n  Brodcasting ,  Log Out" , " 👋 *Hi* " +mention+" *You are now accessing the admin panel*");
}
