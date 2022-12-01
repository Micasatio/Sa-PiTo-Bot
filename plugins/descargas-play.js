import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*🤔𝙦ue mierda buscas?🤔 Ingrese el nombre/𝙩itulo de canción*\n\n*—◉ 𝙀𝙟𝙚𝙢𝙥𝙡𝙤:*\n*${usedPrefix + command} lgante bar*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*[❗𝙄𝙣𝙛𝙤❗] 𝙇o siento, no pide encontrar el audio/𝙫𝙞𝙙𝙚𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙚 𝙘𝙤𝙣 𝙤𝙩𝙧𝙤𝙨 𝙣𝙤𝙢𝙗𝙧𝙚𝙨/𝙩𝙞𝙩𝙪𝙡𝙤𝙨*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
conn.sendHydrated(m.chat, `
📌 *𝗧𝗶𝘁𝘂𝗹𝗼:* ${title}
📇 *𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝗰𝗶𝗼𝗻:* ${description}
📆 *𝗣𝘂𝗯𝗹𝗶𝗰𝗮𝗰𝗶𝗼𝗻:* ${publishedTime}
⌚ *𝗗𝘂𝗿𝗮𝗰𝗶𝗼𝗻:* ${durationH}
👀 *𝗩𝗶𝘀𝘁𝗮𝘀:* ${viewH}
`.trim(), author, thumbnail, '', '', null, null, [
    ['𝐀𝐔𝐃𝐈𝐎', `${usedPrefix}yta ${url}`],
    ['𝐕𝐈𝐃𝐄𝐎', `${usedPrefix}ytv ${url}`],
], m)
}catch(e){
m.reply('*[❗𝙄𝙣𝙛𝙤❗] 𝑬𝒓𝒓𝒐𝒓, 𝒑𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝒗𝒖𝒆𝒍𝒗𝒂 𝒂 𝒊𝒏𝒕𝒆𝒏𝒕𝒂𝒓𝒍𝒐*')
console.log(e)
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
export default handler
