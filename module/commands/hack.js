const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports.config = {
    name: "hack",
    version: "1.0.0",
    permission: 0,
    credit: "Earfun"
};

module.exports.run = async ({ api, event, args }) => {
    try {
        const mentions = Object.keys(event.mentions);
        if (mentions.length === 0) {
            return api.sendMessage("দয়া করে কাউকে মেনশন করুন!", event.threadID);
        }

        const userId = mentions[0];
        let userName = event.mentions[userId];
        userName = userName.replace('@', '');

        try {
            const response = await axios.get(`${global.anikApi.edit}/hack?id1=${userId}&name=${userName}`, {
                responseType: 'arraybuffer'
            });

            const filePath = path.resolve(__dirname, 'hack.jpg');
            fs.writeFileSync(filePath, response.data);

            api.sendMessage(
                {
                    body: "তুই কিছুখোন ওয়েট কর ইরফান স্যার তর আইডি হ্যেক করছে😈👿!",
                    attachment: fs.createReadStream(filePath)
                },
                event.threadID,
                () => {
                    fs.unlinkSync(filePath);
                }
            );
        } catch (error) {
            console.error("Image fetch error:", error);
            api.sendMessage("ছবি আনতে সমস্যা হয়েছে।", event.threadID);
        }
    } catch (error) {
        console.error("Error fetching mentioned user info:", error);
        api.sendMessage("কিছু ভুল হয়েছে!", event.threadID);
    }
};
