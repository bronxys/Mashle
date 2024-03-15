const fs = require('fs')
const chalk = require('chalk')

//menu
exports.menu = (prefixobot, hr, pushname, NomeDoBot) => {
return`
┏━────[ ∅ ]────━┓
│ [ *Informações* ]
│┏━───•
│[⌁] Nome: ${pushname}
│[⌁] Hora: ${hr}
│[⌁] Prefixo: [ ${prefixobot} ]
│[⌁] Bot: ${NomeDoBot}
│┗━───•
│
│ [ *Comandos* ]
│┏━───•
│[⌁] ${prefixobot}Menulogos [ Banner ]
│[⌁] ${prefixobot}Menugp [ Grupo ]
│[⌁] ${prefixobot}Brincadeira [ Grupo ]
│[⌁] ${prefixobot}Animes [ Wallpaper | NsFw ]
│┗━───•
│
│ [ *Criador* ]
│┏━───•
│[⌁] ${prefixobot}Ping [ Dono ]
│[⌁] ${prefixobot}Limpar-pasta [ Dono ]
│[⌁] ${prefixobot}Reviver-qr [ Dono ]
│┗━───•
│
│ [ *Principal* ]
│┏━───•
│[⌁] ${prefixobot}Perfil [ Seus status ]
│[⌁] ${prefixobot}Status [ Ativar | Desativar ]
│[⌁] ${prefixobot}Atividades
│[⌁] ${prefixobot}Suporte [ Problema ]
│[⌁] ${prefixobot}Totalmsg
│[⌁] ${prefixobot}Convite [ Link do grupo ]
│┗━───•
│
│ [ *Pesquisas* ]
│┏━───•
│[⌁] ${prefixobot}Play_v [ Qual o nome ]
│[⌁] ${prefixobot}Play_a [ Qual o nome ]
│[⌁] ${prefixobot}Playlista [ Qual o nome ]
│[⌁] ${prefixobot}Musica [ Cadê o nome ]
│[⌁] ${prefixobot}Playmix [ Cadê o nome ]
│[⌁] ${prefixobot}Clima [ Cadê o nome ]
│[⌁] ${prefixobot}Tenor [ Cadê o nome ]
│[⌁] ${prefixobot}Pinterest [ Cadê o nome ]
│┗━───•
│
│ [ *Geradores* ]
│┏━───•
│[⌁] ${prefixobot}Nickname [ Gerar Nick ]
│[⌁] ${prefixobot}Toptv [ Marque o vídeo ]
│[⌁] ${prefixobot}Link [ Marque o foto ou vid ]
│┗━───•
│
│ [ *Downloads* ]
│┏━───•
│[⌁] ${prefixobot}Insta_v [ Cadê o link ]
│[⌁] ${prefixobot}Kwai_v [ Cadê o link ]
│[⌁] ${prefixobot}Gitdl [ Cadê o link ]
│[⌁] ${prefixobot}Pinvid [ Cadê o link ]
│[⌁] ${prefixobot}Pinfoto [ Cadê o link ]
│[⌁] ${prefixobot}Ttimg [ Cadê o link ]
│[⌁] ${prefixobot}Ytmp3 [ Cadê o link ]
│[⌁] ${prefixobot}Ytmp4 [ Cadê o link ]
│[⌁] ${prefixobot}Ytmp5 [ Cadê o link ]
│[⌁] ${prefixobot}Ytmp6 [ Cadê o link ]
│[⌁] ${prefixobot}Tiktok_v [ Cadê o link ]
│[⌁] ${prefixobot}Tiktok_a [ Cadê o link ]
│[⌁] ${prefixobot}Mediafire [ Cadê o link ]
│[⌁] ${prefixobot}Soundcloud [ Cadê o link ]
│┗━───•
│
│ [ *Stickers* ]
│┏━───•
│[⌁] ${prefixobot}Exif [ Tag de figurinha é by dono ]
│[⌁] ${prefixobot}Qc [ Mensagem desejada ]
│[⌁] ${prefixobot}Emoji [ Tag de figurinha ]
│[⌁] ${prefixobot}Sticker [ Tag de figurinha ]
│[⌁] ${prefixobot}Rename [ Tag de figurinha txt ]
│[⌁] ${prefixobot}Figuimg [ Tag de figurinha do foto ]
│┗━───•
┗━────[ ∅ ]────━┛
`
}

//Grupo
exports.menugp = (prefixobot, hr, pushname, NomeDoBot) => {
return `
┏━────[ ∅ ]────━┓
│ [ *Informações* ]
│┏━───•
│[⌁] Nome: ${pushname}
│[⌁] Hora: ${hr}
│[⌁] Prefixo: [ ${prefixobot} ]
│[⌁] Bot: ${NomeDoBot}
│┗━───•
│
│ [ *Configurar do grupo* ]
│┏━───•
│[⌁] ${prefixobot}Grupo [ A | F ]
│[⌁] ${prefixobot}Abrir-gp [ 1 segundo ]
│[⌁] ${prefixobot}Fechar-gp [ 5 segundo ]
│[⌁] ${prefixobot}Set-desc [ Texto do descrição ]
│[⌁] ${prefixobot}Set-nome [ Texto do gp ]
│┗━───•
│
│ [ *Mensagens do bot pv* ]
│┏━───•
│[⌁] ${prefixobot}Antipv_on 
│[⌁] ${prefixobot}Antipv_off 
│[⌁] ${prefixobot}Antipv [ 1 | 0 ]
│┗━───•
│
│ [ *Dono* ]
│┏━───•
│[⌁] ${prefixobot}Addprem [ Número ]
│[⌁] ${prefixobot}Delprem [ Número ]
│[⌁] ${prefixobot}Reviver [ Tag de msg  ]
│[⌁] ${prefixobot}Bangp [ Msg on ]
│[⌁] ${prefixobot}Unbangp [ Msg off ]
│[⌁] ${prefixobot}Seradm [ Promover ]
│[⌁] ${prefixobot}Sermembro [ Rebaixar ]
│┗━───•
│
│ [ *Ativações* ]
│┏━───•
│[⌁] ${prefixobot}Antidivu [ 1 | 0 ]
│[⌁] ${prefixobot}Antilink [ 1 | 0 ]
│[⌁] ${prefixobot}Antifake [ 1 | 0 ]
│[⌁] ${prefixobot}Bemvindo [ 1 | 0 ]
│[⌁] ${prefixobot}Bemvindo2 [ 1 | 0 ]
│[⌁] ${prefixobot}Modobrincadeira [ 1 | 0 ]
│┗━───•
│
│ [ *Administrativo* ]
│┏━───•
│[⌁] ${prefixobot}Add [ Número ]
│[⌁] ${prefixobot}Link-gp [ Grupo o link ]
│[⌁] ${prefixobot}Link-pv [ Tag ]
│[⌁] ${prefixobot}Limpar [ Limpeza do grupo ]
│[⌁] ${prefixobot}Hidetag [ Texto ]
│[⌁] ${prefixobot}Mute [ Tag ]
│[⌁] ${prefixobot}Delmute [ Tag ]
│[⌁] ${prefixobot}Delrm [ Número ]
│[⌁] ${prefixobot}Listanegra [ Número ]
│[⌁] ${prefixobot}Promover [ Tag ]
│[⌁] ${prefixobot}Rebaixar [ Tag ]
│┗━───•
┗━────[ ∅ ]────━┛
`
}

//Grupo
exports.menubrincadeiras = (prefixobot, hr, pushname, NomeDoBot) => {
return `
┏━────[ ∅ ]────━┓
│ [ *Informações* ]
│┏━───•
│[⌁] Nome: ${pushname}
│[⌁] Hora: ${hr}
│[⌁] Prefixo: [ ${prefixobot} ]
│[⌁] Bot: ${NomeDoBot}
│┗━───•
│
│ [ *Jogos* ]
│┏━───•
│[⌁] ${prefixobot}Batalha
│[⌁] ${prefixobot}Cassino 
│[⌁] ${prefixobot}Resetforca 
│[⌁] ${prefixobot}Jogodaforca
│[⌁] ${prefixobot}Dado
│┗━───•
│
│ [ *Jogos | Saldo* ]
│┏━───•
│[⌁] ${prefixobot}Apostar [ BotCoin Calculadora ]
│[⌁] ${prefixobot}Vercarteira [ Seus BotCoin ]
│[⌁] ${prefixobot}Transferir [ Presente BotCoin ]
│[⌁] ${prefixobot}Minerar [ Trabalho ]
│[⌁] ${prefixobot}Saldo [ Seu BotCoin atualmente ]
│┗━───•
│
│ [ *Porcentagem | Brincadeira* ]
│┏━───•
│[⌁] ${prefixobot}Gay [ Tag ]
│[⌁] ${prefixobot}Feio [ Tag ]
│[⌁] ${prefixobot}Lixo [ Tag ]
│[⌁] ${prefixobot}Gado [ Tag ]
│[⌁] ${prefixobot}Burro [ Tag ]
│[⌁] ${prefixobot}Gordo [ Tag ]
│[⌁] ${prefixobot}Pobre [ Tag ]
│[⌁] ${prefixobot}Bonito [ Tag ]
│[⌁] ${prefixobot}Macaco [ Tag ]
│[⌁] ${prefixobot}Gostoso [ Tag ]
│[⌁] ${prefixobot}Gostosa [ Tag ]
│┗━───•
┗━────[ ∅ ]────━┛
`
}

exports.logos = (prefixobot, hr, pushname, NomeDoBot) => {
return `
┏━────[ ∅ ]────━┓
│ [ *Informações* ]
│┏━───•
│[⌁] Nome: ${pushname}
│[⌁] Hora: ${hr}
│[⌁] Prefixo: [ ${prefixobot} ]
│[⌁] Bot: ${NomeDoBot}
│┗━───•
│
│ [ *Maker* ]
│┏━───•
│[⌁] ${prefixobot}Sonic [ Imagem o texto ]
│[⌁] ${prefixobot}Sonic2 [ Imagem o texto ]
│[⌁] ${prefixobot}Homem [ Imagem o texto ]
│[⌁] ${prefixobot}Mulher [ Imagem o texto ]
│[⌁] ${prefixobot}Itachi [ Imagem o texto ]
│[⌁] ${prefixobot}Izuku [ Imagem o texto ]
│[⌁] ${prefixobot}Inosuke [ Imagem o texto ]
│[⌁] ${prefixobot}Re-zero [ Imagem o texto ]
│[⌁] ${prefixobot}Satoru [ Imagem o texto ]
│[⌁] ${prefixobot}Shoto [ Imagem o texto ]
│[⌁] ${prefixobot}Shoto2 [ Imagem o texto ]
│[⌁] ${prefixobot}Mikey [ Imagem o texto ]
│[⌁] ${prefixobot}Kakashi [ Imagem o texto ]
│[⌁] ${prefixobot}Komi [ Imagem o texto ]
│┗━───•
┗━────[ ∅ ]────━┛
`
}

exports.animes = (prefixobot, hr, pushname, NomeDoBot) => {
return `
┏━────[ ∅ ]────━┓
│ [ *Informações* ]
│┏━───•
│[⌁] Nome: ${pushname}
│[⌁] Hora: ${hr}
│[⌁] Prefixo: [ ${prefixobot} ]
│[⌁] Bot: ${NomeDoBot}
│┗━───•
│
│ [ *Wallpaper HD | Edit anime* ]
│┏━───•
│[⌁] ${prefixobot}Waifu [ Imagem ]
│[⌁] ${prefixobot}Wallpaper [ Imagem ]
│[⌁] ${prefixobot}Metadinha [ Imagem 2 ]
│[⌁] ${prefixobot}editanime [ Editor do vídeo de animes ]
│┗━───•
│
│ [ *NsFw* ]
│┏━───•
│[⌁] ${prefixobot}Hentai [ Imagem ]
│[⌁] ${prefixobot}Hentaistube [ Cadê o nome ]
│[⌁] ${prefixobot}Assistitht [ Cadê o nome ]
│┗━───•
┗━────[ ∅ ]────━┛
`
}

exports.dptr = (pushname, groupName, sender, mek) => {
return `
┏━────[ ∅ ]────━┓
│ [ *Perfil* ]
│┏━───•
│[⌁] Nome: ${pushname}
│[⌁] Número: +${sender.split("@")[0]}
│┗━───•
┗━────[ ∅ ]────━┛
`
}

exports.pvfala = (banChats) => {
return `infelizmente não é permitido usar a bot no pv entre no nosso grupo:\n\nhttps://chat.whatsapp.com/IwMkpknwdzf2lOUAr4BqSp`
}

exports.bv = (anu) => {
return `Olá, @${anu.participants[0].split("@")[0]} seja bem-vindo(a) ao grupo! estou tão feliz que você está aqui. fique à vontade para compartilhar suas ideias, fazer perguntas e conversar com todos nós. vamos tornar este grupo ainda mais divertido e interessante! 🐇`
}

exports.bv2 = (anu) => {
return `Adeus, @${anu.participants[0].split("@")[0]} Vamos sentir saudades de você aqui! desejamos tudo de bom e muito sucesso para você! boa sorte!`
}

exports.registrou = (registro) => {
return `
┏━────[ ∅ ]────━┓
│ [ *Registro* ]
│┏━───•
│[⌁] Nome: ${registro[s].nome}
│[⌁] Idade: ${registro[s].idade}
│[⌁] Grupo: ${registro[s].feito}
│[⌁] Data: ${registro[s].data}
│[⌁] Hora: ${registro[s].hora}
│┗━───•
┗━────[ ∅ ]────━┛
`
}

exports.pinng = (NomeDoBot, prefixobot, dono, NickDono, os, r, kyun, uptime, formatp, process) => {
return `
┏━────[ ∅ ]────━┓
│ [ *Informações bot* ]
│┏━───•
│[⌁] Prefix do bot: [ ${prefixobot} ]
│[⌁] Nome do dono: ${NickDono}
│[⌁] Número do dono: +${dono}
│[⌁] Ping do bot: ${String(r.toFixed(3))}
│[⌁] Tempo ativo: 
│[⌁] ${kyun(uptime)}
│[⌁] Memó́ria usada: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB | ${Math.round(require('os').totalmem / 1024 / 1024)} MB
│[⌁] Plataforma: ${os.platform()}
│[⌁] Tipo de sistema: ${os.type()}
│[⌁] Arquitetura do sistema: ${os.arch()}
│[⌁] Hosting em: ${os.hostname()}
│[⌁] Ram usada: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
│┗━───•
┗━────[ ∅ ]────━┛
`
}

exports.cassino = (cassino11, cassino22, cassino33, cassino44, cassino55, cassino66, cassino77, cassino88, cassino99, pushname, sender) => {
return `
┏━────[ ∅ ]────━┓
│ [ *Usuário* ]
│┏━───•
│[⌁] Nome: ${pushname}
│[⌁] Número: +${sender.split("@")[0]}
│┗━───•
│
│ [ *Cassino* ]
│┏━───•
│[⌁]➧ ${cassino11} │ ${cassino22} │ ${cassino33}
│[⌁]➧ ${cassino44} │ ${cassino55} │ ${cassino66} 
│[⌁]➧ ${cassino77} │ ${cassino88} │ ${cassino99}		  				    
│┗━───•
┗━────[ ∅ ]────━┛
`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Alterações salvas - '${__filename}'`))
delete require.cache[file]
require(file)
})