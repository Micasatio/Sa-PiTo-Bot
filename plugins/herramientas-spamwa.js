let handler = async (m, { conn, text, usedPrefix, command }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw `${mg}Ingresa el número para el spam 🥵\n*❊ ${usedPrefix + command} numero|texto|cantidad*\n𝑬𝒋𝒆𝒎𝒑𝒍𝒐\n*❊ ${usedPrefix + command} 999999999999|Holaaa|35*`
if (!pesan) throw `${mg}𝑰ngresa el número para el spam 🥵\n*❊ ${usedPrefix + command} numero|texto|cantidad*\n𝑬𝒋𝒆𝒎𝒑𝒍𝒐\n*❊ ${usedPrefix + command} 999999999999|Holaaa|35*`
if (jumlah && isNaN(jumlah)) throw `La cantidad debe de ir el número al que se le hará spamchat \n*❊ ${usedPrefix + command} numero|texto|cantidad*\n𝑬𝒋𝒆𝒎𝒑𝒍𝒐\n*❊ ${usedPrefix + command} 999999999999|Holaaa|35*`
let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 5) throw `${fg}Minimo *5* mensaj𝒆 para hacer spam`
await m.reply(`${eg}𝑬l spam se envio *${fixedJumlah}* Veces 𝒂 *${nomor}*`)
for (let i = fixedJumlah; i > 1; i--) {
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['General']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = false
handler.private = true
handler.level = 9
handler.limit = 80
handler.register = true
export default handler 
