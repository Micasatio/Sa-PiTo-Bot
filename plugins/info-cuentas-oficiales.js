let media = './media/menus/Menuvid2.mp4'
let handler = async (m, { conn, command }) => {
let str = `
🔰 𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤 𝙖𝙡 𝙡𝙖𝙨 𝙘𝙪𝙚𝙣𝙩𝙖𝙨 𝙤𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 𝙉𝙪́𝙢𝙚𝙧𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙤𝙛𝙘
🔰 *wa.me/*
🔰 *wa.me/*
🔰 *wa.me/*
🔰 *wa.me/*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙂𝙞𝙩𝙝𝙪𝙗
*${md}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙂𝙧𝙪𝙥𝙤𝙨 𝙤𝙛𝙞𝙘𝙞𝙖𝙡 𝙙𝙚𝙡 𝙗𝙤𝙩
1) *${nn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
2) *${nnn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
3) *${nnnt}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
4) *${nnntt}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙖𝙦𝙪𝙞́ 𝙨𝙚 𝙙𝙖𝙧 𝙖𝙘𝙩𝙪𝙖𝙡𝙞𝙯𝙖𝙘𝙞𝙤́𝙣 𝙮 𝙣𝙤𝙫𝙚𝙙𝙖𝙙𝙚𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩
 *${nna}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙂𝙧𝙪𝙥𝙤 𝙖𝙨𝙞𝙨𝙩𝙚𝙣𝙘𝙞𝙖 𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠
*Pronto*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙂𝙧𝙪𝙥𝙤 𝙩𝙚𝙡𝙚𝙜𝙧𝙖𝙢
*PRONTO*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *tiktok*
 *PRONTO*
 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝘾𝙖𝙣𝙖𝙡 𝙙𝙚𝙡 𝙔𝙤𝙪𝙏𝙪𝙗𝙚 𝙤𝙛𝙞𝙘𝙞𝙖𝙡 𝙙𝙚𝙡 𝙗𝙤𝙩
PRONTO
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙎𝙞 𝙩𝙞𝙚𝙣𝙚𝙣 𝙙𝙪𝙙𝙖𝙨, 𝙨𝙪𝙜𝙚𝙧𝙚𝙣𝙘𝙞𝙖𝙨, 𝙤 𝙥𝙧𝙚𝙜𝙪𝙣𝙩𝙖𝙨 𝗲𝘀𝗰𝗿𝗶𝗯𝗶 𝗽𝗼𝗿 𝗲𝗹 𝗴𝗿𝘂𝗽𝗼
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/Micasatio', 'Sapito_Bot', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨  ✅', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧 🔰', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}

handler.command = /^cuentasoficiales|gataig|cuentasgb|cuentagb|accounts|gataaccounts|account|iggata|cuentasdegata|cuentasdegatabot|cuentagatabot|cuentasgatabot$/i
handler.exp = 35
export default handler
