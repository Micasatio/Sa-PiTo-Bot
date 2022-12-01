async function handler(m, { command }) {
command = command.toLowerCase()
this.anonymous = this.anonymous ? this.anonymous : {}
switch (command) {
case 'next':
case 'leave': {
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) return this.sendButton(m.chat, `No está el chat anonimo\nSi quiere iniciar un chat anonimo usa el comando #start o puede usar el siguiente biton,`, wm, null, [['Inicia Chat Anonimo', `.start`]], m)
m.reply(`❇️ Usted se fue del chat anonimo`)
let other = room.other(m.sender) 
if (other) await this.sendButton(other, `El otro usuario salió del chat anonimo\n𝑺i quiere ir a otro chat anonimo use el comando *#start* o puede usar el siguiente botón `, wm, null, [['𝑰nicia chat anonimo ', `.start`]], m)
delete this.anonymous[room.id]
if (command === 'leave') break
}
case 'start': {
if (Object.values(this.anonymous).find(room => room.check(m.sender))) return this.sendButton(m.chat, `𝑻oda𝒗𝒊́a está el chat anonimo o espera que alguien se una para chateaar\n𝑺i quiere salir del chat anonimo use comando *#leave*  O  puede usar el siguiente botón`, wm, null, [['𝑺𝒂𝒍𝒊𝒓 𝒅𝒆𝒍 𝒄𝒉𝒂𝒕 𝒂𝒏𝒐́𝒏𝒊𝒎𝒐', `.leave`]], m)
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
await this.sendButton(room.a, `𝑨𝒍guien se unió al chat anonimo!!\n\n✅ ya puede chatear\n✅`,wm, null, [['𝑶tros usuarios', `.next`]], m)
room.b = m.sender
room.state = 'CHATTING'
await this.sendButton(m.chat, `Alguien se unió al chat anonimo!!\n\n✅ 𝒀𝒂 𝒑𝒖𝒆𝒅𝒆 chatear`, wm, null, [['𝑶tros usuario𝒔', `.next`]], m)
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
await this.sendButton(m.chat, `𝑬𝒔𝒑𝒆𝒓𝒂 𝒂 𝒒𝒖𝒆 𝒂𝒍𝒈𝒖𝒊𝒆𝒏 𝒔𝒆 𝒖𝒏𝒂𝒓 𝒂𝒍 𝒄𝒉𝒂𝒕 𝑨𝒏𝒐́𝒏𝒊𝒎𝒐 𝒕𝒆𝒏𝒈𝒂 𝒑𝒂𝒄𝒊𝒆𝒏𝒄𝒊𝒂\n𝑺𝒊 𝒒𝒖𝒊𝒆𝒓𝒆 𝒔𝒂𝒍𝒊𝒓 𝒖𝒔𝒆𝒓 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 *#leave*  𝑶 𝒑𝒖𝒆𝒅𝒆 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒔𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆 𝒃𝒐𝒕𝒐́𝒏`, wm, null, [['𝑺𝒂𝒍𝒊𝒓 𝒅𝒆𝒍 𝒄𝒉𝒂𝒕 𝒂𝒏𝒐́𝒏𝒊𝒎𝒐', `.leave`]], m)
}
break
}}}
handler.help = ['start', 'leave', 'next']
handler.tags = ['anonymous']
handler.command = ['start', 'leave', 'next']
handler.private = true
export default handler
