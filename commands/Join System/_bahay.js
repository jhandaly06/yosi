/*CMD
  command: /bahay
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Join System
  answer: 
  keyboard: 
  aliases: 
CMD*/

var name=user.username ? user.username : user.first_name

let mention="["+name+"]"+"("+"tg://user?id="+user.telegramid+")"
if(user.telegramid==978337988){
Bot.sendKeyboard("💲 Dashboard , \n🔽 Deposit, 🔼 Withdraw  ,\n🎌 Invite , 🔍 Extra , 💻 Calculator ,\n📞 Administrator,\n📮 Admin Panel 📮","*🏡 Mènu*")
}else{
let user = User.getProperty("status");
if (user=="member" | user =="administrator" | user=="creator"){
Bot.sendKeyboard("💲 Dashboard , \n🔽 Deposit, 🔼 Withdraw  ,\n🎌 Invite ,💻 Calculator,\n📞 Administrator ","*🏡 Hello* "+mention+" *Welcome to Lady Lucks!*")
}
}
