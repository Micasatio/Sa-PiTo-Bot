import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*๐ค๐ฆue mierda buscas?๐ค Ingrese el nombre/๐ฉitulo de canciรณn*\n\n*โโ ๐๐๐๐ข๐ฅ๐ก๐ค:*\n*${usedPrefix + command} lgante bar*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*[โ๐๐ฃ๐๐คโ] ๐o siento, no pide encontrar el audio/๐ซ๐๐๐๐ค, ๐๐ฃ๐ฉ๐๐ฃ๐ฉ๐ ๐๐ค๐ฃ ๐ค๐ฉ๐ง๐ค๐จ ๐ฃ๐ค๐ข๐๐ง๐๐จ/๐ฉ๐๐ฉ๐ช๐ก๐ค๐จ*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
conn.sendHydrated(m.chat, `
๐ *๐ง๐ถ๐๐๐น๐ผ:* ${title}
๐ *๐๐ฒ๐๐ฐ๐ฟ๐ถ๐ฝ๐ฐ๐ถ๐ผ๐ป:* ${description}
๐ *๐ฃ๐๐ฏ๐น๐ถ๐ฐ๐ฎ๐ฐ๐ถ๐ผ๐ป:* ${publishedTime}
โ *๐๐๐ฟ๐ฎ๐ฐ๐ถ๐ผ๐ป:* ${durationH}
๐ *๐ฉ๐ถ๐๐๐ฎ๐:* ${viewH}
`.trim(), author, thumbnail, '', '', null, null, [
    ['๐๐๐๐๐', `${usedPrefix}yta ${url}`],
    ['๐๐๐๐๐', `${usedPrefix}ytv ${url}`],
], m)
}catch(e){
m.reply('*[โ๐๐ฃ๐๐คโ] ๐ฌ๐๐๐๐, ๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐ ๐ ๐๐๐๐๐๐๐๐๐๐*')
console.log(e)
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
export default handler
