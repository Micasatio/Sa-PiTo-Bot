let handler = async (m, { conn, usedPrefix, isAdmin, isOwner }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

if (m.isGroup) {
if (!(isAdmin || isOwner)) return dfail('admin', m, conn)}
  
let id = m.chat
conn.vote = conn.vote ? conn.vote : {}
if (!(id in conn.vote)) {
return await conn.sendButton(m.chat, `${fg}ππ€ π¨π ππ ππ§ππππ€π§ π«π€π©ππππ€Μπ£ ππ‘ ππ¨π©π ππ§πͺπ₯π€`, `*Si quieres crear una nueva votaciΓ³n usa el comando ${usedPrefix}crearvoto*`, null, [
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', '/menu']], fkontak, m)}
  
delete conn.vote[id]
await conn.sendButton(m.chat, `${eg}π½ππππππΜπ ππ ππππ πππππ  ππ ππππ πππππππππ`, `*Si quieres hacer una nueva votaciΓ³n usa el comando ${usedPrefix}crearvoto*`, null, [
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', '/menu']], fkontak, m)}

handler.help = ['hapusvote']
handler.tags = ['vote']
handler.command = /^(del|delete|hapus|-)voto$/i
handler.group = true
handler.botAdmin = true
handler.register = true
handler.admin = true

export default handler
