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
(っ◔◡◔)っ 𝐅𝐢𝐱 𝐛𝐚𝐧 𝐚𝐜𝐜𝐨𝐮𝐧𝐭
➽────────────❥
 ✧ .𝐦𝐞𝐭𝐨𝐝𝐨𝐫𝐞𝐬𝐞𝐭𝐩𝐯𝐭
 ✧ .𝐛𝐮𝐭𝐭𝐨𝐭𝐩 (𝐫𝐞𝐬𝐞𝐭 𝐛𝐨𝐭𝐭𝐨𝐧𝐞) 𝐜𝐚𝐥𝐥 𝐞𝐝 𝐬𝐦𝐬
 ✧ .𝐞𝐫𝐫𝐨𝐫𝐞-𝟏
 ✧ .𝐧𝐮𝐦𝐞𝐫𝐨𝐥𝐨 (𝐥𝐨𝐠 𝐨𝐮𝐭)
 ✧ .𝐨𝐭𝐩𝐟𝐢𝐱𝟏
 ✧ .𝐨𝐭𝐩𝐟𝐢𝐱𝟐
 ✧ .𝐨𝐭𝐩𝐟𝐢𝐱𝟑
 ✧ .𝐨𝐭𝐩𝐟𝐢𝐱𝟒
 ✧ .𝐨𝐭𝐩𝐟𝐢𝐱𝟓
➽─────────⟿ᵉᵈᶦᶻ ᴹᵒᵒⁿᶜˡᵒᵘᵈˢ
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
handler.command = /^(menuotp)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}