import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
let { role } = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
โญโโโ[ *๐ต๐ฐ๐ฝ๐ฌ๐ณ* ]โโโโโฌฃ
โ *๐ต๐ถ๐ด๐ฉ๐น๐ฌ*
โ ${name}
โโโโโโโโโโโโโโโโโโ
โ *๐ต๐ฐ๐ฝ๐ฌ๐ณ:* *${user.level}*
โโโโโโโโโโโโโโโโโโ
โ *๐น๐จ๐ต๐ฎ๐ถ:* ${role}
โโโโโโโโโโโโโโโโโโ
โ *๐ฟ๐ท:* *${user.exp - min}/${xp}*
โฐโโโใ *๐  ${vs}* ใโโโโโโฌฃ

*๐๐ ๐๐๐๐๐ ${max - user.exp} ๐๐ ๐ฟ๐ท ๐๐๐๐ ๐๐๐๐๐ ๐๐ ๐๐๐๐๐*
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Bien hecho! ${conn.getName(m.sender)} Nivel: ${user.level}`
        let str = `
โญโโโ[ *๐ต๐ฐ๐ฝ๐ฌ๐ณ* ]โโโโโฌฃ
โ *๐ต๐ฐ๐ฝ๐ฌ๐ณ ๐จ๐ต๐ป๐ฌ๐น๐ฐ๐ถ๐น:* *${before}*
โโโโโโโโโโโโโโโโโโ
โ *๐ต๐ฐ๐ฝ๐ฌ๐ณ ๐จ๐ช๐ป๐ผ๐จ๐ณ:* *${user.level}*
โโโโโโโโโโโโโโโโโโ
โ *๐น๐จ๐ต๐ฎ๐ถ:* ${role}
โโโโโโโโโโโโโโโโโโ
โ *๐ญ๐ฌ๐ช๐ฏ๐จ:* *${new Date().toLocaleString('id-ID')}*
โฐโโโใ *๐  ${vs}* ใโโโโโโฌฃ

*si quieres subir de nivel mรกs rรกpido pasa pack!!_*
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
