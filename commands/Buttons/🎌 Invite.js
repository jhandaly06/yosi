/*CMD
  command: 🎌 Invite
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/

let userid = user.telegramid
let partnerlink = Libs.ReferralLib.currentUser.getRefLink( "LadyLucks_Bot",+userid);

let refdep = Libs.ResourcesLib.userRes("refDeposit")

let refcom = Libs.ResourcesLib.userRes("refCom")

let lib = Libs.ReferralLib

refList = lib.currentUser.refList.get()

Bot.sendMessage(
     "*🎌 Invite Section*\n\n*1⃣ Level:* 10%\n\n💸 _Receive unlimited income for every deposit made by your referral_")
Bot.sendMessage("🔗 Your Invite Link to share for your friends:\n"+partnerlink)
Bot.sendMessage("🎌* Your Referrals Deposits and your commissions*\n\n🔽 *Referral Deposits:*\n`" +
    refdep.value().toFixed(8) +
    " BTC`\n💰 *Referral Commissions:*\n`" +
    refcom.value().toFixed(8) +
    " BTC`\n\n📝 *Total Referrals:** " +
   refList.length+ "* *Users*")
