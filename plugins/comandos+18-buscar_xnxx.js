//Creditos https://github.com/BrunoSobrino

import axios from 'axios'
import fs from 'fs'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `[ β οΈ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable modohorny para activar\n\n`
if (!text) throw `Que busca pajero? \nUse el comando de esta mandera\nππππ’π₯π‘π€\n*${usedPrefix + command} Sexo*`
try {
//let apikey = keysxxx[Math.floor(Math.random() * keysxxx.length)]
let res = await axios.get(`https://zenzapis.xyz/searching/xnxx?apikey=${keysxxx}&query=${text}`)
let json = res.data
let listSerch = []
let teskd = `πesultado de la bΓΊsqueda | ${args.join(" ")}`
const sections = [{
title: `Contenido Relacionado`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: 'π¬ππππ π precione enviaπ',
title: " β€ contenido encontradπ",
buttonText: "β€ Resultados",
sections}
for (let i of json.result) {
listSerch.push({title: i.title, description: `βΉ πΊπππππππππ ππππ π·πππ πππππ πππππππππ ππ ππΜπππ`, rowId: `${usedPrefix}xnxxdl ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch (e) {
m.reply(`ufπ, Se callΓ³ el servidor π€‘, vuelva a intentar pajero`)
console.log(e)
}}
handler.command = /^porhubsearch|xvideossearch|xnxxsearch|buscarxnxx|xnxxbuscar$/i
handler.level = 5
handler.limit = 1
handler.register = true
export default handler

