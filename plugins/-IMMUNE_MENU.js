import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = neww - old

let info = `
(っ◔◡◔)っ 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐲𝐨𝐮𝐫 𝐢𝐦𝐦𝐮𝐧𝐞
➽────────────❥
 ✧ 𝐃𝐎𝐎𝐌_𝐕𝟏𝟑_𝐔𝐍𝐂𝐋𝐎𝐍𝐄
° https://www.mediafire.com/file/r0lrc9ir5j3e2fs/DOOM_v13_UNCLONE
° https://www.mediafire.com/file/c41f00oyv10pt70/DOOM_v13_CLONE[COM.FM].apk/file 
° https://www.mediafire.com/file/nlf1p9ljq0s1001/DOOM_v13_CLONE2[COM.FM].apk/file
° https://www.mediafire.com/file/00ag7uxxwi4owmk/DOOM_v13_CLONE3[COM.FM].apk/file
° https://www.mediafire.com/file/8pso35gpusxyzoz/DOOM_v13_CLONE4[COM.FM].apk/file   
➽────────────❥
 ✧ 𝐁𝐔𝐒𝐈𝐍𝐄𝐒𝐒_𝐕𝟖_𝐏𝐑𝐈𝐌𝐀𝐑𝐈𝐎
° https://www.mediafire.com/file/smmp51stdwfuxow/%CA%99%E1%B4%9Cs%CD%A8%C9%AA%CD%A7%C9%B4%E1%B7%A8%E1%B4%87%CD%A3s%E1%B7%A1s%CD%A6_V8_PRIMARIO.apk/file
° https://www.mediafire.com/file/a8mrdjd3xk7ie46/%CA%99%E1%B4%9Cs%CD%A8%C9%AA%CD%A7%C9%B4%E1%B7%A8%E1%B4%87%CD%A3s%E1%B7%A1s%CD%A6_V8_SECUNDARIO.apk/file
° https://www.mediafire.com/file/xwqrh81dnej7t7g/%CA%99%E1%B4%9Cs%CD%A8%C9%AA%CD%A7%C9%B4%E1%B7%A8%E1%B4%87%CD%A3s%E1%B7%A1s%CD%A6_V8_TERCIARIO.apk/file
➽────────────❥
✧ 𝐃𝐎𝐓𝐀_𝐕𝟏𝟑 
° https://www.mediafire.com/file/8jsss3qe2c8jtke/DOTA_V13.apk/file
➽────────────❥
✧ 𝐂𝐔𝐁𝐀𝐍𝐎_𝐆𝐑𝐄𝐄𝐍_𝐕𝟏𝟑 
° https://www.mediafire.com/file/u2gbfgil1q9ge9d/CU.GREEN_V13.apk/file
➽────────────❥
✧ 𝐂𝐔𝐁𝐀𝐍𝐎_𝐁𝐋𝐀𝐂𝐊 _𝐕𝟏𝟑 
° https://www.mediafire.com/file/vixzepnyfr6ha6l/CU.BLACK_V13.apk/file
➽────────────❥
✧ 𝐓𝐎𝐗𝐈𝐂𝐎_𝐕𝟏𝟑
° https://www.mediafire.com/file/v6hf742hc8dqcud/TOXICO_V13_SECUNDARIO.apk/file
➽────────────❥
✧ 𝐅𝐀𝐑𝐀𝐎𝐍_𝐕𝟗
° https://www.mediafire.com/file/v6wa66jaxd17ecs/FARAON_V9_2.23.1.76.apk/file
➽────────────❥
✧ 𝐁𝐄𝐋𝐈𝐂𝐎_𝐕𝟔 
° https://www.mediafire.com/file/aatq00ll06x1dpp/BELICO_V6%255BCOM.WHA%255DUNCLONE.apk/file
° https://www.mediafire.com/file/wrcy5v0wcfwbh60/BELICO_V6%255BCOM.YOWHA%255DCLONE.apk/file
➽────────────❥
✧ 𝐂𝐔𝐁𝐀𝐍𝐎_𝐑𝐄𝐃_𝐕𝟏𝟐
° https://www.mediafire.com/file/a3t6tdssmv5h2km/%E2%82%B5%C9%84.%C9%8C%C9%86%C4%90_V12_WA_MODS.apk/file?dkey=0ib4onrq5qw&r=1477
➽───────⟿ᵉᵈᶦᶻ ᴹᵒᵒⁿᶜˡᵒᵘᵈˢ
 `.trim() 
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃',
body: 'ᴛʜᴇ ᴍʏsᴛɪᴄ ﹣ ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`}}})
}
handler.help = ['menu']
handler.tags = ['menu']
handler.command = /^(menuimmune)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}