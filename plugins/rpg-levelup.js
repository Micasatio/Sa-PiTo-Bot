import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
let { role } = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
╭━━━[ *𝑵𝑰𝑽𝑬𝑳* ]━━━━⬣
┃ *𝑵𝑶𝑴𝑩𝑹𝑬*
┃ ${name}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *𝑵𝑰𝑽𝑬𝑳:* *${user.level}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *𝑹𝑨𝑵𝑮𝑶:* ${role}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *𝑿𝑷:* *${user.exp - min}/${xp}*
╰━━━〔 *𓃠 ${vs}* 〕━━━━━⬣

*𝒕𝒆 𝒇𝒂𝒍𝒕𝒂 ${max - user.exp} 𝒅𝒆 𝑿𝑷 𝒑𝒂𝒓𝒂 𝒔𝒖𝒃𝒊𝒓 𝒅𝒆 𝒏𝒊𝒗𝒆𝒍*
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Bien hecho! ${conn.getName(m.sender)} Nivel: ${user.level}`
        let str = `
╭━━━[ *𝑵𝑰𝑽𝑬𝑳* ]━━━━⬣
┃ *𝑵𝑰𝑽𝑬𝑳 𝑨𝑵𝑻𝑬𝑹𝑰𝑶𝑹:* *${before}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *𝑵𝑰𝑽𝑬𝑳 𝑨𝑪𝑻𝑼𝑨𝑳:* *${user.level}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *𝑹𝑨𝑵𝑮𝑶:* ${role}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *𝑭𝑬𝑪𝑯𝑨:* *${new Date().toLocaleString('id-ID')}*
╰━━━〔 *𓃠 ${vs}* 〕━━━━━⬣

*si quieres subir de nivel más rápido pasa pack!!_*
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = ['nivel', 'lvl', 'levelup', 'level'] 

export default handler
