import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, text }) => {
if (!text) throw `${mg}๐scriba el nombre de un magna`
let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/manga', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { title, chapters, volumes, members, score, synopsis, url, image_url, type, start_date, end_date, mal_id } = json.results[0]
let res2 = await fetch(`https://myanimelist.net/manga/${mal_id}`)
if (!res2.ok) throw await res2.text()
let html = await res2.text()
let animeingfo = 
`titulo
โฃ ${title}
โโโโโโโโโโโโโโโโโ
Capitulos
โฃ ${chapters}
โโโโโโโโโโโโโโโโโ
Volumenes
โฃ ${volumes}
โโโโโโโโโโโโโโโโโ
๐๐cha de inicio 
โฃ ${start_date}
โโโโโโโโโโโโโโโโโ
๐๐cha final 
โฃ ${end_date}
โโโโโโโโโโโโโโโโโ
Puntaje 
โฃ ${score}
โโโโโโโโโโโโโโโโโ
Miembro
โฃ ${members}
โโโโโโโโโโโโโโโโโ
๐ipnosis english 
โฃ ${synopsis}
โโโโโโโโโโโโโโโโโ
๐lace 
โฃ ${url}`
await conn.sendFile(m.chat, image_url, '', animeingfo, m) 
let info = `๐ *๐๐ฃ๐๐ค๐ง๐ข๐๐ง๐ฉ๐ ๐จ๐ค๐๐ง๐ ๐ก๐๐จ ๐ฃ๐ค๐ซ๐๐๐๐๐๐จ ๐ฎ ๐ง๐๐๐ช๐๐ง๐๐ ๐ฉ๐๐ฃ๐๐ง ๐ก๐ ๐ชฬ๐ก๐ฉ๐๐ข๐ ๐ซ๐๐ง๐จ๐๐คฬ๐ฃ.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, '๐๐ฃ๐จ๐ฉ๐๐๐ง๐๐ข', null, null, [
['๐๐๐ฃ๐ช ๐ฝ๐ช๐จ๐ฆ๐ช๐๐๐๐จ ๐', '#buscarmenu'],
['๐๐๐ฃ๐ช ๐พ๐ค๐ข๐ฅ๐ก๐๐ฉ๐ค โจ', '.allmenu'],
['๐๐ค๐ก๐ซ๐๐ง ๐๐ก ๐๐๐ฃ๐ชฬ โ๏ธ', '/menu']
], m,)  
  
}
handler.help = ['animeinfo <anime>']
handler.tags = ['internet']
handler.command = /^(mangainfo)$/i
handler.exp = 50
handler.level = 4 
export default handler
