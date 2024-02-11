//// BASE FEITA POR BRUCE FANNAROWS, CONEXAO ETC.
/// KIRITO: ADD COMANDOS ETC CONSTS E ALGIMAS PASTAS NAO ASSUMO TODOS OS CREDITOS!!!

// obrigado por utilizar aysha  base, deixa os creditos manin


////// CONEXAO DO BAYLLES RSRS
const fs = require('fs');
const LigaBase = require("./files/auth.js")


// COMEÇO DAS PUXADAS DO MENU
const { menu } = require("./menu/menu.js")
const { menu2 } = require("./menu/menu.js")
const { menu3 } = require("./menu/menu.js")
/// FIM PUXADAS MENUS

/// const audios
const { getBuffer, fetchJson, getGroupAdmins, getRandom, getExtension} = require('./files/myfunc.js'); 

var { imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, beijocmd, chutecmd, tapacmd, rnkgay, rnkgado, rnkcorno, rnkgostoso, rnkgostosa, rnknazista, rnkotaku, rnkpau } = require("./files/links_ay.json");

const { sortear } = require('./files/message.js'); 


const { 
color, 
bgcolor 
} = require('./files/color')

const speed = require('performance-now')
///fim

/// consts de adm e grupos e donos


/// FIM ADMS E DONOS GRUPOS

const settings = JSON.parse(fs.readFileSync('./impact.json'));

var { prefixo, NomeDoDono, NumeroDoDonoA, NomeDobot, NumeroDoBot} = settings




async function LigaBot() {
let Ay = await LigaBase()

Ay.ev.on('messages.upsert', async m => {

const mek = m.messages[0]
if(!mek.key.fromMe);
if(!mek.message) return; 
if(!'status@broadcast') return;
const type = Object.keys(mek.message)[0]

const body = 
(type === 'conversation' && mek.message.conversation.startsWith(prefixo)) ? mek.message.conversation:
(type === 'imageMessage') && mek.message[type].caption.startsWith(prefixo) ? mek.message[type].caption: 
(type === 'videoMessage') && mek.message[type].caption.startsWith(prefixo) ? mek.message[type].caption: 
(type === 'extendedTextMessage') && mek.message[type].text.startsWith(prefixo) ? mek.message[type].text: ''

const budy =
(type === 'conversation') ? mek.message.conversation: 
(type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text: ''
const from = mek.key.remoteJid 
const isCmd = body.startsWith(prefixo)
const isGroup = from.endsWith("@g.us")
const sender = isGroup ? mek.key.participant: from
const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const pushName = mek.pushName ? mek.pushName: ""
const groupMetadata = isGroup ? await Ay.groupMetadata(from): ""
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)

const NumeroDoBot = await Ay.user.id.split(':')[0]+'@s.whatsapp.net';
const NomeGrupo = m.isGroup ? groupMetadata.subject : ''

const participants = m.isGroup ? await groupMetadata.participants : ''
 
const participantes = m.isGroup ? await groupMetadata.participants : ''

const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
 
const PrecisaSerAdm = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''

const groupNumeroDoDonoA = m.isGroup ? groupMetadata.NumeroDoDonoA : ''
 
const GrupoDoNumeroDoDono = m.isGroup ? groupMetadata.NumeroDoDonoA : ''

const isBotAdmins = m.isGroup ? groupAdmins.includes(NumeroDoBot) : false

const BotPrecisaSerAdm = m.isGroup ? groupAdmins.includes(NumeroDoBot) : false

const isBotgroupAdmins = m.isGroup ? groupAdmins.includes(NumeroDoBot) : false

const isgroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

const VcPrecisaSerAdm = m.isGroup ? groupAdmins.includes(m.sender) : false
 
const groupDesc = m.isGroup ? groupMetadata.desc : ''
 
const DescricaoDoGrupo = m.isGroup ? groupMetadata.desc : ''
 
const groupMembers = m.isGroup ? groupMetadata.participants : ''
 
const MembrosDoGrupo = m.isGroup ? groupMetadata.participants : ''

const groupName = isGroup  ? groupMetadata.subject: ""
const args = body.trim().split(/ +/).splice(1)
const q = args.join(' ')

// FUNÇÕES DE MARCAÇÕES ESSENCIAL \\

const menc_prt = mek.message?.extendedTextMessage?.contextInfo?.participant

const menc_jid = args?.join(" ").replace("@", "") + "@s.whatsapp.net"

const menc_jid2 = mek.message?.extendedTextMessage?.contextInfo?.mentionedJid

const sender_ou_n = q.includes("@") ? menc_jid : sender

const mrc_ou_numero = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_os2 = q.includes("@") ? menc_jid : menc_prt 

const marc_tds = q.includes("@") ? menc_jid : q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 

const menc_prt_nmr = q.length > 12 ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt

const owner = `${NumeroDoDonoA}@s.whatsapp.net`
const isdono = owner.includes(sender)


////////////////////////////////////////////
const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null 
Ay.readMessages([mek.key])
const enviar = (brc) => {Ay.sendMessage(from,{text: brc},{quoted:mek})}
const mentions = (teks, memberr, id) => {

(id == null || id == undefined || id == false) ? Ay.sendMessage(from, {text: teks.trim(), mentions: memberr}) : Ay.sendMessage(from, {text: teks.trim(), mentions: memberr})

}
const reply = (texto) => {

Ay.sendMessage(from, { text: texto }, {quoted: mek}).catch(e => {

console.log(e)
})
}


if(!isGroup && isCmd) console.log(`
${(`Comando no Privado`)}
${(`Comando :`)} ${comando}
${(`Nome :`)} ${pushName}`)

if(isGroup && isCmd)
console.log(`
${(`Comando no Grupo`)}
${(`Grupo︎ :`)} ${groupName}
${(`Comando︎ :`)} ${comando}
${(`Nome :`)} ${pushName}`)

if(!isCmd && !isGroup)
console.log(`
${(`Mensagem Privada`)}
${(`Mensagem :`)} ${budy}
${(`Nome :`)} ${pushName}`)

if(!isCmd && isGroup) 
console.log(`
${(`Mensagem Grupo`)}
${(`Grupo :`)} ${groupName}
${(`Nome :`)} ${pushName}
${(`Mensagem :`)} ${budy}`)

try {
switch(comando) {
  
  case 'menu': {
///  if (!isRegistro) return enviar(resposta.Supremacyrg);
    async function carregamentomenu() {
        const carregamentomenu = [
            " ʟᴏᴀᴅɪɴɢ\n《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
            " ʟᴏᴀᴅɪɴɢ\n《 ████▒▒▒▒▒▒▒▒》30%",
            " ʟᴏᴀᴅɪɴɢ\n《 ███████▒▒▒▒▒》50%",
            " ʟᴏᴀᴅɪɴɢ\n《 ██████████▒▒》80%",
            " ʟᴏᴀᴅɪɴɢ\n《 ████████████》100%",
            "_CONCLUÍDO[✓]_"
        ];
      
        let { key } = await Ay.sendMessage(from, { text: 'Carregando...' });

        for (let i = 0; i < carregamentomenu.length; i++) {
            await Ay.sendMessage(from, { text: carregamentomenu[i], edit: key });
        }

        const imagemmenu = 'https://telegra.ph/file/d015c9bd9accd4ac98bae.jpg';
        const titulomenu = '𝐌𝐞𝐧𝐮 🍷 ➠[𝗠]';
        const urlmenu = 'https://chat.whatsapp.com/BUP4VsIRFOR6OkPiO2NgSG'; // Substitua pelo link desejado
        const menu3 = {
            image: { url: imagemmenu },
            caption: menu(pushName, prefixo),
            contextmek: {
                externalAdenviar: {
                    title: titulomenu,
  
                    showAdAttribution: true,
                    thumbnail: await getBuffer(imagemmenu),
                    mediaType: 2,
                    sourceUrl: urlmenu
                }
            }
        };

        await Ay.sendMessage(from, menu3);
    }

    carregamentomenu();
    break;
}

    case 'menugame': {
///  if (!isRegistro) return enviar(resposta.Supremacyrg);
    async function carregamentomenu() {
        const carregamentomenu = [
            " ʟᴏᴀᴅɪɴɢ\n《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
            " ʟᴏᴀᴅɪɴɢ\n《 ████▒▒▒▒▒▒▒▒》30%",
            " ʟᴏᴀᴅɪɴɢ\n《 ███████▒▒▒▒▒》50%",
            " ʟᴏᴀᴅɪɴɢ\n《 ██████████▒▒》80%",
            " ʟᴏᴀᴅɪɴɢ\n《 ████████████》100%",
            "_CONCLUÍDO[✓]_"
        ];
      
        let { key } = await Ay.sendMessage(from, { text: 'AYSHA-BASE...' });

        for (let i = 0; i < carregamentomenu.length; i++) {
            await Ay.sendMessage(from, { text: carregamentomenu[i], edit: key });
        }

        const imagemmenu = 'https://telegra.ph/file/d015c9bd9accd4ac98bae.jpg';
        const titulomenu = '𝐌𝐞𝐧𝐮 🍷 ➠[𝗠]';
        const urlmenu = 'https://chat.whatsapp.com/BUP4VsIRFOR6OkPiO2NgSG'; // Substitua pelo link desejado
        const menu31 = {
            image: { url: imagemmenu },
            caption: menu2(pushName, prefixo),
            contextmek: {
                externalAdenviar: {
                    title: titulomenu,
  
                    showAdAttribution: true,
                    thumbnail: await getBuffer(imagemmenu),
                    mediaType: 2,
                    sourceUrl: urlmenu
                }
            }
        };

        await Ay.sendMessage(from, menu31);
    }

    carregamentomenu();
    break;
}

case 'menudono': {
///  if (!isRegistro) return enviar(resposta.Supremacyrg);
    async function carregamentomenu() {
        const carregamentomenu = [
            " ʟᴏᴀᴅɪɴɢ\n《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
            " ʟᴏᴀᴅɪɴɢ\n《 ████▒▒▒▒▒▒▒▒》30%",
            " ʟᴏᴀᴅɪɴɢ\n《 ███████▒▒▒▒▒》50%",
            " ʟᴏᴀᴅɪɴɢ\n《 ██████████▒▒》80%",
            " ʟᴏᴀᴅɪɴɢ\n《 ████████████》100%",
            "_CONCLUÍDO[✓]_"
        ];
      
        let { key } = await Ay.sendMessage(from, { text: 'Carregando...' });

        for (let i = 0; i < carregamentomenu.length; i++) {
            await Ay.sendMessage(from, { text: carregamentomenu[i], edit: key });
        }

        const imagemmenu = 'https://telegra.ph/file/d015c9bd9accd4ac98bae.jpg';
        const titulomenu = '𝐌𝐞𝐧𝐮 🍷 ➠[𝗠]';
        const urlmenu = 'https://chat.whatsapp.com/BUP4VsIRFOR6OkPiO2NgSG'; // Substitua pelo link desejado
        const menu76 = {
            image: { url: imagemmenu },
            caption: menu3(prefixo, pushName),
            contextmek: {
                externalAdenviar: {
                    title: titulomenu,
  
                    showAdAttribution: true,
                    thumbnail: await getBuffer(imagemmenu),
                    mediaType: 2,
                    sourceUrl: urlmenu
                }
            }
        };

        await Ay.sendMessage(from, menu76);
    }

    carregamentomenu();
    break;
}





///// EXTRAS
case 'chat': {
Ay.sendMessage(
from,
{image: fs.readFileSync('./menu/logo.png'), 
caption: (`

🄿🄴🅁🄼🄸🅃🄸🄽🄳🄾
𖥨ํ∘̥⃟⸽⃟☕⎊ ʟɪɴᴋs_
𖥨ํ∘̥⃟⸽⃟☕⎊ ᴠɪᴅᴇᴏ_
𖥨ํ∘̥⃟⸽⃟☕⎊ ᴍᴜsɪᴄᴀ_
𖥨ํ∘̥⃟⸽⃟☕⎊ sᴛɪᴄᴋᴇʀ_
𖥨ํ∘̥⃟⸽⃟☕⎊ ɪᴍᴀɢᴇᴍ_
𖥨ํ∘̥⃟⸽⃟☕⎊ ᴛᴜᴛᴏʀɪᴀʟ_
𖥨ํ∘̥⃟⸽⃟☕⎊ ᴀᴘʟɪᴄᴀᴛɪᴠᴏ_
🄿🅁🄾🄸🄱🄸🄳🄾
𖥨ํ∘̥⃟⸽⃟📛㋡ 𝚉𝙴-𝚙𝚟_
𖥨ํ∘̥⃟⸽⃟📛㋡ 𝚏𝚛𝚊𝚞𝚍_
𖥨ํ∘̥⃟⸽⃟📛㋡ 𝚟𝚎𝚗𝚍𝚊𝚜_
𖥨ํ∘̥⃟⸽⃟📛㋡ 𝚗⁰_𝚏𝚊𝚔𝚎_
𖥨ํ∘̥⃟⸽⃟📛㋡ ɪɴᴀᴛɪᴠᴏs_
𖥨ํ∘̥⃟⸽⃟📛㋡ 𝙽𝙾ᴛ-𝚏𝚊𝚔𝚎_
𖥨ํ∘̥⃟⸽⃟📛㋡ 𝚉𝙾𝙾𝙵𝙸𝙻𝙸𝙰_
𖥨ํ∘̥⃟⸽⃟📛㋡ 𝙿𝙴𝙳𝙾𝙵𝙸𝙻𝙸𝙰_
𖥨ํ∘̥⃟⸽⃟📛㋡ 𝙳𝙸𝚂𝙲𝚄𝚂𝚂𝙾𝙴𝚂_
𖥨ํ∘̥⃟⸽⃟📛㋡ 𝙿𝙾𝚁𝙽𝙾𝙶𝚁𝙰𝙵𝙸𝙰_
☢𝚜𝚎𝚓𝚊 𝚝𝚞𝚍𝚘𝚜 𝚋𝚎𝚖-𝚟𝚒𝚗𝚍𝚘(𝚊)

███̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑̑https://linkfly.to/AYSHA-DELUX`)
},
{quoted: mek}
)
}

break



/// EXTRAS


case 'play2':
case 'play': //KIRITO
  enviar('*Espere um pouco, já estou enviando seu áudio*');
  try {
    const response = await fetchJson(`https://yumeko-api.onrender.com/api/dl/play2?nome=${q}&apikey=VsptEvODWO`);
    if (response && response.resultado && response.resultado.resultado) {
      const vsc = response.resultado.resultado;
      Ay.sendMessage(from, { audio: { url: vsc }, mimetype: 'audio/mp4' }, { quoted: mek });
    } else {
      enviar('Não foi possível encontrar o áudio. Por favor, tente novamente mais tarde.');
    }
  } catch (error) {
    enviar('Ocorreu um erro ao processar sua solicitação de áudio. Por favor, tente novamente mais tarde.');
    console.error('Erro ao obter áudio:', error);
  }
  break;
  
  
  

case 'audio': case 'ytaudio': //KIRIRO
enviar('*Espere um pouco ja estou mandando seu audio*')
bla = await fetchJson(`https://yumeko-api.onrender.com/api/dl/play2?nome=${q}&apikey=VsptEvODWO`) 
vsc = bla.resultado.resultado
Ay.sendMessage(from, { audio: { url: vsc }, mimetype: 'audio/mp4'}, {quoted: mek})
break;
//// COMANDOS ADMS
case 'ban': // BY ALIZINDEV BY ALIZIN DEV 

case 'kick':// BY ALIZINDEV BY ALIZIN DEV 

case 'b':// BY ALIZINDEV BY ALIZIN DEV 
case 'bani':// BY ALIZINDEV BY ALIZIN DEV 
case 'banir':// BY ALIZINDEV BY ALIZIN DEV 
{
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Responda a mensagem ou marque as pessoas que você quer remover do grupo')
if(mek.message.extendedTextMessage.contextmek.participant !== null && mek.message.extendedTextMessage.contextmek.participant != undefined && mek.message.extendedTextMessage.contextmek.participant !== "") {
mentioned = mek.message.extendedTextMessage.contextmek.mentionedJid[0] ? mek.message.extendedTextMessage.contextmek.mentionedJid[0] : mek.message.extendedTextMessage.contextmek.participant
if(m.sender.includes(mentioned)) return enviar("😑")
if(NumeroDoBot.includes(mentioned)) return enviar('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(NumeroDoDono.includes(mentioned)) return enviar('Não posso remover meu dono 😑')
let responseb = await Ay.groupParticipantsUpdate(from, [mentioned], 'remove')
if (responseb[0].status === "200") Ay.sendMessage(from, {text: `@${mentioned.split("@")[0]} foi removido do grupo com sucesso.️`, mentions: [mentioned, m.sender], contextmek:{forwardingScore:999, isForwarded:true}})
else if (responseb[0].status === "406") Ay.sendMessage(from, {text: `@${mentioned.split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned, m.sender], contextmek:{forwardingScore:999, isForwarded:true}})
else if (responseb[0].status === "404") Ay.sendMessage(from, {text: `@${mentioned.split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned, m.sender], contextmek:{forwardingScore:999, isForwarded:true}})
else Ay.sendMessage(from, {text: `Hmm parece que deu erro️`, mentions: [m.sender], contextmek:{forwardingScore:999, isForwarded:true}})
} else if (mek.message.extendedTextMessage.contextmek.mentionedJid != null && mek.message.extendedTextMessage.contextmek.mentionedJid != undefined) {
mentioned = mek.message.extendedTextMessage.contextmek.mentionedJid
if(mentioned.includes(m.sender)) return enviar("😑")
if(mentioned.includes(NumeroDoDonoA)) return enviar("Não pode remover meu dono 😠")
if(mentioned.includes(NumeroDoBot)) return enviar("😑")
if(mentioned.length > 1) {
if(mentioned.length > groupMembers.length || mentioned.length === groupMembers.length || mentioned.length > groupMembers.length - 3) return enviar(`Vai banir todo mundo mesmo?`)
sexocomrato = 0
for (let banned of mentioned) {
await sleep(100)
let responseb2 = await Ay.groupParticipantsUpdate(from, [banned], 'remove')
if (responseb2[0].status === "200") sexocomrato = sexocomrato + 1
}
Ay.sendMessage(from, {text: `${sexocomrato} participantes removido do grupo`, mentions: [m.sender], contextmek:{forwardingScore:999, isForwarded:true}})
} else {
let responseb3 = await Ay.groupParticipantsUpdate(from, [mentioned[0]], 'remove')
if (responseb3[0].status === "200") Ay.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} foi removido do grupo com sucesso.️`, mentions: [mentioned[0], m.sender], contextmek:{forwardingScore:999, isForwarded:true}})
else if (responseb3[0].status === "406") Ay.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned[0], m.sender], contextmek:{forwardingScore:999, isForwarded:true}})
else if (responseb3[0].status === "404") Ay.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned[0], m.sender], contextmek:{forwardingScore:999, isForwarded:true}})
else Ay.sendMessage(from, {text: `Hmm parece que deu erro️`, mentions: [m.sender], contextmek:{forwardingScore:999, isForwarded:true}})
}
}
}
break


case 'p':

case 'seradm':
  if (!isdono) return enviar(" Só dono pode executar este comando")
if(!isBotAdmins) return reply("preciso ser adminittador do grupo para executar essa função")
  Ay.sendMsg = await Ay.sendMessage(from, {react: {text: `🔱`, key: mek.key}})

mentions(`🔱 bem-vindo mestre, é muito bom ter vc aqui,o senhor ja é um membro superior 🔱`, [sender], true)
Ay.groupParticipantsUpdate(from, [sender], "promote")
break;

case "unblock": case "UNBLOCK":
 if (args.length < 1) return enviar("numb? exemplo: +5500000000")
if(!isdono) return reply(`Hey @${pushName}! 𝘝𝘰𝘤𝘦 𝘕𝘢𝘰 𝘛𝘦𝘮 𝘗𝘦𝘳𝘮𝘪𝘴𝘴𝘢𝘰 𝘗𝘳𝘢 𝘜𝘴𝘢𝘳 𝘌𝘴𝘴𝘦 𝘊𝘰𝘮𝘢𝘯𝘥𝘰!`)
try {
Ay.updateBlockStatus(`${q}@s.whatsapp.net`, "unblock")
reply("o usuario desbloqueado Com Sucesso!")
} catch {
enviar("um erro ocorreu!")
}
break

case "block": case "BLOCK":
if (args.length < 1) return enviar("numb? exemplo: +5500000000")
if(!isdono) return enviar(`você @${pushName}! noa pode usa ess cmd!`)
try {
Ay.updateBlockStatus(`${q}@s.whatsapp.net`, "block")
reply("o usuario bloqueado Com Sucesso!")
} catch {
enviar("um erro ocorreu!")
}
break
case 'entrar':
case 'join': {
if(!isdono) return enviar(`@${pushName}! esse comando e do meu dono pra me participar do seu grupo tem de falar com ele!`)
                if (!q) return enviar( 'Digite link de grupo!')
                enviar('*CERTO MESTRE, IREI ENTRAR NO GRUPO 😙*')
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await Ay.groupAcceptInvite(result) 
            }
            break

case 'promover': 
if(!isdono) return;
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
Ay.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi promovido(a) para adm com sucesso.`, mentions: [menc_os2]})
Ay.groupParticipantsUpdate(from, [menc_os2], "promote")  
break






//// FIM DOS COMANDOS ADMS

//🅱🆁🅸🅽🅲🅰🅳🅴🅸🆁🅰🆂\\\
case 'eudevo':	
					let = body.slice(6)
					var golpe =['sim','não','concerteza sim','claramente','concerteza nao','obiviamente sim','claro,que não','obiviamente não','claro que sim','certeza que sim','melhor não','vsi na fé','sim','não','concerteza sim','claramente','concerteza não','obiviamente sim','claro,que não','obiviamente não','claro que sim','certeza que sim','melhor não','vsi na fé','sim','não','concerteza sim','claramente','concerteza não','obiviamente sim','claro,que não','obiviamente não','claro que sim','certeza que sim','melhor não','vsi na fé','claro,que não','obiviamente não','claro,que não']
					var golpe = golpe[Math.floor(Math.random() * golpe.length)]
					enviar(`Olá ${pushName} Pela minha sabedoria de deusa eu acho que >>>[ ${golpe} ]`)
					break

case 'chance':
  if (!isGroup) return enviar("Ei, amigão, esse comando só pode ser usado em grupo! 😅");

  const rate = body.slice(7);
  const random = Math.floor(Math.random() * 110);
  let papamonha = '';

  if (random >= 1 && random <= 20) {
    papamonha = "*Caraca, que azar! Mas não desanima, não! 😔🍀*";
  } else if (random > 20 && random <= 50) {
    papamonha = "*Eita, isso já é um começo! Bora pra cima! 💪😃*";
  } else if (random > 50 && random <= 100) {
    papamonha = "*Ô, meu chapa, tô na torcida pra você conseguir! 🎉🤞*";
  } else {
    papamonha = "*Vixi, deu ruim! Algo deu errado aí... 🚫❌*";
  }

  enviar(` Olá jogador ${pushName}
  A chance de você conseguir é de: ❰ ${random}%❱
${papamonha}`);
  break;

case 'gado':
case 'nivelgado':

const chifre = ["🐄 ultra extreme gado 🐄",
    "🤴 Gado-Master 🤴",
    "👑 Gado-Rei 👑",
    "🐄 Gado 🐄",
    "🤡 Escravo-ceta 🤡",
    "🙇‍♂️ Escravo-ceta Maximo 🙇‍♂️",
    "🦄 Gacorno? 🦄",
    "🔥 Jogador De Forno Livre<3 🔥",
    "🔮 Mestre Do Frifai<3<3 🔮",
    "🐮 Gado-Manso 🐮",
    "🌾 Gado-Conformado 🌾",
    "🐂 Gado-Incubado 🐂",
    "🌟 Gado Deus 🌟",
    "🎩 Mestre dos Gados 🎩",
    "💔 Topa tudo por buceta 💔",
    "🐮 Gado Comum 🐮",
    "🐄 Mini Gadinho 🐄",
    "🌱 Gado Iniciante 🌱",
    "🔰 Gado Basico 🔰",
    "⚙️ Gado Intermediario ⚙️",
    "💎 Gado Avançado 💎",
    "🌈 Gado Profisional 🌈",
    "🔝 Gado Mestre 🔝",
    "🦌 Gado Chifrudo 🦌",
    "🤏 Corno Conformado 🤏",
    "🦌 Corno HiperChifrudo 🦌",
    "👑 Chifrudo Deus 👑",
    "👑 Mestre dos Chifrudos 👑",
    "🌾 Gado Livre 🌾",
    "💖 Gado Encantador 💖",
    "👑 Gado Supremo 👑",
    "🏡 Gado da Fazenda 🏡",
    "💘 Gado do Amor 💘",
    "💑 Gado Romântico 💑",
    "💗 Gado Apaixonado 💗",
    "🌙 Gado Sonhador 🌙",
    "💚 Gado Fiel 💚",
    "🔒 Gado Determinado 🔒",
    "📈 Gado em Ascensão 📈",
    "🧠 Gado Realista 🧠",
    "💓 Gado de Coração 💓",
    "💡 Gado Inspirador 💡",
    "💪 Gado Conquistador 💪",
    "🌟 Gado Confiante 🌟",
    "😄 Gado Irresistível 😄",
    "😍 Gado Encantador 😍",
    "🥰 Gado Carinhoso 🥰",
    "😎 Gado Charmoso 😎",
    "🤣 Gado Divertido 🤣",
    "😂 Gado Engraçado 😂"];
const gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `EI CORNINHO MANSO, VC É ${gado} 😅`
enviar(hisil)
break;

case 'feio':	
	 if (args.length < 1) return enviar(`marque alguem ${command} `)
					var golpe =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','41','39','1','8','0',]
					var golpe = golpe[Math.floor(Math.random() * golpe.length)]
					enviar(`vamos ver o quanto feio vc é  \n\nSua porcentagem de ${command} é: ${golpe}%\n 🤣😂`)
					break;

case "agua":{

   if (args.length < 1) return enviar(`marque alguem tomar agua💧`)

				let	rate = body.slice(6)
templateMassage = {
  image: {url: "https://telegra.ph/file/736bca101f6c40fd645cb.jpg",
quoted: mek},
caption: `
╔━━き━━━━━━━━━━━━━━╗	
┃O ${pushName}
┃QUER TE LEMBRAR DE  
┃beber agua 💓
╚━━━━━━━━🔱━━━━━━━━╝
`
}
Ay.sendMessage(from, templateMassage)
}
break;

case 'morte':

case 'previsao':

  Ay.sendMsg = await Ay.sendMessage(from, { react: { text: '☠️', key: mek.key } });
  const idades = ["30", "76", "25", "32", "27", "90", "72", "83", "73", "83", "74", "92", "100", "94", "48", "37", "53", "63"];
  const idade = idades[Math.floor(Math.random() * idades.length)];
  const causasMorte = [
    "💀 Causa desconhecida",
    "💔 Doença cardíaca",
    "🚗 Acidente de carro",
    "🩸 Câncer",
    "☠️ Envenenamento",
    "🛩️ Queda de um avião",
    "🌊 Afogamento",
    "🦈 Ataque de tubarão",
    "🔨 Acidente de trabalho",
    "🔪 Assassinato",
    "🔫 Suicídio",
    "💥 Explosão",
    "🌪️ Desastre natural",
    "💊 Overdose de drogas",
    "🔥 Ferimento fatal",
    "⛵ Acidente de barco",
    "🏍️ Acidente de motocicleta",
    "⚡ Eletrocussão",
    "🔥 Combustão espontânea",
    "🚲 Acidente de bicicleta"
  ];
  const causaMorte = causasMorte[Math.floor(Math.random() * causasMorte.length)];
  const morte = `Ei, amiguinho ${pushName}! Segundo os cálculos feitos por Einstein, você vai morrer com ${idade} anos. 😱\n\n${causaMorte}!`;
  enviar(morte);
  break;
case 'milk': {

  if (args.length < 1) return enviar(`Marque alguém para tomar leite. 🍼`);

  let rate = body.slice(6);
  templateMessage = {
    image: { url: "https://telegra.ph/file/2e327e7eb1415ebe056b1.jpg" },
    quoted: mek,
    caption: `
╔━━━━━━🔱━━━━━━━━━━╗	
┃Olá, ${pushName}!
┃LHE CONVIDA PRA TOMAR 
┃UM CAFÉ COM LEITE. 🥛💧
╚━━━━━━━━🔱━━━━━━━━╝
`
  };
  Ay.sendMessage(from, templateMessage);
}
break;
case 'cassino': {

  const emojis = [

    '🍔', '🍟', '🍦', '🌮', '🍹', '🌯', '🍕', '🥤', '🍨', '🍩',
    '🍿', '🍭', '🍗', '🍉', '🍌', '🍇', '🌭', '🍈', '🌽', '🍞'
  ];

  const slot1 = emojis[Math.floor(Math.random() * emojis.length)];
  const slot2 = emojis[Math.floor(Math.random() * emojis.length)];
  const slot3 = emojis[Math.floor(Math.random() * emojis.length)];

  const slotsLine = `${slot1} : ${slot2} : ${slot3} `;

  let winMessage = 'Você perdeu...';
  let moneyDelta = 0;

  if (slot1 === slot2 && slot2 === slot3) {
    winMessage = '🎉 Você ganhou! 🥳';
    moneyDelta = 100; // Valor a ser ganho quando há uma combinação vencedora
  }

  const cassinoMessage = `

╔━🔥🎰🔥 CASSINO 🔥🎰🔥━╗	
        ${slotsLine}
╚━━━━━━━━━━━━━━━━━━━━╝



${winMessage}
  `;

  if (moneyDelta !== 0) {
    userData.money += moneyDelta;
    fs.writeFileSync('./arquivos/grupos/money.json', JSON.stringify(userData));
    enviar(`💰 Parabéns! Você ganhou ${moneyDelta} de dinheiro. 🎉`);
  }

  enviar(cassinoMessage);
}
  break;
  case 'corno':

case 'gay':

if(!isGroup) return enviar('só pode ser usado em grupo, tu e burro zee')
let = budy.slice(7)
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}

zxzz = 
random22 = `${Math.floor(Math.random() * 110)}`
random22 = `${Math.floor(Math.random() * 110)}`
Ay.sendMessage(from, {text: `ೈ፝͜͡⃟ꦿ➮ Pesquisando a ficha de ${comando} :  @${blamention_id.split("@")[0]}, aguarde...\n\n _Você é: ❰ ${random22},${random22}% ❱  ${comando}_ `, mentions: [blamention_id]})
break
  
  case 'gostoso':
if(!isGroup) return reply("só pode utilizar em grupos")
Ay.sendMessage(from, {text:` ❰ Pesquisando a sua ficha de gostoso : @${sender_ou_n.split("@")[0]} aguarde... ❱`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random12 = `${Math.floor(Math.random() * 110)}`
Ay.sendMessage(from, {image: {url: imggostoso}, caption: `O quanto você é gostoso? 😏\n\n「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random12}% ❱ gostoso 😝`, gifPlayback: true, mentions: [sender_ou_n]}, {quoted: mek})
}, 7000)
break 

case 'gostosa':
if(!isGroup) return reply(enviar.msg.grupo)
Ay.sendMessage(from, {text:`❰ Pesquisando a sua ficha de gostosa : @${sender_ou_n.split("@")[0]} aguarde... ❱`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random98 = `${Math.floor(Math.random() * 110)}`
Ay.sendMessage(from, {image: {url: imggostosa}, caption: `O quanto você é gostosa? 😏\n\n「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random98}% ❱ gostosa 😳`, mentions: [sender_ou_n]}, {quoted: mek})
}, 7000)
break

case 'matar':
case 'mata':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer matar, a mensagem ou o @')
Ay.sendMessage(from, {video: {url: matarcmd}, gifPlayback: true, caption: `Você Acabou de matar o(a) @${menc_os2.split('@')[0]} 😈👹`, mentions: [menc_os2]}, {quoted: mek})
break 

case 'sorteionumero':
case 'sorteio':  
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefixo}sorteionumero de 100 R$`)
var numerossrt = sortear[Math.floor(Math.random() * sortear.length)] 
d = []
teks =  `🎉Parabéns ao número do sortudo, por ganhar o sorteio ${q}:\n\n`
for(i = 0; i < 1; i++) {
teks += `🔥፝⃟  ➣ ${numerossrt}\n`
d.push(numerossrt)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'sorteio':
if(!isGroupAdmins) return reply(enviar.msg.adm)
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de 100 R$`)
d = []
teks = `🎉Parabéns, por ganhar o sorteio ${q}:\n\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🔥፝⃟  ➣ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'beijo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer beijar, a mensagem ou o @')
Ay.sendMessage(from, {video: {url: beijocmd}, gifPlayback: true, caption: `Você deu um beijo gostoso na(o) @${menc_os2.split('@')[0]} 😁👉👈❤` , mentions: [menc_os2]}, {quoted: mek})
break

//====================JOGOS=====================
case 'pau':
         
random38 = `${Math.floor(Math.random() * 35)}`
const tamanho = random38
if (tamanho < 13 ) {pp = 'só a fimose'} else if (tamanho == 13 ) {pp = 'passou da média😳'} else if (tamanho == 14 ) {pp = 'passou da média😳'} else if (tamanho == 15 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 16 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 17 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 18 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 19 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 20 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 21 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 22 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 23 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 24 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho > 25 ) {pp = 'vai procurar petróleo com isso?'
}
hasil = `╭═════════════════ ⪩
╰╮ू ፝͜❥⃟🍌𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎 𝐃𝐎 𝐏𝐀𝐔👁⃟ू ፝͜❥
╭┤➢☃️ 「𝘖𝘓𝘈: ${pushName}」
╭┤➢🍆「𝘚𝘌𝘜 𝑃𝐴𝑈 𝘛𝘌𝘔: ${random38}𝘊𝘔
╭┤➢✉️ 「${pp}」
┃╰══ ⪨
╰═════════════════ ⪨`
reply(hasil)
break


case 'chifre':
random2 = `${Math.floor(Math.random() * 35)}`
const tamanho2 = random2
if (tamanho2 < 13 ) {pp = 'muito corno🤟'} else if (tamanho2 == 13 ) {pp = 'meio corno😬'} else if (tamanho2 == 14 ) {pp = 'muito corno😳'} else if (tamanho2 == 15 ) {pp = 'cuidado com o poste'} else if (tamanho2 == 16 ) {pp = 'vai pegar manga com esse chifre?'} else if (tamanho2 == 17 ) {pp = 'eita poha, levou muita galha em😳'} else if (tamanho2 == 18 ) {pp = 'cuidado com os fios de energia😳'} else if (tamanho2 == 19 ) {pp = 'como você aguenta esse peso todo😳'} else if (tamanho2 == 20 ) {pp = 'recorde de maior chifre, parabéns'} else if (tamanho2 == 21 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 == 22 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 == 23 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 == 24 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 > 25 ) {pp = 'vai construir uma torre com isso?'
}
hasil = `╭═════════════════ ⪩
╰╮ू ፝͜❥⃟💡𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎 𝐃𝐎 𝐂𝐇𝐈𝐅𝐑𝐄👁⃟ू ፝͜❥
╭┤➢☃️ 「𝘖𝘓𝘈: ${pushName}」
╭┤➢🤟 「𝘚𝘌𝘜 𝘊𝘏𝘐𝘍𝘙𝘌 𝘛𝘌𝘔: ${random2}𝘊𝘔
╭┤➢✉️ 「${pp}」
┃╰══ ⪨
╰═════════════════ ⪨`
reply(hasil)
break

case 'morte':   
morrer1 = `${Math.floor(Math.random() * 31)}`
morrer2 = `${Math.floor(Math.random() * 9)}`
var ano = ("2")
ano1 = `${Math.floor(Math.random() * 300)}`
morrer = `${morrer1}.${morrer2}.${ano}${ano1}`
gilli = `╭═════════════════ ⪩
╰╮ू ፝͜❥⃟😵𝐃𝐀𝐓𝐀 𝐃𝐀 𝐒𝐔𝐀 𝐌𝐎𝐑𝐓𝐄👁⃟ू ፝͜❥
╭┤➢☃️ 「𝘖𝘓𝘈: ${pushName}」
╭┤➢📆 「𝘋𝘈𝘛𝘈: ${morrer1}/0${morrer2}/${ano}${ano1}
╭┤➢💐 「meus pêsames」
┃╰══ ⪨
╰═════════════════ ⪨`
reply(gilli)
break

case 'metadinha': {
            if (!q) return enviar( 'Digite o título de consulta') 
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
            await    Ay.sendMessage(from, { image: { url: random.male }, caption: `Casal Masculino` }, { quoted: mek })
           await     Ay.sendMessage(from, { image: { url: random.female }, caption: `Casal Feminino` }, { quoted: mek })
}
	    break



//================================================\\


 /// FIM GAMES//
 
 /// COMANDOS ADMS \\\
 case 'ping':// BY KIRITO
if (isgroupAdmins) return enviar("apenas adms pode usar esse comando....")
timestampe = speed();

latensie = speed() - timestampe 
enviar(`Velocidade de resposta aysha-base ${latensie.toFixed(4)} segundos`)
break

}switch(isCmd){
  default:
  if(budy.includes('Prefixo')) {
  enviar(`*aqui esta meu prefixo [ ${prefixo} ]*`);

}

 if(budy.includes(`Aysha`)) {
  enviar(`*AYSHA Olline para o combate rsrs*`);

}
 
  
  
  
  
}}catch(e) {console.log(e); return enviar(e)}})}; LigaBot()