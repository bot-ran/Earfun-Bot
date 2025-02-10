const path = require('path');
const fs = require('fs');

module.exports.config = {
    name: "info",           
    description: "admin information",
    permission: 0,          
    prefix: true,         
    cooldown: 5,
}

module.exports.run = ({api, event, args}) => {





const rndmp = Math.floor(Math.random() * 3);

const photo = path.join(__dirname, 'cache', `info${rndmp}.jpg`);



  
    
    
    const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");

    
    
    
    
    const msg = {
        body: `➢𝗢𝘄𝗻𝗲𝗿 𝗔𝗻𝗱 𝗕𝗼𝘁 𝗜𝗻𝗳𝗼🔰

⁂𝘽𝙤𝙩 𝙉𝙖𝙢𝙚: ${global.config.BOTNAME}
✡𝘽𝙤𝙩 𝙋𝙧𝙚𝙛𝙞𝙭: ${global.config.PREFIX}
✫𝘾𝙤𝙙𝙚 𝙊𝙬𝙣𝙚𝗿🌼 :🔰EARFUN ABAMED🔰,

✬𝐅𝐛 𝐋𝐢𝐧𝐤: https://www.facebook.com/share/1EYDw8X9oL/

✬𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: 01310488216

➳✴️𝙈𝘼𝙎𝙏𝙀𝙍 𝙊𝙁 𝘽𝙊𝙏'𝙎 𝙄𝙉𝙎𝙄𝘿𝙀✴️

🔰𝘾𝙤𝙙𝙚 𝘼𝙙𝙢𝙞𝙣𝙨🔰: [〲EaRFuN卝 চৌধুরি ツ࿐]

➳𝙑𝙚𝙧𝙨𝙞𝙤𝙣 ✨: 1.0.0
✬𝐌𝐨𝐝𝐢𝐟𝐢𝐞𝐝 𝐁𝐲 : 〲EaRFuN卝 চৌধুরি ツ࿐ 🔰

➳𝘽𝙤𝙩 𝙞𝙨 𝙍𝙪𝙣𝙣𝙞𝙣𝙜⌚ ${hours} : ${minutes} : ${seconds}

🔻𝐁𝐎𝐓 𝐔𝐍𝐃𝐄𝐑 𝐏𝐑𝐎𝐓𝐄𝐂𝐓𝐄𝐃 𝐁𝐘 𝐀𝐃𝐌𝐈𝐍𝐒🔺 

✫𝙏𝙝𝙖𝙣𝙠𝙨 𝙁𝙤𝙧 𝙐𝙨𝙞𝙣𝙜 ${global.config.BOTNAME} Bot!`,

        attachment: fs.createReadStream(photo)
    }

    api.sendMessage(msg, event.threadID)
}
