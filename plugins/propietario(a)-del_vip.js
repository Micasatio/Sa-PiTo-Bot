let handler = async (m, { conn, text, command, usedPrefix }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `šš©šš¦šŖšš©ššØ š š”š š„šš§šØš¤š£š š¦šŖš š«šš£ šš”šš¢šš£šš§ šš š”š¤šØ šŖšØšŖšš§šš¤šØ š«šš„ šæ\n\nšššš¢š„š”š¤\n*${usedPrefix + command} @tag`
if (!global.prems.includes(who.split`@`[0])) throw `${iig}šš/šš¼ šššš¼ššš(š¼) šš šš ššš š„ŗ`
let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
global.prems.splice(index, 1)
conn.reply(m.chat, `${eg}@${who.split`@`[0]} š¼šš¤š§š šš”/š”š š®š š£š¤ ššØ šŖšØšŖšš§šš¤ š«šš„ š©šš£šš š”šĢš¢šš©ššØ šš¤š£ ${gt} š°`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['delprem <@user>']
handler.tags = ['owner']
handler.command = /^(remove|-|del)prem$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
