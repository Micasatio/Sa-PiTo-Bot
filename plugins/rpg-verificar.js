import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `✳️ 𝙔a te la metí digo digo ya estas registrado\n\nQuiere volver a registrarse?\n\n 📌  Use el comando para eliminar el registro \n*${usedPrefix}unreg* <Número de serie>`
  if (!Reg.test(text)) throw `⚠️ Formato incorrecto\n\n ✳️ Uso el comando: *${usedPrefix + command} nombre.edad*\n📌𝙀𝙟𝙚𝙢𝙥𝙡𝙤 : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳️ El nombre no puede estar vaci𝒐'
  if (!age) throw '✳️ La edad no puede estar vacia𝒂'
  if (name.length >= 30) throw '✳️ Uff, el nombre es largo' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 Ya estás un poco viejo'
  if (age < 5) throw '🚼  Vrg no sabía que los bebés pueden escribir ✍️😳 '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
global.db.data.users[m.sender].money += 800
global.db.data.users[m.sender].limit += 6
global.db.data.users[m.sender].exp += 305
global.db.data.users[m.sender].joincount += 4
  let sn = createHash('md5').update(m.sender).digest('hex')
let caption = `╭━━━[ *Registro Comoleto* ]━━━━⬣
┃ *Name* 
┃ ${name}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *Edad* 
┃ *${age} años*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *Bono* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *6 Diamantes* 💎
┃ *800 Sapito Monedas*
┃ *305 XP*
┃ *4 Tokens*
╰━━━━━━━━━━━━━━━━━━⬣`
//let author = global.author
await conn.sendButton(m.chat, caption, `Tu número de serie te servirá en caso que quieras borrar su registro👇👇👇\n𝑬𝒋𝒆𝒎𝒑𝒍𝒐\n${usedPrefix}unreg numero de serie\n${wm}`, [['𝘼𝙝𝙤𝙧𝙖 𝙚𝙨𝙩𝙤𝙮 𝙑𝙚𝙧𝙞𝙛𝙞𝙘𝙖𝙙𝙤(𝙖)!! ✅', '/profile']], m)
await m.reply(`${sn}`) 
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(verify|verificar|registrar|reg(ister)?)$/i

export default handler
