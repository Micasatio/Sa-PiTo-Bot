//Creditos https://github.com/BrunoSobrino

import axios from 'axios'
import fs from 'fs'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `[ ⚠️ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable modohorny para activar\n\n`
if (!text) throw `Que busca pajero? \nUse el comando de esta mandera\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤\n*${usedPrefix + command} Sexo*`
try {
//let apikey = keysxxx[Math.floor(Math.random() * keysxxx.length)]
let res = await axios.get(`https://zenzapis.xyz/searching/xnxx?apikey=${keysxxx}&query=${text}`)
let json = res.data
let listSerch = []
let teskd = `𝙍esultado de la búsqueda | ${args.join(" ")}`
const sections = [{
title: `Contenido Relacionado`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: '𝑬𝒍𝒊𝒋𝒂 𝒚 precione envia𝒓',
title: " ➤ contenido encontrad𝒐",
buttonText: "➤ Resultados",
sections}
for (let i of json.result) {
listSerch.push({title: i.title, description: `⊹ 𝑺𝒆𝒍𝒆𝒄𝒄𝒊𝒐𝒏𝒆 𝒂𝒒𝒖𝒊 𝑷𝒂𝒓𝒂 𝒑𝒐𝒅𝒆𝒓 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒓 𝒆𝒍 𝒗𝒊́𝒅𝒆𝒐`, rowId: `${usedPrefix}xnxxdl ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch (e) {
m.reply(`uf𝒇, Se calló el servidor 🤡, vuelva a intentar pajero`)
console.log(e)
}}
handler.command = /^porhubsearch|xvideossearch|xnxxsearch|buscarxnxx|xnxxbuscar$/i
handler.level = 5
handler.limit = 1
handler.register = true
export default handler

