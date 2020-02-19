/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Join System
  answer:  ⌛* To use this bot you need to join to our channel:* @DemoKirigaya1
  keyboard: ➕ I am a member ➕
  aliases: 
CMD*/

function doTouchOwnLink(){
  Bot.runCommand("/bahay");
}

function doAttracted(channel){
  Bot.runCommand("/bahay")
}
function doAtractedByUser(refUser){
  Bot.runCommand("/bahay")
}
function doAlreadyAttracted(){
  Bot.runCommand("/bahay");
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);
