//Creditos https://github.com/BrunoSobrino

import fetch from 'node-fetch'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `[ β οΈ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable modohorny para activar`
if (!args[0]) throw `${mg}πππ ππ ππππΌπΎπ πΏπ ππππΏπππ\nπππππππ\n*${usedPrefix + command} https://www.xvideos.com/video70389849/sexo_en_casa*`
try {
await conn.reply(m.chat, `β€ ππππππ πππ ππΌπππ πΌ πππ ππ πππππ ππ πππΏππ`, m)
//let res = await fetch(API('https://zenzapis.xyz', '/downloader/xvideos', { apikey: 'B2CB95861FBF', url: args[0] }))
let res = await fetch(`https://zenzapis.xyz/downloader/xvideos?apikey=${keysxxx}&url=`+args[0])
let json = await res.json()
//if (json.result?.message) throw json.result.message
//let teks = `ππππππ | πππππ β€ ${json.result.title}`
conn.sendMessage(m.chat, { document: { url: json.result.files.high }, mimetype: 'video/mp4', fileName: json.result.title }, { quoted: m })
//conn.sendMessage(m.chat, { video: { url: json.result.files.high }, caption: teks }, { quoted: m })
} catch (e) {
m.reply(`${fg}ππ ππππΎππππ, πππ ππ ππππΌπΎπ πΏπ ππππΏπππ, ππππππΌ πΌ πππππππΌπ`)
console.log(e)
}}
handler.command = /^(xvideosdl|xvideos)$/i
handler.level = 5
handler.limit = 3
handler.register = true
export default handler
