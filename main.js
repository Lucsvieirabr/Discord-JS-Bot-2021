const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '?';

const Cafune = require('./comandos/cafune.js')
const Comandos = require('./comandos/comandos.js')
const Info = require('./comandos/info.js')
const Bhask = require('./comandos/bhask.js')
const Slap = require('./comandos/slap.js')
const Emais = require('./comandos/emais.js')
const X1 = require('./comandos/x1.js')
const Clear = require('./comandos/clear.js')
const Guess = require('./comandos/guess.js')
const Forca = require('./comandos/forca.js')
const Meme = require('./comandos/meme.js')
const ChangePage = require('./comandos/functions/changepage.js')

let CommandMsgListId
let CommandListIsonPage = 0;
let Message;
let MsgCommandSent;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const argvs = message.content.replace(prefix, "").split(" ");
    const command = argvs.shift().toLocaleLowerCase();

    if (command === 'comandos') {

        CommandListIsonPage = 0;
        message.channel.send(Comandos(CommandListIsonPage)).then(sentMessage => {

            sentMessage.react('⬅️'); 
            sentMessage.react('➡️');
            CommandMsgListId = sentMessage.id
            CommandListIsonPage = 1;
            Message = message;
            MsgCommandSent = sentMessage;

        }); 
        
    } else if (command === 'info') {

        Info(message.mentions.users.first(), message);

    } else if (command === 'bhask') {

        Bhask(argvs[0], argvs[1], argvs[2], argvs.length, message.author, message);

    } else if (command === 'cafune') {

        Cafune(message.author, message.mentions.users.first(), message);

    } else if (command === 'slap') {

        Slap(message.mentions.users.first(), message.author, message);

    } else if (command === "emais") {

        Emais(message.mentions.users.array()[0],message.mentions.users.array()[1], argvs[2], message);

    } else if (command === "x1") {

        X1(message.mentions.users.first(), message);

    } else if (command === 'clear') {

        Clear(message, argvs);

    } else if (command === 'guess') {
        
        Guess(message);

    } else if (command === 'forca') {

        Forca(message);

    }else if(command === 'meme'){

        Meme(message, argvs)

    }

});
client.login('ODI1MDkwMTU1MDUxMjIxMDMy.YF43Fg.6H4XpBUsX4yxHeUTxwkPMUWjvTU');

// Aqui espera a reação do usuário...

client.on("messageReactionAdd", async (reaction, user, message) => {

    // Vendo se a reação é parcial...

    if (reaction.message.partial){
        await reaction.message.fetch();
    }
    
    // Aqui salvamos o usuário que reagiu...

    let userMarq = `@${user.username}#${user.discriminator}`;

    // Se o usuário for o bot, só ignora, retorna...

    if (userMarq === '@FrozenBot#4607') {
        return;
    } 
    
    // Se não for o bot, vamos ver se ele reagiu na mensagem da lista de comandos...

    if(reaction.message.id === CommandMsgListId){
    
    // Se ele reagiu na imagem, vamos ver qual emoji ele reagiu...
    // Se for pra voltar e ele estiver na página 2, tiramos a sua reação, para ajuar o usuário a reagir novamante se preciso...
    // Após isso, chamamos a função que troca a página, e definimos a página que ele está...
    // Mais informações da função que troca a página, vai na pasta comandos/functions e no arquivo changepage.js...

        if(reaction.emoji.name === '⬅️'){

            if(CommandListIsonPage === 2){

                reaction.users.remove(user.id);
                ChangePage(CommandListIsonPage, '⬅️', MsgCommandSent)
                CommandListIsonPage = 1;

            }else{

                reaction.users.remove(user.id);
                return
            }
            
        // Se a reação for pra ir pra frente '➡️', vêmos a página que ele está...
        // Se estiver na página 1, fazemos o mesmo esquema que expliquei anteriormente para trocar de página...
        // Em todas as partes, se não poder subir ou descer, ele só retorna, e ignora...
        }if(reaction.emoji.name === '➡️'){

            if(CommandListIsonPage === 1){
                
                reaction.users.remove(user.id);
                ChangePage(CommandListIsonPage, '➡️', MsgCommandSent, reaction, user)
                CommandListIsonPage = 2;

            }else{
                reaction.users.remove(user.id);
                return
            }
            
            

        }
    }

});