let handler = async (m, { conn, usedPrefix, text, command }) => {
let hash = text
if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
if (!hash) throw `*[โ๐๐ฃ๐๐คโ] solo se puede asignar textos o comando asignado a sticker e imagen, para obtener el cรณdigo asignado use el comando ${usedPrefix}listcmd*`
let sticker = global.db.data.sticker
if (sticker[hash] && sticker[hash].locked) throw '*[โ๐๐ฃ๐๐คโ] Solo el owner puede realizar esta modificaciรณn *'
delete sticker[hash]
m.reply(`*[ โ ] ๐ฌl texto /Comando asignado al sticker/imagen fue eliminado de la base de datos correctamente*`)}
handler.command = ['delcmd']
handler.rowner = true
export default handler
