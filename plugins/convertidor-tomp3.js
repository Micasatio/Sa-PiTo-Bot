import { toAudio } from '../lib/converter.js' 
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `Responda a un vídeo o nota de voz para convertír a un audio Ⓜ️🅿️🕒`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw `Xd No lo pude descargar, Intenté nuevamente`
if (!media && !/audio/.test(mime)) throw `No se logro descargar la nota de voz, intenté nuevamente`
let audio = await toAudio(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw `𝑵𝒐 𝒔𝒆́ 𝒍𝒐𝒈𝒓𝒐 𝒄𝒐𝒏𝒗𝒆𝒓𝒕𝒊𝒓 𝒔𝒖 𝒏𝒐𝒕𝒂 𝒅𝒆 𝒗𝒐𝒛 𝒂 𝒂𝒖𝒅𝒊𝒐 𝑴𝑷3 𝑰𝒏𝒕𝒆𝒏𝒕𝒆́ 𝒅𝒆 𝒏𝒖𝒆𝒗𝒐 𝒎𝒂́𝒔 𝒕𝒂𝒓𝒅𝒆.`
if (!audio.data && !/video/.test(mime)) throw `𝑵𝒐 𝒔𝒆́ 𝒍𝒐𝒈𝒓𝒐 𝒄𝒐𝒏𝒗𝒆𝒓𝒕𝒊𝒓 𝒔𝒖 𝒏𝒐𝒕𝒂 𝒅𝒆 𝒗𝒐𝒛 𝒂 𝒂𝒖𝒅𝒊𝒐 𝑴𝑷3 𝑰𝒏𝒕𝒆𝒏𝒕𝒆́ 𝒅𝒆 𝒏𝒖𝒆𝒗𝒐 𝒎𝒂́𝒔 𝒕𝒂𝒓𝒅𝒆.`
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3 (reply)']
handler.tags = ['audio']
handler.command = ['tomp3', 'toaudio', 'mp3']
export default handler
