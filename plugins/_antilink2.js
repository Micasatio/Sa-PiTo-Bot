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
await conn.reply(m.chat, `*「 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆𝙎 」*\n\n*𝒄𝒉𝒆, ${await this.getName(m.sender)} 𝒆𝒔𝒐 no se permite perra , 𝒓𝒐𝒎𝒑𝒊𝒔𝒕𝒆𝒔 𝒍𝒂𝒔 𝒓𝒆𝒈𝒍𝒂𝒔 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐 𝒔𝒆𝒓𝒂́𝒔 𝒆𝒙𝒕𝒆𝒓𝒎𝒊𝒏𝒂𝒅𝒐🤑....!!*${isBotAdmin ? '' : '\n\n*[❗𝐈𝐍𝐅𝐎❗] 𝑯𝒆𝒚 𝒒𝒖𝒆 𝒔𝒂𝒍𝒗𝒂𝒓𝒕𝒆 𝑮𝒊𝒍 𝒆𝒍 𝒃𝒐𝒕 𝒏𝒐 𝒆𝒔 𝒂𝒅𝒎𝒊𝒏 :)*'}`, null, { mentions: [m.sender] } )
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('*[❗𝙄𝙣𝙛𝙤❗] 𝙀𝙡 𝙥𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙩𝙞𝙚𝙣𝙚 𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤 𝙚𝙡 𝙧𝙚𝙨𝙩𝙧𝙞𝙘𝙘𝙞𝙤́𝙣 (𝙚𝙣𝙖𝙗𝙡𝙚 𝙧𝙚𝙨𝙩𝙧𝙞𝙘𝙩) 𝙘𝙤𝙣𝙩𝙖𝙘𝙩𝙚 𝙘𝙤𝙣 𝙚𝙡 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙡𝙤𝙨 𝙝𝙖𝙗𝙞𝙡𝙞𝙩𝙚*')
}
return !0
}
