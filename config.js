const fs = require('fs')
const file = require.resolve(__filename)


global.ownerNumber = ["923058190234@s.whatsapp.net"]
global.nomerOwner = "923058190234"
global.nomorOwner = ['923058190234']
global.namaDeveloper = "𝐇𝐔𝐙𝐈𝐈-𝐁𝐀𝐋𝐎𝐂𝐇" //jangn diubh bng
global.namaOwner = "HUZII-BALOCH"
global.namaBot = "BLACK-WORLD"
global.versionBot = "6"
global.packname = "BLACK WORLD ꪜ1"
global.author = "HUZII BALOCH"
global.ThM = 'https://iili.io/2yFPx0F.png'
global.prefa = ['','!','.',',','🐤','🗿'] 
global.travaSend = "1" // total travas a ser enviado



fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})