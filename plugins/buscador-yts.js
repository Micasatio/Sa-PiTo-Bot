import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
if (!text) throw `πue mierda busco? Escriba el nombre del vΓ­deo o canal de Youtube`
const { video, channel } = await youtubeSearch(text)
let teks = [...video, ...channel].map(v => {
switch (v.type) {
case 'video': return `
β¨ *${v.title}* 
π (${v.url})
β³ *DuraciΓ³n:* ${v.durationH}
π *Fecha:* de subida: ${v.durationH}
π *Vistas:* ${v.view} 
      `.trim()
      case 'channel': return `
β¨ *${v.channelName}* 
(${v.url})
π₯ *Subscriptores:* ${v.subscriberH} 
π₯ *Videos:* ${v.videoCount}  
`.trim()
    }
  }).filter(v => v).join('\n====================================\n')
 await m.reply(teks)
/* let info = `π π°ππππππππ πππππ πππ π΅ππππππππ π ππππππππ πππππ ππ ππππππ πππππππ..
  `.trim()
await conn.sendHydrated(m.chat, info, wm, null, null, null, [
['πππ£πͺ π½πͺπ¨π¦πͺππππ¨ π', '#buscarmenu'],
['πππ£πͺ πΎπ€π’π₯π‘ππ©π€ β¨', '.allmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', '/menu']
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
