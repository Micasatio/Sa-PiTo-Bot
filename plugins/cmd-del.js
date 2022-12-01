let handler = async (m, { conn, usedPrefix, text, command }) => {
let hash = text
if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
if (!hash) throw `*[❗𝙄𝙣𝙛𝙤❗] solo se puede asignar textos o comando asignado a sticker e imagen, para obtener el código asignado use el comando ${usedPrefix}listcmd*`
let sticker = global.db.data.sticker
if (sticker[hash] && sticker[hash].locked) throw '*[❗𝙄𝙣𝙛𝙤❗] Solo el owner puede realizar esta modificación *'
delete sticker[hash]
m.reply(`*[ ✔ ] 𝑬l texto /Comando asignado al sticker/imagen fue eliminado de la base de datos correctamente*`)}
handler.command = ['delcmd']
handler.rowner = true
export default handler
