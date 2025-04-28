const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : 
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
// add your Session prince_md-eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0dnaTV2a0h5RVlPSWhUbS94cHhPS01DUlIyT1hod2w0cGdrVXZNMjFYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2V6RWZYVFlJRk81SVNJaUlQMWJuK0gzZ0pqc09MTkw1TzRVK2RHd2FHMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSzVzdXRoZXdxNEt0ZysyWDBKSUFKc1M4RTBsOVRTalc3emdSL1Ayb1VNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIra0d0VXp0YXpHTlFCN1h3N3RJdkcyQnUweThwUktpM2EvRmphSVVBcEVJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhJanR0ZkE5OGxXL0RPbjY0bWVxUGVTVGtsNy9MNXA5NE55emU4RSsvR0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFuZkh0b3JlUmU1QnlCSjFEZlZyZnBqLzlSbjBYbE5hSnliaGdJc3VpREE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0hCQTlmOVRnbnVIZHN1NGNab3NQU2hkb0g5NVI1U2V2TTVpM1o4VGowND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQk5HMjlDU0VYVnNWUUNBRjhiODdWa2syMDdkaklKeEEyVDFtVnVNQXJudz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZtbUJ5OWczNms5Z3FiVjZkSTJjZkVkaGxsVDJ4Qi9mVlZLV2ZlK05tSG1SQzVzait4U3grTDVoTlU0TmUwcVp6c015YlFva1J3a0plakprbGIvOWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg3LCJhZHZTZWNyZXRLZXkiOiJMMVN2Qm5jMVRJYlRJRlpJV1pkOGxaUXpzbkgwQjYyU2lGcXVpNkRhVW1vPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJkYllualkyOVE5Nk5JOUFJdWZUVnh3IiwicGhvbmVJZCI6ImZjZWNmZTg4LTAxYzUtNGYzMy05MTc1LWQxZDZmMTZiOGZkZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5VkpXYUI3RHdaNTVyMm0yQUdSaGJmZGp4VTA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHUvVTh6Q0wzcHRraUdXK1puOWtiMkFTQ3ZrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZYMkhNTjlWIiwibWUiOnsiaWQiOiIyMzQ5MTUxMjE2ODkzOjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSXZhc2UgRW1tYW51ZWwg8J+GkiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFNYcmJRSkVJSFhyOEFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNnpRbFNtejE4dUpkS3RGK2h1OFFsU0p0YkdtcCsxY2xKd2pqWlhBV1JRMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYWxlL0s0a3gwTzZXcCtXZkFTMm9zM1NTdTM3U2Ewb1hMMVFsWlpUMTkzZFNvMXk2TmN0bnFrOTlxb3J2ZUkwOTBzanFzWm9PRndmU3dqQ3ZCbVgxaHc9PSIsImRldmljZVNpZ25hdHVyZSI6Ilc1SlRsaWdDblRubXFNKzlFVHFvM3JSSHJickFGQzFhdGlwVmFmeFBqYU9INTVNV3hmcVdhSCs0bWM0cEl6Yk9FLzBNYjNWYVR2RUFSOU1UWjFmcmhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTE1MTIxNjg5Mzo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVzMEpVcHM5ZkxpWFNyUmZvYnZFSlVpYld4cHFmdFhKU2NJNDJWd0ZrVU4ifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NTYxMTY2MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPNnEifQ
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY PRINCE-MDX *",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "PRINCE MDX",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
OWNER_NUMBER: process.env.OWNER_NUMBER || "2349151216893",
// add your bot owner number 2349151216893
OWNER_NAME: process.env.OWNER_NAME || "ᴘʀɪɴᴄᴇ ᴛᴇᴄʜ",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴛᴇᴄʜ  ",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/kzfne8.jpeg",
// add img for alive msg
MENU_IMG: process.env.MENU_IMG || "https://raw.githubusercontent.com/Mayelprince/url/main/url/1264.jpg",
// menu image 
MENU3_IMG: process.env.MENU_IMG || "https://files.catbox.moe/upmwpw.jpg",
// menu image 
RUNTIME_IMG: process.env.RUNTIME_IMG || "https://files.catbox.moe/ykdtkm.jpeg",
// runtime image 
WELCOME_ENABLED: process.env.WELCOME_ENABLED || "true",
    // welcome group members 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "237677224245",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
