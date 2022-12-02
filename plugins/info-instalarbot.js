let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://i.imgur.com/lkch77g.jpeg' 
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
await m.reply(`╰⊱🔰⊱ *𝑰𝒏𝒔𝒕𝒂𝒍𝒂𝒄𝒊𝒐𝒏* ⊱🔰⊱╮`)
  //conn.sendButton(m.chat, str, author, await(await fetch(pp)).buffer(), [['Menu', '/menu']], m)
let texto1 = `
 SAPITO Bot aún no está listo para la instalación 

 𝒄𝒖𝒂𝒍𝒒𝒖𝒊𝒆𝒓 𝒄𝒐𝒔𝒂 𝒉𝒂𝒃𝒍𝒂𝒎𝒆 𝒔𝒐𝒍𝒐 𝒑𝒐𝒓 𝒕𝒆𝒎𝒂 𝒅𝒆𝒍 𝒃𝒐𝒕🔰🤖
 𝑺𝒂𝒍𝒖𝒅𝒐𝒔🔰🤖`
let buttonMessage= {
'document': { url: `https://youtu.be/HyCqmXDHGeQ` },
'mimetype': `application/${document}`,
'fileName': `𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://youtu.be/HyCqmXDHGeQ',
'mediaType': 2,
'previewType': 'pdf',
'title': 'tutorial del instalación',
'body': wm,
 }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(instalarbot|instalarbot)$/i
export default handler
