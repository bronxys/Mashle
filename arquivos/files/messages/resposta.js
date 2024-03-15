const fs = require('fs');
const colors = require("colors");

//=====================================\\

resposta = {
successo: '️Sucesso',
levelon: 'leveling ativado',
leveloff: 'leveling desativado',
levelnoton: 'leveling não ativado',
levelnol: 'error 0 °-°',
error: {
stick: '*falhou, tente novamente ^_^*',
Iv: 'Link invalido️'
},
msg: {
grupo: 'Este comando só pode ser usado em grupos!',
premium: 'Este pedido é so para usuários premiums',
mod: `Este pedido é específico para usuário mod é dono`,
banido: 'Você foi banido de utilizar os comandos, entre em contato com o proprietário pra saber o porque ❌' ,
donosmt: 'Este é um recurso especial para o proprietário',
donosmt2: 'Este é um recurso especial para o proprietário',
adm: 'Este comando só pode ser usado por administradores de grupo!',
Badmin: 'Este comando só pode ser usado quando o bot se torna administrador!',
}
}

//=====================================\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(colors.red(`Alterações salvas - '${__filename}'`))
delete require.cache[file]
require(file)
})