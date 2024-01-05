const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94761516805'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94761516805"
global.devs = '94761516805';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEpmZS9JYk83b0p6T0QrR0YxMGJwSHBPeEhsVmxxK055aUJyVFB2OUpYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSjZpemRMTWJXSHdJS2RNdnZXYUlCeU16Y0hqYzcvS012eGoyRzJxQlJIUT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDT3JaWkNCWFN6SUphZ296UndLcDAwd0ErWitldjRRZ0Qvc2hYNkxiM0ZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TVoxMzJKUWx2M0w5QnkwemZQZTFMcS9YcXZoNjEvRmxEZm85bHE4OHpFPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1Ob3B1d0pwejdydXV5MGRJeUhsUmg4K01LTlgzY3dTK1Nqd0FydC9jbWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdTemYrUmpkMllaMkRubTNtRnU3R2t0d0JwdkdDOXQydUNINE1WcGd3U2M9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRzVtcEtaK0VFNkxBSGtHcW55TzV5cWtrekRGVTFodGJKcmNmZVE2ZnZpM2szSlB0VE5GM3BjVUdyZ2lqY3VwSjZrS1NTdzRxeDNVbzFDajBpdkVoQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjY3LCJhZHZTZWNyZXRLZXkiOiI5K3BkeHMwZWhtL2hLRW9wYWkycTY2WUFsNnVXYndpUFlPYXl5VlRibzNrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCdTUzU3A3aVRjS082SGZFOTNfMGRRIiwicGhvbmVJZCI6ImIwNWY0MzgwLThjZjItNGRkZC1hNWNlLWJiZGJkOTRmMmUzOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxS2RqQndiNkFBUGtOUjc0RU9QYW8wZjBuaDg9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjY5d3MraDNMNWtENkFrMUlhWDVKVXd1bHF3VT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lmcytoNFE2NURmckFZWUFRPT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiR1B2NEo2cEtuZHRkNFBUelBEbjVZdUsyY1o5bmlhS1FLRTJvWHFldCtuND0iLCJhY2NvdW50U2lnbmF0dXJlIjoibE0reUhNYmowZUtSaEpWcUprMUE3QldjOTNWdk1BRDFVOTZ6bHZRNTd3OVFuaVA4QTJ5bU05NzFHQ0E0M3RJcndFN21iR3F2TFU5UHVWdzlQYnpURHc9PSIsImRldmljZVNpZ25hdHVyZSI6ImZObnZhRmo2cnhzL3N5SWtuMTJyeG1ocjhVSVhTRGJHSlR1cHZLSG5kejNtVjUyTjU0SDhlRFdqeVpodFdHUHl2OHRIVWNFSkpSZUtoemVuY2hrcmpnPT0ifSwibWUiOnsiaWQiOiI5NDc3NDA2Mzc4MDozMEBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3NDA2Mzc4MDozMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSajcrQ2VxU3AzYlhlRDA4enc1K1dMaXRuR2ZaNG1pa0NoTnFGNm5yZnArIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA0NDQ2MDY0fQ=="    
  author:  process.env.PACK_AUTHER ||  'SITHUWA BOT',
  packname:  process.env.PACK_NAME || 'MADE BY SITHUM KALHARA',
  
  botname:   process.env.BOT_NAME === undefined ? "SITHUWA-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'sithumkalhara' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
