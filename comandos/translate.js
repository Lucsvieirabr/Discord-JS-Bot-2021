const translate = require('@iamtraction/google-translate');
const Discord = require('discord.js');

async function TranslateIt(message, argvs) {
    
    const MessageToTranslate = argvs.join(' ')
    if(!MessageToTranslate){
         
        return message.channel.send('**Insira um texto correto para eu traduzir !!!**')

    }
    let MessageTranslated = await translate(MessageToTranslate, {to: 'pt'})
    
    if(MessageTranslated.text === MessageToTranslate ){

        return message.channel.send('**Moleque, Você digitou um número ou caractere, quer que eu traduza isso? tá brincando né? Digita certo na próxima vez !!**')


    }
    message.channel.send(`${message.author}, A tradução da sua mensagem é: **${MessageTranslated.text}**`);

}

module.exports = TranslateIt;
