let handler = async (m, { conn, text, usedPrefix, command }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw `${mg}Ingresa el nΓΊmero para el spam π₯΅\n*β ${usedPrefix + command} numero|texto|cantidad*\nπ¬ππππππ\n*β ${usedPrefix + command} 999999999999|Holaaa|35*`
if (!pesan) throw `${mg}π°ngresa el nΓΊmero para el spam π₯΅\n*β ${usedPrefix + command} numero|texto|cantidad*\nπ¬ππππππ\n*β ${usedPrefix + command} 999999999999|Holaaa|35*`
if (jumlah && isNaN(jumlah)) throw `La cantidad debe de ir el nΓΊmero al que se le harΓ‘ spamchat \n*β ${usedPrefix + command} numero|texto|cantidad*\nπ¬ππππππ\n*β ${usedPrefix + command} 999999999999|Holaaa|35*`
let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 5) throw `${fg}Minimo *5* mensajπ para hacer spam`
await m.reply(`${eg}π¬l spam se envio *${fixedJumlah}* Veces π *${nomor}*`)
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
