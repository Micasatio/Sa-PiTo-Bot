/**
POR FAVOR TENGAN LA AMABILIDAD Y BONDAD DE NO CAMBIAR MÍNIMAMENTE LOS CRÉDITOS DE Sapito_Bot, 
SI VAS A AÑADIR TUS DATOS O CRÉDITOS, ESTA BIEN. PERO NO QUITEN LOS QUE YA ESTAN DE Sapito_Bot, GRACIAS 
**/
let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './media/menus/Menu1.jpg'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado =`
╭━━━━[ *Estado* ]━━━━━⬣
┃ *¡𝙃𝙤𝙡𝙖!* ${name}✨ 
┃ *ミ🤖 Estado del Bot 🤖彡*
┃ *=> Bot activo ✅*
┃ *=> Bot uso público ✅️*
┃=> 𝘼𝙘𝙩𝙞𝙫𝙤 𝙙𝙪𝙧𝙖𝙣𝙩𝙚
┃=> ${uptime} ✅
╰━━━━━━━━━━━━━━━━━━⬣`.trim()

conn.sendHydrated(m.chat, estado, wm, picture, 'https://github.com/Micasatio', 'Sapito_Bot', null, null, [
['𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤', '.allmenu'],
['𝙈𝙚𝙣𝙪 𝘼𝙪𝙙𝙞𝙤𝙨́', '#audios']
], m,)}

/*conn.sendHydrated(m.chat, estado, wm, picture, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', '#menu']
], m)}*/

handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|stado|stats|botstat(us)?)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
