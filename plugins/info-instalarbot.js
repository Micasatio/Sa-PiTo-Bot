let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://i.imgur.com/lkch77g.jpeg' 
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
await m.reply(`โฐโฑ๐ฐโฑ *๐ฐ๐๐๐๐๐๐๐๐๐๐* โฑ๐ฐโฑโฎ`)
  //conn.sendButton(m.chat, str, author, await(await fetch(pp)).buffer(), [['Menu', '/menu']], m)
let texto1 = `
 SAPITO Bot aรบn no estรก listo para la instalaciรณn 

 ๐๐๐๐๐๐๐๐๐ ๐๐๐๐ ๐๐๐๐๐๐๐ ๐๐๐๐ ๐๐๐ ๐๐๐๐ ๐๐๐ ๐๐๐๐ฐ๐ค
 ๐บ๐๐๐๐๐๐๐ฐ๐ค`
let buttonMessage= {
'document': { url: `https://youtu.be/HyCqmXDHGeQ` },
'mimetype': `application/${document}`,
'fileName': `๐ป๐๐ ๐ณ๐๐๐๐ฉ๐๐-๐ด๐ซ`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://youtu.be/HyCqmXDHGeQ',
'mediaType': 2,
'previewType': 'pdf',
'title': 'tutorial del instalaciรณn',
'body': wm,
 }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '๐ป๐๐ ๐ณ๐๐๐๐ฉ๐๐-๐ด๐ซ'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(instalarbot|instalarbot)$/i
export default handler
