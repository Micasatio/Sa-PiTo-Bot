import fetch from 'node-fetch'

let handler = async (m, { conn, text, args }) => {
	if (!args[0]) throw `*[❗] Ingrese el nombre de esta mierda APK que quiera buscar𝙧*`
	let enc = encodeURIComponent(text)
try {
let json = await fetch(`https://latam-api.vercel.app/api/playstore?apikey=brunosobrino&q=${enc}`)
let gPlay = await json.json()
if (!gPlay.titulo) return m.reply(`[ ! ] Sin resultados`)
conn.sendMessage(m.chat,{image:{url: gPlay.imagen},caption:`🔍 Resultados : ${gPlay.titulo}
🧬 Identificador: ${gPlay.id}
⛓️ link: ${gPlay.link}
🖼️ imagen: ${gPlay.imagen}
✍️ Desarrollador: ${gPlay.desarrollador}
📜 Descripción: ${gPlay.descripcion}
💲 Moneda: ${gPlay.moneda}
🎭 GRATIS?: ${gPlay.gratis}
💸 Precio: ${gPlay.precio}
📈 Puntuacion: ${gPlay.puntuacion}`},{quoted:m})
} catch (e) {
m.reply('UFF error, se casho el servidor  🤡,  vuelva a intentar ')
console.log(e)
}
}

handler.help = ['playstore <aplicacion>']
handler.tags = ['internet']
handler.command = /^(playstore)$/i

export default handler 
