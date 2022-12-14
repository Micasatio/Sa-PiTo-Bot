import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, text }) => {
if (!text) throw `${mg}ππ¨cribe el nombre de un anime`
let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date, mal_id } = json.results[0]
let res2 = await fetch(`https://myanimelist.net/anime/${mal_id}`)
if (!res2.ok) throw await res2.text()
let html = await res2.text()
let animeingfo = 
`πitulo
β£ ${title}
βββββββββββββββββ
πpisodios
β£ ${episodes}
βββββββββββββββββ
πasmitido π₯π€π§:
β£ ${type}
βββββββββββββββββ
πΎlasificacion
β£ ${rated}
βββββββββββββββββ
πuntaje
β£ ${score}
βββββββββββββββββ
πiembros
β£ ${members}
βββββββββββββββββ
πinopsis
β£ ${synopsis}
βββββββββββββββββ
Enlace
β£ ${url}`
await conn.sendFile(m.chat, image_url, '', animeingfo, m) 
let info = `π *InfΓ³rmate sobre las novedades y recuerda tener la ΓΊltima versiΓ³n.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, '', null, null, [
['πππ£πͺ π½πͺπ¨π¦πͺππππ¨ π', '#buscarmenu'],
['πππ£πͺ πΎπ€π’π₯π‘ππ©π€ β¨', '.allmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£ βοΈ', '/menu']
], m,)  
  
}
handler.help = ['animeinfo <anime>']
handler.tags = ['internet']
handler.command = /^(animeinfo)$/i
handler.exp = 50
handler.level = 4 
export default handler
