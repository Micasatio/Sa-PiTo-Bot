let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command, isPrems, isOwner, isROwner}) => {
  if (!global.db.data.settings[conn.user.jid].temporal) throw `๐ด๐ ๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐๐๐๐๐ ๐๐๐๐ฬ ๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐๐ ๐๐๐ ๐๐๐๐๐๐๐๐๐๐๐๐๐ ๐ ๐๐๐๐๐๐ ๐๐๐๐๐๐ ๐๐ฬ๐ ๐๐๐๐๐ ๐ ๐๐ ๐๐ ๐๐๐๐๐ ๐๐๐ ๐๐๐ ๐๐๐  *#on temporal* ๐ท๐๐๐ ๐๐๐๐๐๐๐`
  
  if (!args[0]) throw `๐๐จ๐๐ง ๐๐ก ๐๐ค๐ข๐๐ฃ๐๐ค ๐๐ค๐ข๐ค ๐๐จ๐ฉ๐ ๐๐๐๐ข๐ฅ๐ก๐ค\n*${usedPrefix + command} ๐๐ฃ๐ก๐๐๐ ๐ฃ๐ช๐ฃ๐๐ง๐ค ๐๐๐ก ๐ฉ๐ค๐ ๐๐ฃ๐จ*\n\n*๐๐๐๐ข๐ฅ๐ก๐ค*\n*${usedPrefix + command} ${nn} 3*\n\n*3 ๐ป๐๐๐๐ ๐ช = 30 ๐๐๐๐๐๐๐`
let [_, code] = args[0].match(linkRegex) || [] 
if (!linkRegex.test(args[0])) throw `${fg}๐ฌ๐๐๐๐๐ ๐๐ ๐๐ฬ๐๐๐๐.` //Aquรญ 

    
  //if (!code) throw `${fg}*ENLACE INCORRECTO, VERIFIQUE QUE EL ENLACE SEA DE UN GRUPO DE WHATSAPP Y QUE NO ESTE CADUCADO*`
let user = db.data.users[m.sender]

  if (!(isPrems || isOwner || isROwner)) { //Para Usuarios
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let img = 'https://i.imgur.com/8fK4h6F.jpg'
if (user.joincount < 1) throw `*ยก๐๐ ๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐! ๐ช*\n\n*๐ช๐๐๐๐๐ ๐๐๐๐๐๐ ๐๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐๐ ๐ ๐ป๐๐ ๐ณ๐๐๐๐๐๐-๐ด๐ซ ๐ ๐๐ ๐๐๐๐๐ ๐๐๐ ๐๐ ๐๐๐๐๐๐๐ ${usedPrefix}buy3 o ${usedPrefix}buyall3* *๐ช๐๐๐๐๐๐๐*`
 //if (user.joincount === 0 ) throw `${ag}*ยกYA NO TIENES TOKENS! ๐ช*\n\n*COMPRA TOKENS PARA PODER INVITAR A GATABOT A Tร GRUPO CON EL COMANDO ${usedPrefix}buy3* *cantidad*`  
 if (!args[1]) throw `๐๐จ๐๐ง ๐๐ก ๐๐ค๐ข๐๐ฃ๐๐ค ๐๐ค๐ข๐ค ๐๐จ๐ฉ๐ ๐๐๐๐ข๐ฅ๐ก๐ค\n*${usedPrefix + command} ๐๐ฃ๐ก๐๐๐ ๐ฃ๐ช๐ฃ๐๐ง๐ค ๐๐๐ก ๐ฉ๐ค๐ ๐๐ฃ๐จ*\n\n*๐๐๐๐ข๐ฅ๐ก๐ค*\n*${usedPrefix + command} ${nn} 3*\n\n*3 ๐ป๐๐๐๐ ๐ช = 30 ๐๐๐๐๐๐๐*`
 if (!linkRegex.test(args[0])) throw `๐ฌ๐๐๐๐๐ ๐๐ ๐๐ฬ๐๐๐๐` //Aquรญ 
 if (isNaN(args[1])) throw `*๐บ๐๐๐ ๐ฐ๐๐๐๐๐๐ ๐๐ ๐๐ฬ๐๐๐๐ ๐๐ ๐๐๐๐๐(S)*`
 if (args[1] < 3) throw `*๐ด๐ฬ๐๐๐๐ 3 ๐๐๐๐๐(S) ๐๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐๐ ๐ ๐ป๐๐ ๐ณ๐๐๐๐๐๐-๐ด๐ซ`
 if (args[1] > 3) throw `*๐ด๐ฬ๐๐๐๐ 3 ๐๐๐๐๐(S) ๐ท๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐๐ ๐ ๐ป๐๐ ๐ณ๐๐๐๐๐๐-๐ด๐ซ*` //Solo ingresarรก si tiene 3 Token(s)
 
let res = await conn.groupAcceptInvite(code) 
conn.reply(m.chat, `๐ ๐๐ ๐๐ ๐ช๐ฃ๐๐๐ค sapito ๐๐ค๐ง๐ง๐๐๐ฉ๐๐ข๐๐ฃ๐ฉ๐ ๐๐ก ๐๐ง๐ช๐ฅ๐ค!!!*`, m).then(async() => { 
  user.joincount -= args[1] 
 var jumlahHari = 600000 * args[1] // 10 minutos | Usuarios
 var now = new Date() * 1
//let res = await conn.groupAcceptInvite(code) 
//conn.reply(m.chat, `${eg}๐ป *๐บ๐ ๐๐ ๐๐๐๐๐ sapito ๐๐ ๐๐๐๐๐!!!*`, m).then(async() => {
 //var jumlahHari = 600000 * 1 // 10 minutos | Usuarios
// var now = new Date() * 1 
 
 if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
else global.db.data.chats[res].expired = now + jumlahHari
await conn.reply(m.chat, `โ ๐๐ ๐๐ ๐ช๐ฃ๐๐๐ค ๐๐ก ๐๐ง๐ช๐ฅ๐ค!!!\n${await conn.getName(res)}\n\n๐๐๐๐ช๐๐ง๐๐ ๐ฆ๐ช๐ ๐๐จ โณ๐๐๐ข๐ฅ๐ค๐ง๐๐ก, ๐ช๐จ๐ ๐๐ก ๐๐ค๐ข๐๐ฃ๐๐ค ${usedPrefix}menu ๐๐๐ง๐ ๐ซ๐๐ฏ ๐๐ก ๐ข๐๐ฃ๐ชฬ*\n\n๐ช ๐๐ ๐จ๐๐ก๐๐ง๐ฬ ๐๐ช๐ฉ๐ค๐ข๐ฬ๐ฉ๐๐๐๐ข๐๐ฃ๐ฉ๐ ๐๐ฃ:*\n${msToDate(global.db.data.chats[res].expired - now)}\n\n${username} ๐๐ ๐ฆ๐ช๐๐๐ ${user.joincount} ๐ฉ๐ค๐ ๐๐ฃ๐จ(S) ๐ช*\n\nโ *๐๐ช๐๐๐ ๐ช๐จ๐๐ง ๐๐ก ๐๐ค๐ข๐๐ฃ๐๐ค ๐ฉ๐๐ข๐๐๐ฬ๐ฃ ๐๐ฃ ๐๐ง๐ช๐ฅ๐ค ๐ข๐๐๐ฃ๐ฉ๐ง๐๐จ ๐๐จ๐ฉ๐ฬ ๐ฎ๐ค\n\nโ *๐๐ ๐ฆ๐ช๐๐๐ง๐ ๐ฆ๐ช๐ ๐๐จ๐ฉ๐ ๐ฅ๐ค๐ง ๐ข๐ฬ๐จ ๐ฉ๐๐๐ข๐ฅ๐ค ๐๐ช๐ข๐๐ฃ๐ฉ๐ ๐๐ก ๐ฃ๐ช๐ฃ๐๐ง๐ค ๐๐๐ก ๐ฉ๐ค๐ ๐๐ฃ๐จ ๐๐ช๐๐ฃ๐๐ค ๐ช๐จ๐ ๐๐ก ๐๐ค๐ข๐๐ฃ๐๐ค \n*${usedPrefix + command}*\n\nโ *๐๐ฃ ๐๐๐จ๐ค  ๐ฆ๐ช๐ ๐ช๐ฃ ๐๐๐ข๐๐ฃ ๐ข๐ ๐๐ก๐๐ข๐๐ฃ๐ ๐๐๐ก ๐๐ง๐ช๐ฅ๐ค ๐ฎ ๐ฆ๐ช๐๐๐ง๐ ๐ฆ๐ช๐ ๐ซ๐ช๐๐ก๐ซ๐,  ๐๐คฬ๐๐๐ฉ๐ ๐ฃ๐ค ๐จ๐ ๐ซ๐๐ฃ ๐ฅ๐ค๐๐๐ง`, m)
for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
  if (data.exists) 
    conn.reply(m.chat, `@${m.sender.split`@`[0]} ๐จ๐๐๐๐๐๐๐๐ ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, ๐ฌ๐ ๐๐๐ ๐๐ ๐๐๐๐๐ ๐ ๐๐๐๐๐๐: ${msToDate(global.db.data.chats[res].expired - now)}`, data.jid, m) 
}})

       
} else if ((isOwner || !isPrems || isROwner)) { //Para Owner
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
  
if (user.joincount === 0 ) throw `${ag}*ยก๐๐ ๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐! ๐ช*\n\n*๐ช๐๐๐๐๐ ๐๐๐๐๐๐ ๐๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐๐ ๐ ๐ป๐๐ ๐ณ๐๐๐๐๐๐-๐ด๐ซ ๐ ๐๐ ๐๐๐๐๐ ๐๐๐ ๐๐ ๐๐๐๐๐๐๐ ${usedPrefix}buy3* *๐ช๐๐๐๐๐๐๐*`
  if (!args[1]) throw `${mg}*๐ผ๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐๐๐๐ ๐๐๐๐ ๐๐๐๐๐๐๐*\n*${usedPrefix + command} ๐ฌ๐๐๐๐๐ ๐๐ฬ๐๐๐๐ ๐๐ ๐๐๐๐๐(s)*\n\n*๐ฌ๐๐๐๐๐๐*\n*${usedPrefix + command} ${nn} 3*\n\n*3 ๐ป๐๐๐๐ ๐ช = 30 ๐๐๐๐๐๐๐*`
if (!linkRegex.test(args[0])) throw `${fg}๐ฌ๐๐๐๐๐ ๐๐ ๐๐ฬ๐๐๐๐ .` //Aquรญ 

  let res = await conn.groupAcceptInvite(code) 
  conn.reply(m.chat, `๐ ๐๐ ๐๐ ๐ช๐ฃ๐๐๐ค sapito ๐๐ค๐ง๐ง๐๐๐ฉ๐๐ข๐๐ฃ๐ฉ๐ ๐๐ก ๐๐ง๐ช๐ฅ๐ค!!!`, m).then(async() => { //Si el Owner se une al Grupo no habrรก temporizador
let img = 'https://i.imgur.com/8fK4h6F.jpg'
 var jumlahHari = 600000 * args[1] // 10 minutos | Owner
 var now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
else global.db.data.chats[res].expired = now + jumlahHari

await conn.reply(m.chat, `โ ๐๐ ๐๐ ๐ช๐ฃ๐๐๐ค ๐๐ก ๐๐ง๐ช๐ฅ๐ค!!!\n${await conn.getName(res)}\n\n๐๐๐๐ช๐๐ง๐๐ ๐ฆ๐ช๐ ๐๐จ โณ ๐๐๐ข๐ฅ๐ค๐ง๐๐ก, ๐ช๐จ๐ ๐๐ก ๐๐ค๐ข๐๐ฃ๐๐ค ${usedPrefix}menu ๐๐๐ง๐ ๐ซ๐๐ฏ ๐๐ก ๐ข๐๐ฃ๐ชฬ\n\n๐ช *๐๐ ๐จ๐๐ก๐๐ง๐ฬ ๐๐ช๐ฉ๐ค๐ข๐ฬ๐ฉ๐๐๐๐ข๐๐ฃ๐ฉ๐ ๐๐ฃ:*\n${msToDate(global.db.data.chats[res].expired - now)}\n\n${username} ๐๐ ๐ฆ๐ช๐๐๐  ${user.joincount} ๐ฉ๐ค๐ ๐๐ฃ๐จ(S) ๐ช\n\nโ *๐๐ช๐๐๐ ๐ช๐จ๐๐ง ๐๐ก ๐๐ค๐ข๐๐ฃ๐๐ค ๐ฉ๐๐ข๐๐๐ฬ๐ฃ ๐๐ฃ ๐๐ง๐ช๐ฅ๐ค ๐ข๐๐๐ฃ๐ฉ๐ง๐๐จ ๐๐จ๐ฉ๐ฬ ๐ฎ๐ค*\n\nโ ๐๐ ๐ฆ๐ช๐๐๐ง๐ ๐ฆ๐ช๐ ๐๐จ๐ฉ๐ ๐ฅ๐ค๐ง ๐ข๐ฬ๐จ ๐ฉ๐๐๐ข๐ฅ๐ค ๐๐ช๐ข๐๐ฃ๐ฉ๐ ๐๐ก ๐ฃ๐ช๐ฃ๐๐ง๐ค ๐๐๐ก ๐ฉ๐ค๐ ๐๐ฃ๐จ ๐๐ช๐๐ฃ๐๐ค ๐ช๐จ๐ ๐๐ก ๐๐ค๐ข๐๐ฃ๐๐ค \n*${usedPrefix + command}*\n\nโ ๐๐ฃ ๐๐๐จ๐ค  ๐ฆ๐ช๐ ๐ช๐ฃ ๐๐๐ข๐๐ฃ ๐ข๐ ๐๐ก๐๐ข๐๐ฃ๐ ๐๐๐ก ๐๐ง๐ช๐ฅ๐ค ๐ฎ ๐ฆ๐ช๐๐๐ง๐ ๐ฆ๐ช๐ ๐ซ๐ช๐๐ก๐ซ๐,  ๐๐คฬ๐๐๐ฉ๐ ๐ฃ๐ค ๐จ๐ ๐ซ๐๐ฃ ๐ฅ๐ค๐๐๐ง.`, m)  
for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != m.sender)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
  if (data.exists) 
    conn.reply(m.chat, `@${m.sender.split`@`[0]} ๐จ๐๐๐๐๐๐๐๐ ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, ๐ฌ๐ ๐๐๐ ๐๐ ๐๐๐๐๐ ๐ ๐๐๐๐๐๐: ${msToDate(global.db.data.chats[res].expired - now)}`, data.jid, m)
                
} conn.sendButton(m.chat, '', wm, null, [['Creadora', `/creadora`], ['๐๐ค๐ก๐ซ๐๐ง ๐๐ก ๐๐๐ฃ๐ชฬ โ๏ธ', '/menu']], m, res) })}
    
}

handler.help = ['temporal', 'tiempo']
handler.command = ['bottemporal', 'botemporal', 'addbot', 'botadd'] ///^(temporal|tiempo)$/i
export default handler

function msToDate(ms) {
    let temp = ms
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " *Dรญa(s)* โ๏ธ\n" + hours + " *Hora(s)* โณ\n" + minutes + " *Minuto(s)* โฐ\n" + sec + " *Segundo(s)* ๐\n";
    //return days + " Hari " + hours + " Jam " + minutes + " Menit";
    // +minutes+":"+sec;
}
