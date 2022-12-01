let handler = async (m, { conn, text, usedPrefix, command }) => {
global.db.data.sticker = global.db.data.sticker || {}
if (!m.quoted) throw '*[❗𝙄𝙣𝙛𝙤❗] Responde al sticker o imagen al cual quiere agregar un comando o texto*'
if (!m.quoted.fileSha256) throw '*[❗𝙄𝙣𝙛𝙤❗] Solo puedes asignar comando o textos a stickers e imagen*'
if (!text) throw `*[❗𝙄𝙣𝙛𝙤❗] Error, Los usaste ma𝒍,\n usa de esta manera:*\n*—◉ ${usedPrefix + command} <texto> <responder a sticker o imagen>*\n\n*𝙀𝙟𝙚𝙢𝙥𝙡𝙤:*\n*—◉ ${usedPrefix + command} <#menu> <responder a sticker o imagen>*`
let sticker = global.db.data.sticker
let hash = m.quoted.fileSha256.toString('base64')
if (sticker[hash] && sticker[hash].locked) throw '*[❗𝙄𝙣𝙛𝙤❗] 𝑺𝒐𝒍𝒐 𝒆𝒍 𝒐𝒘𝒏𝒆𝒓 𝒑𝒖𝒆𝒅𝒆 𝒓𝒆𝒂𝒍𝒊𝒛𝒂𝒓 𝒆𝒔𝒕𝒂 𝒎𝒐𝒅𝒊𝒇𝒊𝒄𝒂𝒄𝒊𝒐́𝒏*'
sticker[hash] = { text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false }
m.reply(`*[ ✔ ] 𝑬l tesxto/comando asignado al sticker e imagen fue agregado a la base de datos correctamente*`)
}
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset']
handler.rowner = true
export default handler
