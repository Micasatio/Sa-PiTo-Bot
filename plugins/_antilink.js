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
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*𝑯𝒆𝒚!! El antilink está activo, Pero ohhh eres admin no te puedo eliminar xd 😎*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.reply(m.chat, `*「 ANTI LINKS 」*\n\n*𝘾𝙝𝙚, ${await this.getName(m.sender)} Eso no se permite puta, rompiste las reglas del grupo serás eliminad@  🤑....!!*${isBotAdmin ? '' : '\n\n*[❗𝐈𝐍𝐅𝐎❗] Te salvaste perra no soy admin no te puedo eliminar  :v*'}`, null, { mentions: [m.sender] } )   
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('*[❗𝙄𝙣𝙛𝙤❗] 𝙀𝙡 𝙥𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙩𝙞𝙚𝙣𝙚 𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤 𝙚𝙡 𝙧𝙚𝙨𝙩𝙧𝙞𝙘𝙘𝙞𝙤́𝙣 (𝙚𝙣𝙖𝙗𝙡𝙚 𝙧𝙚𝙨𝙩𝙧𝙞𝙘𝙩) 𝙘𝙤𝙣𝙩𝙖𝙘𝙩𝙚 con 𝙚𝙡 𝙥𝙖𝙧𝙖 que 𝙡𝙤𝙨 𝙝𝙖𝙗𝙞𝙡𝙞𝙩𝙚*')
conn.sendFile(m.chat, vn, 'antilink.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
return !0
}
