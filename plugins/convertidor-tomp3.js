import { toAudio } from '../lib/converter.js' 
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `Responda a un vΓ­deo o nota de voz para convertΓ­r a un audio βοΈπΏοΈπ`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw `Xd No lo pude descargar, IntentΓ© nuevamente`
if (!media && !/audio/.test(mime)) throw `No se logro descargar la nota de voz, intentΓ© nuevamente`
let audio = await toAudio(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw `π΅π ππΜ πππππ πππππππππ ππ ππππ ππ πππ π πππππ π΄π·3 π°ππππππΜ ππ πππππ ππΜπ πππππ.`
if (!audio.data && !/video/.test(mime)) throw `π΅π ππΜ πππππ πππππππππ ππ ππππ ππ πππ π πππππ π΄π·3 π°ππππππΜ ππ πππππ ππΜπ πππππ.`
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3 (reply)']
handler.tags = ['audio']
handler.command = ['tomp3', 'toaudio', 'mp3']
export default handler
