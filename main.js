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

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const argvs = message.content.replace(prefix, "").split(" ");
    const command = argvs.shift().toLocaleLowerCase();

    if (command === 'comandos') {
       
        Comandos(message);

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