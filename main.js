const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()

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
const Meme = require('./comandos/meme.js')
const Translate = require('./comandos/translate.js')
const Trump = require('./comandos/tronaldtrump.js')
const Love = require('./comandos/lovecalculator.js')
const Aula = require('./comandos/aula.js')


const ChangePage = require('./comandos/functions/changepage.js')

let CommandMsgListId
let CommandListIsonPage = 1;
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

        CommandListIsonPage = 1;
        message.channel.send(Comandos(CommandListIsonPage)).then(sentMessage => {

            sentMessage.react('⬅️');
            sentMessage.react('➡️');
            CommandMsgListId = sentMessage.id
            CommandListIsonPage = 1;
            Message = message;
            MsgCommandSent = sentMessage;

        });

    }
    if (command === 'info') Info(message.mentions.users.first(), message);

    if (command === 'bhask') Bhask(argvs[0], argvs[1], argvs[2], argvs.length, message.author, message);

    if (command === 'cafune') Cafune(message.author, message.mentions.users.first(), message);

    if (command === 'slap') Slap(message.mentions.users.first(), message.author, message);

    if (command === "emais") Emais(message.mentions.users.array()[0], message.mentions.users.array()[1], argvs[2], message);

    if (command === "x1") X1(message.mentions.users.first(), message);

    if (command === 'clear') Clear(message, argvs);

    if (command === 'guess') Guess(message);

    if (command === 'meme') Meme(message, argvs)

    if (command === 'translate') Translate(message, argvs)

    if (command === 'tronaldtrump') Trump(message);

    if (command === 'howlove') Love(message, message.mentions.users.array()[0], message.mentions.users.array()[1]);

    if (command === 'aula') Aula(message);

});
client.login(process.env.DISCORD_TOKEN);

// Aqui espera a reação do usuário...

client.on("messageReactionAdd", async(reaction, user, message) => {

    // Vendo se a reação é parcial...

    if (reaction.message.partial) await reaction.message.fetch();


    // Se o usuário for um bot, só ignora, retorna...

    if (user.bot) return


    // Se não for o bot, vamos ver se ele reagiu na mensagem da lista de comandos...

    if (reaction.message.id === CommandMsgListId) {
        reaction.users.remove(user.id);
        if (reaction.emoji.name === '⬅️' && CommandListIsonPage > 1) {

            CommandListIsonPage--
            ChangePage(CommandListIsonPage, MsgCommandSent)
            return

        }
        if (reaction.emoji.name === '➡️' && CommandListIsonPage < 3) {

            CommandListIsonPage++
            ChangePage(CommandListIsonPage, MsgCommandSent)
            return
        }
    }
});