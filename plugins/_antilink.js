let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
let vn = './media/antilink.mp3'
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*π―ππ!! El antilink estΓ‘ activo, Pero ohhh eres admin no te puedo eliminar xd π*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.reply(m.chat, `*γ ANTI LINKS γ*\n\n*πΎππ, ${await this.getName(m.sender)} Eso no se permite puta, rompiste las reglas del grupo serΓ‘s eliminad@  π€....!!*${isBotAdmin ? '' : '\n\n*[βππππβ] Te salvaste perra no soy admin no te puedo eliminar  :v*'}`, null, { mentions: [m.sender] } )   
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('*[βππ£ππ€β] ππ‘ π₯π§π€π₯πππ©ππ§ππ€ πππ‘ ππ€π© π£π€ π©πππ£π πππ©ππ«πππ€ ππ‘ π§ππ¨π©π§πππππ€Μπ£ (ππ£πππ‘π π§ππ¨π©π§πππ©) ππ€π£π©πππ©π con ππ‘ π₯ππ§π que π‘π€π¨ πππππ‘ππ©π*')
conn.sendFile(m.chat, vn, 'antilink.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
return !0
}
