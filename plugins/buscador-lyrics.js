import fetch from 'node-fetch'
import { lyrics, lyricsv2 } from '@bochilteam/scraper'
import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) throw `𝙌ue carajo buscas❓️\n𝙄ngrese el nombre de una canción para obtener la letra\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤\n*${usedPrefix + command} Runaway*`
const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
title: result.author + result.title}))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.thumbnail.genius) throw json


let letratexto =`
𝙏itulo
💚 *${result.title}*

𝘼utor/a
💜 *${result.author}*


${result.lyrics}


Enlace
🧡 *${result.link}*
`.trim()
conn.sendHydrated(m.chat, letratexto, wm, json.thumbnail.genius, null, null, null, null, [
['𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 🚀', `/play ${text}`],
['𝙈𝙚𝙣𝙪 𝘽𝙪𝙨𝙦𝙪𝙚𝙙𝙖𝙨 🔎', '#buscarmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m)
}
handler.help = ['lirik','letra'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric|letra)$/i
handler.limit = 1
handler.level = 3
handler.exp = 55
export default handler 
