let media = './media/menus/Menuvid3.mp4'
let handler = async (m, { conn, command }) => {
let str = `
✨ 𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤 𝙖 𝙡𝙤𝙨 𝙜𝙧𝙪𝙥𝙤𝙨 𝙤𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 𝙏𝙚 𝙞𝙣𝙫𝙞𝙩𝙤 𝙖 𝙦𝙪𝙚 𝙩𝙚 𝙪𝙣𝙖𝙨 𝙖 𝙡𝙖 𝙘𝙤𝙢𝙪𝙣𝙞𝙙𝙖𝙙 Sapito_Bot✨ 𝙪𝙣 𝙗𝙪𝙚𝙣 𝙢𝙤𝙢𝙚𝙣𝙩𝙤 𝙚 𝙞𝙣𝙩𝙚𝙧𝙖𝙘𝙘𝙞𝙤𝙣𝙖 𝙘𝙤𝙣 𝙣𝙤𝙨𝙤𝙩𝙧𝙤𝙨. 😸
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𓃠 *Versión de ${gt}*
➥ ${vs}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ ➤ 𝙂𝙧𝙪𝙥𝙤𝙨 𝙤𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 𝙙𝙚𝙡 𝘽𝙤𝙩:
1) *${nn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
2) *${nnn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
3) *${nnnt}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
4) *${nnntt}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 *infomarte sobre la nueva actualización del bot*
 *${nna}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝙂𝙧𝙪𝙥𝙤𝙨 𝙙𝙚𝙡 𝙖𝙮𝙪𝙙𝙖𝙧 𝙨𝙤𝙗𝙧𝙚 𝙚𝙡 𝙗𝙤𝙩*
 *${nnnttt}*\n 
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

 𝙨𝙞 𝙦𝙪𝙞𝙚𝙧𝙚 𝙦𝙪𝙚 𝙩𝙪 𝙜𝙧𝙪𝙥𝙤 𝙖𝙥𝙖𝙧𝙚𝙯𝙘𝙖 𝙖𝙘𝙖 𝙝𝙖𝙗𝙡𝙖 𝙘𝙤𝙣 𝙚𝙡 𝙖𝙙𝙢𝙞𝙣 𝙤𝙛𝙘 𝙙𝙚𝙡 𝙗𝙤𝙩
`.trim()
  
conn.sendHydrated(m.chat, str, `` + wm, media, 'https://github.com/elrebelde21/The-LoliBot-MD', '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', null, null, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 ', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}

handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i
handler.exp = 33

export default handler
