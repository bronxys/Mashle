const fs = require('fs')
const chalk = require('chalk')

global.dono = ['55xx']
global.NickDono = 'Seu nome do dono'
global.NomeDoBot = 'мαsнłᴇ вστ'
global.packname = 'мαsнłᴇ вστ'
global.author = 'мαsнłᴇ вστ'
global.prefixobot = ['-']

global.logo = 'https://telegra.ph/file/76f89bcb6dfefe76d03ae.jpg'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Atualizado= '${__filename}'`))
delete require.cache[file]
require(file)
})
