let linkRegex = /https:/i
export async function before(m, { isAdmin, isBotAdmin, text }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
if (chat.antiLink2 && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
const linkThisGroup2 = `https://www.youtube.com/`
const linkThisGroup3 = `https://youtu.be/`
if (m.text.includes(linkThisGroup)) return !0
if (m.text.includes(linkThisGroup2)) return !0
if (m.text.includes(linkThisGroup3)) return !0
}    
await conn.reply(m.chat, `*γ πΌπππ πππππ γ*\n\n*πππ, ${await this.getName(m.sender)} πππ no se permite perra , Rompiste las reglas del grupo serΓ‘s eliminad@ π€....!!*${isBotAdmin ? '' : '\n\n*[βππππβ] π―ππ te salvaste puta no soy admin no puedo eliminarte xd π₯΅*'}`, null, { mentions: [m.sender] } )
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('*[βππ£ππ€β] Eπ‘ π₯π§π€π₯πππ©ππ§ππ€ πππ‘ ππ€π© π£π€ π©πππ£π πππ©ππ«πππ€ ππ‘ π§ππ¨π©π§πππππ€Μπ£ (ππ£πππ‘π π§ππ¨π©π§πππ©) ππ€π£π©πππ©π ππ€π£ ππ‘ π₯ππ§π π¦πͺπ π‘π€π¨ πππππ‘ππ©π*')
}
return !0
}
