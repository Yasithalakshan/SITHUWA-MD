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
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVBWT3kwSkJiQThxV3VaS2doNmprWG1rZEZTY0ZUWllDNFg4cGZDNHBVND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUdaclRvYmM2blg4MXJYc3pDeERSMmhZTjhoamVsYTJrdzUwSzN4bDRtOD0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQmp1T0xEQTlvTWRYT25CTmJ6NDRmWkt0S2o4UGIrbS9SbmtwVXByc0drPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvZ1ZGZnVSSXhKRkVHYXptb0cyLzlaUWdaSk5lK21ZQVpydkwyL09EUEZvPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVLSS9aUDJhbHBDZVpJaTRwWVgxZ0ZoYkdxOTFLQnVQSGJpZlYxdHN1SDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImE0diszUFZmSjRsampINlp1eEE5YmlkM05ZZSttL3dkYUZjVzF5Q1F4aWs9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKMW8yZjJnbGpuM004QUcrV25IQyt5ZlMvMUdtTHZZSDAyemQ4Y3R5VE5xU204ZjRkc1VjMEswd0tyZGFMVGNVUlpZbGt6eStpNEwyRE1HTGNOalFqdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIxNywiYWR2U2VjcmV0S2V5IjoiQ0o0NkF3bnZoUXdqdFkyTC9GeDdUak9Yb04xQk16UU1PM0xIUDBxZkVqND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMU1xVTNUb3hRZ1dpd0FmNzV2ZVJJZyIsInBob25lSWQiOiJkNDAyNDhmOS0zMDI5LTQ4N2ItODhhYS0wNmQxYjU2ODM1NjQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnJEUEJZaFN2YllORm5HNEc5bFFmUHhaMC9RPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4bk9BdWFPalg1NUY2ZU1laHBiQWZKR1lMYlk9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNPdjNyOGtFRUlyUzRLd0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJHNHpWQnB0OEpXdTIzbXJzOVcyTkhhM1hSVEFXbDdLQWR5MnJYQXN0Z0JBPSIsImFjY291bnRTaWduYXR1cmUiOiJDTE5ETms1YlZJcXJZUk9tWUd1ZERKaEdJemRTK2dmbitBdzlVUDlsQnRJM2Q5Y2loTzc2Wm0vSmdGK3lmRVlnQmt3bkVQYXVqNmMyNXlBZGJQL2xEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoic0drZXdML1loWitjbFV2ZjZhcmRxMTZoQjNrYnp6enViMFFUTWNadVRIcXF0VlNvYkdPRzhrdTR1elRRcE5YZlMrRDJjMVpiTU4zUjkwNVg2Z1F3Z1E9PSJ9LCJtZSI6eyJpZCI6Ijk0NzE5MTI3MjgyOjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiWWFzaXRoYSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxOTEyNzI4Mjo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJ1TTFRYWJmQ1ZydHQ1cTdQVnRqUjJ0MTBVd0ZwZXlnSGN0cTF3TExZQVEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDQ0NzA3OTgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR3lCIn0="    
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
 
