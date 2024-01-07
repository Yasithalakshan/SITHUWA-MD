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
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0JWeSttNTV3eU1zblpidGNOUmZSeTNrUHNudXJnVDNlc2g2bC9rd3owWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHZRSXM4SkhheGtKYWQvRkMzZGUwZ1YrMEUyVmpSczlETU5hQnFzemlTaz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzREp3czFURVYwUWhhb1ljZWNaQ2g3djVERmZJY3BoZ0xDQXcwNWxFYTJ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXaC9lN1NWWU1LN3BZSSt3UkhIeVdOcDRkbENoamE5WFRUV29ZTmx4U1V3PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFFVmRJMW9ZT3QrYXJJS0Y5VzkzekpybUpLYkdNNU9sMnNkazgxMFA1Mzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1mYW03YUI0a2YwVVNaTlQxSEVKV28xdGF6SEpkZFBQUDdpc1d2WGZ1a2s9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKazdLRUVoVTAyYllEaHpPWmZOdURQSFI1c01IOTE1Ty9nR3dIS1FKMEZLSSt3OWhiVTVQTS84K2RlMkZnVm9lM0dBY21LNWgzeVphQm1ZUDNHdEVndz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIzNywiYWR2U2VjcmV0S2V5Ijoic00vVXFjNitSbUdwUWk2MmJoM0tVL25jdkFKU3RHd2FKOGM5WEcyL3pqcz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDc1MDM0NzEwMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCMzc0OTdEMDFGMTEyN0Y3M0E4QzlBQTBDRTE2NUI1QiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzA0NjUwMzA5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDc1MDM0NzEwMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzOUM0OThGNDczMDNDQUU5NEZCODM3ODNGNEYyMEFCMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzA0NjUwMzEyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4Wm44TDNuSlE0cWJsUV9oR0RkX21RIiwicGhvbmVJZCI6IjIwNjhjMzhiLTE2MmEtNDE3NC1hY2ZjLTk5MjIwYjU3NmVkZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhNTFydi9FeEtZbUxpa29JRVdQNGxKVkxma1U9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQ4ZjV0KytySVdxeWxIN3FZdTF3Y3U0eDNpcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ozSDNvc0dFTDdNNjZ3R0dBRT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiN003UTRKRi9oL3VxbkhYZzhyTCtkMFhSSzNpV3lManNRVXowOTJyazNCVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoicmRoOHhKWTJzODN6M3RrZzlPMmtGS1NHQXZHeW53L0VKcndrSjNHYVpEQ0E4YkI4OGpCai9VU3daMS9IbTRzb0JzM0JFOS9kMW1LNEdZRWNQbmdsQnc9PSIsImRldmljZVNpZ25hdHVyZSI6Ikt1bGFEdEVsSUxrOVFYaWdsKzdNVkFpNE1MbkJvRlZHTXpuOVNnQlpqeW40eHJqUVUzcktKVVFnM0pibjJ2ajhlb20wcGlOaUVGS3ZTOTU5ejNmcGdBPT0ifSwibWUiOnsiaWQiOiI5NDc1MDM0NzEwMDozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCfmJjinaTvuI/wn42CUjo9TTo94Lag4LeW4Lan4LeSIOC2tOC3lOC2reC3lCDwn5iJ4p2k77iP8J+lgC4uLiJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1MDM0NzEwMDozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmV6TzBPQ1JmNGY3cXB4MTRQS3kvbmRGMFN0NGxzaTQ3RUZNOVBkcTVOd1YifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDQ2NTAzMDYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT3RmIn0="    
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
 
