import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
if (!text) throw `𝙌ue mierda busco? Escriba el nombre del vídeo o canal de Youtube`
const { video, channel } = await youtubeSearch(text)
let teks = [...video, ...channel].map(v => {
switch (v.type) {
case 'video': return `
✨ *${v.title}* 
🎈 (${v.url})
⏳ *Duración:* ${v.durationH}
🗓 *Fecha:* de subida: ${v.durationH}
👀 *Vistas:* ${v.view} 
      `.trim()
      case 'channel': return `
✨ *${v.channelName}* 
(${v.url})
👥 *Subscriptores:* ${v.subscriberH} 
🎥 *Videos:* ${v.videoCount}  
`.trim()
    }
  }).filter(v => v).join('\n====================================\n')
 await m.reply(teks)
/* let info = `💖 𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒆 𝒔𝒐𝒃𝒓𝒆 𝒍𝒂𝒔 𝑵𝒐𝒗𝒆𝒅𝒂𝒅𝒆𝒔 𝒚 𝒓𝒆𝒄𝒖𝒆𝒓𝒅𝒂 𝒕𝒆𝒏𝒆𝒓 𝒍𝒂 𝒖𝒍𝒕𝒊𝒎𝒂 𝒗𝒆𝒓𝒔𝒊𝒐𝒏..
  `.trim()
await conn.sendHydrated(m.chat, info, wm, null, null, null, [
['𝙈𝙚𝙣𝙪 𝘽𝙪𝙨𝙦𝙪𝙚𝙙𝙖𝙨 🔎', '#buscarmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)      
*/
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^ytbuscar|yts(earch)?$/i
handler.exp = 70
handler.limit = 1
handler.level = 4
export default handler
