async function handler(m, { command }) {
command = command.toLowerCase()
this.anonymous = this.anonymous ? this.anonymous : {}
switch (command) {
case 'next':
case 'leave': {
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) return this.sendButton(m.chat, `No estΓ‘ el chat anonimo\nSi quiere iniciar un chat anonimo usa el comando #start o puede usar el siguiente biton,`, wm, null, [['Inicia Chat Anonimo', `.start`]], m)
m.reply(`βοΈ Usted se fue del chat anonimo`)
let other = room.other(m.sender) 
if (other) await this.sendButton(other, `El otro usuario saliΓ³ del chat anonimo\nπΊi quiere ir a otro chat anonimo use el comando *#start* o puede usar el siguiente botΓ³n `, wm, null, [['π°nicia chat anonimo ', `.start`]], m)
delete this.anonymous[room.id]
if (command === 'leave') break
}
case 'start': {
if (Object.values(this.anonymous).find(room => room.check(m.sender))) return this.sendButton(m.chat, `π»odaππΜa estΓ‘ el chat anonimo o espera que alguien se una para chateaar\nπΊi quiere salir del chat anonimo use comando *#leave*  O  puede usar el siguiente botΓ³n`, wm, null, [['πΊππππ πππ ππππ πππΜππππ', `.leave`]], m)
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
await this.sendButton(room.a, `π¨πguien se uniΓ³ al chat anonimo!!\n\nβ ya puede chatear\nβ`,wm, null, [['πΆtros usuarios', `.next`]], m)
room.b = m.sender
room.state = 'CHATTING'
await this.sendButton(m.chat, `Alguien se uniΓ³ al chat anonimo!!\n\nβ ππ πππππ chatear`, wm, null, [['πΆtros usuarioπ', `.next`]], m)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
await this.sendButton(m.chat, `π¬πππππ π πππ πππππππ ππ ππππ ππ ππππ π¨ππΜππππ πππππ πππππππππ\nπΊπ ππππππ πππππ ππππ ππ πππππππ *#leave*  πΆ πππππ ππππ ππ πππππππππ ππππΜπ`, wm, null, [['πΊππππ πππ ππππ πππΜππππ', `.leave`]], m)
}
break
}}}
handler.help = ['start', 'leave', 'next']
handler.tags = ['anonymous']
handler.command = ['start', 'leave', 'next']
handler.private = true
export default handler
