let handler = async (m, { conn, text, usedPrefix, command }) => {
global.db.data.sticker = global.db.data.sticker || {}
if (!m.quoted) throw '*[βππ£ππ€β] Responde al sticker o imagen al cual quiere agregar un comando o texto*'
if (!m.quoted.fileSha256) throw '*[βππ£ππ€β] Solo puedes asignar comando o textos a stickers e imagen*'
if (!text) throw `*[βππ£ππ€β] Error, Los usaste maπ,\n usa de esta manera:*\n*ββ ${usedPrefix + command} <texto> <responder a sticker o imagen>*\n\n*ππππ’π₯π‘π€:*\n*ββ ${usedPrefix + command} <#menu> <responder a sticker o imagen>*`
let sticker = global.db.data.sticker
let hash = m.quoted.fileSha256.toString('base64')
if (sticker[hash] && sticker[hash].locked) throw '*[βππ£ππ€β] πΊπππ ππ πππππ πππππ ππππππππ ππππ πππππππππππΜπ*'
sticker[hash] = { text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false }
m.reply(`*[ β ] π¬l tesxto/comando asignado al sticker e imagen fue agregado a la base de datos correctamente*`)
}
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset']
handler.rowner = true
export default handler
