import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `β³οΈ πa te la metΓ­ digo digo ya estas registrado\n\nQuiere volver a registrarse?\n\n π  Use el comando para eliminar el registro \n*${usedPrefix}unreg* <NΓΊmero de serie>`
  if (!Reg.test(text)) throw `β οΈ Formato incorrecto\n\n β³οΈ Uso el comando: *${usedPrefix + command} nombre.edad*\nπππππ’π₯π‘π€ : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'β³οΈ El nombre no puede estar vaciπ'
  if (!age) throw 'β³οΈ La edad no puede estar vaciaπ'
  if (name.length >= 30) throw 'β³οΈ Uff, el nombre es largo' 
  age = parseInt(age)
  if (age > 100) throw 'π΄π» Ya estΓ‘s un poco viejo'
  if (age < 5) throw 'πΌ  Vrg no sabΓ­a que los bebΓ©s pueden escribir βοΈπ³ '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
global.db.data.users[m.sender].money += 800
global.db.data.users[m.sender].limit += 6
global.db.data.users[m.sender].exp += 305
global.db.data.users[m.sender].joincount += 4
  let sn = createHash('md5').update(m.sender).digest('hex')
let caption = `β­βββ[ *Registro Comoleto* ]βββββ¬£
β *Name* 
β ${name}
ββββββββββββββββββ
β *Edad* 
β *${age} aΓ±os*
ββββββββββββββββββ
β *Bono* 
ββββββββββββββββββ
β *6 Diamantes* π
β *800 Sapito Monedas*
β *305 XP*
β *4 Tokens*
β°βββββββββββββββββββ¬£`
//let author = global.author
await conn.sendButton(m.chat, caption, `Tu nΓΊmero de serie te servirΓ‘ en caso que quieras borrar su registroπππ\nπ¬ππππππ\n${usedPrefix}unreg numero de serie\n${wm}`, [['πΌππ€π§π ππ¨π©π€π? πππ§πππππππ€(π)!! β', '/profile']], m)
await m.reply(`${sn}`) 
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(verify|verificar|registrar|reg(ister)?)$/i

export default handler
