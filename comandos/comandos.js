const Discord = require('discord.js');

function sendcomandos(message){
    
    // Sem segredo, apenas um criando um Embed normal do discord, e depois retornando...
    const botimglink = 'https://static.wikia.nocookie.net/clubpenguin/images/e/e5/Tusk_Evil.png/revision/latest/scale-to-width-down/856?cb=20130523222135';
    let IsOnPage;
    function CheckAndEdit(message, isonpage, emojiname) {
        
        if(emojiname === '⬅️'){
            if(IsOnPage === 1){
                return
            }else if(isonpage === 2){
                message.edit(ComandsembedP1)
            }
        }
        if(emojiname === '➡️'){

            if(IsOnPage === 2){
                return
            }else if(isonpage === 1){
                message.edit(ComandsembedP2)
                IsOnPage = 2;
            }
        }
    }
    const ComandsembedP1 = new Discord.MessageEmbed()
        .setTitle(`Olá , está é minha lista de comandos:`)
        .addField('?info', value = 'Veja as informações de uma pessoa e seu imagem de perfil, use ?info @pessoa.', inline = true)
        .addField('?bhask', value = 'Calcule uma equação de segundo grau, use ?bhask a b c.', inline = true)
        .addField('?cafune', value = 'Faça um cafuné em alguém, use ?cafune @pessoa.', inline = true)
        .addField('?emais', value = 'Quem é mais? use ?mais @pessoa @pessoa maisoque.', inline = true)
        .setColor('#00FBFC')
        .setImage(botimglink);
        message.channel.send(ComandsembedP1);
        IsOnPage = 1;
        message.react('⬅️').then(r => {
            message.react('➡️');
    });
    
    const ComandsembedP2 = new Discord.MessageEmbed()
        .addField('?slap', value = 'De aquele tapa no mongol que ta enchendo o saco,use ?slap e o nome da pessoa, ou marque ela.', inline = false)
        .addField('?x1', value = 'Chame seu amigo para uma trocação franca sem perder a amizade! Use ?x1 @pessoa.', inline = false)
        .addField('?guess', value = 'Tente acertar um número de 0 a 20 que eu escolhi !!', inline = false)
        .addField('?meme', value = 'Use ?meme ou ?meme +Sub Reddit de preferência, para receber um meme aleatório !!', inline = false)
        .setColor('#00FBFC')
        .setImage(botimglink);

        message.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '⬅️' || reaction.emoji.name == '➡️'),
        { max: 1, time: 60000 }).then(collected => {
                if (collected.first().emoji.name == '⬅️') {

                        CheckAndEdit(message, IsOnPage, emoji.name)
                        console.log('ok')
                }
                else

                        CheckAndEdit(message, IsOnPage, emoji.name)
                        console.log('ok')

        }).catch(() => {
                message.reply('Sem reações durante 1 Minuto, impossível trocar de página agora');
        });
}

module.exports = sendcomandos;