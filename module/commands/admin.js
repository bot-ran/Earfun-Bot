module.exports.config = {
	name: "admin",
	version: "1.0.1", 
	permssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info.",
	category: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args }) {
const axios = require("axios")
const request = require('request')
const fs = require('fs-extra')

	
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");


	
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");


	
var link = ["https://i.postimg.cc/j5MM8dgn/Picsart-24-12-23-11-23-30-237.jpg",
"https://i.postimg.cc/j5DMFYG8/Picsart-24-12-23-11-23-16-386.jpg", "https://i.postimg.cc/8kH70fm0/Picsart-24-12-23-11-22-41-740.jpg"];var callback = () => api.sendMessage({body:`🥰আসালামু আলাইকুম ❤️

❣️❤️ENJOY MUCH MUCH ❤️❣️

❌THis Bot Made By : Earfun Ahamed❤️❣️

🔰THIS IS BANGLA AI BOT 🔰

BOT NAME : ${global.config.BOTNAME}

💖TAKE LOVE FROM Earfun-BOT💖

🌺ব্যবহারে মানুষ চেনা যায় ✔️

⚠️BOT: ADMIN: Earfun Ahamed⚠️

⚠️BOT:MAIN ADMIN: 〲EaRFuN卝 চৌধুরি ツ࿐⚠️

⚠️WHATSAPP: 01310488216⚠️

⛔FACEBOOK : https:https://www.facebook.com/share/1EYDw8X9oL/

🕌💪 POWER OF MUSLIM 🕋🕌


BOT PREFIX : ${global.config.PREFIX}

➡️YOUTUB ➡️ N/A

➡️FACEBOOK PAGE➡️:N/A

➟ UPTIME

TODAY IS TIME : ${juswa} 

BOT IS RUNNING ${hours}:${minutes}:${seconds}.

THANKS FOR USING ${global.config.BOTNAME} 『🙅🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
