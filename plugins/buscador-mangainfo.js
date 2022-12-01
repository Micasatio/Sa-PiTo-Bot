import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, text }) => {
if (!text) throw `${mg}𝙀scriba el nombre de un magna`
let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/manga', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { title, chapters, volumes, members, score, synopsis, url, image_url, type, start_date, end_date, mal_id } = json.results[0]
let res2 = await fetch(`https://myanimelist.net/manga/${mal_id}`)
if (!res2.ok) throw await res2.text()
let html = await res2.text()
let animeingfo = 
`titulo
❣ ${title}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
Capitulos
❣ ${chapters}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
Volumenes
❣ ${volumes}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙁𝙀cha de inicio 
❣ ${start_date}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙁𝙀cha final 
❣ ${end_date}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
Puntaje 
❣ ${score}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
Miembro
❣ ${members}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙎ipnosis english 
❣ ${synopsis}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙀lace 
❣ ${url}`
await conn.sendFile(m.chat, image_url, '', animeingfo, m) 
let info = `💖 *𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙧𝙩𝙚 𝙨𝙤𝙗𝙧𝙚 𝙡𝙖𝙨 𝙣𝙤𝙫𝙚𝙙𝙖𝙙𝙚𝙨 𝙮 𝙧𝙚𝙘𝙪𝙚𝙧𝙙𝙖 𝙩𝙚𝙣𝙚𝙧 𝙡𝙖 𝙪́𝙡𝙩𝙞𝙢𝙖 𝙫𝙚𝙧𝙨𝙞𝙤́𝙣.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝙈𝙚𝙣𝙪 𝘽𝙪𝙨𝙦𝙪𝙚𝙙𝙖𝙨 🔎', '#buscarmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)  
  
}
handler.help = ['animeinfo <anime>']
handler.tags = ['internet']
handler.command = /^(mangainfo)$/i
handler.exp = 50
handler.level = 4 
export default handler
