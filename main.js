const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');

const prefix = '?';

function getUserFromMention(mention) {
    if (!mention) return;

    if (mention.startsWith('<@') && mention.endsWith('>')) {
        mention = mention.slice(2, -1);

        if (mention.startsWith('!')) {
            mention = mention.slice(1);
        }


        return client.users.cache.get(mention);

    }
}


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const argvs = message.content.replace(prefix, "").split(" ");
    const command = argvs[0].toLocaleLowerCase();

    if (command === 'comandos') {
        const botimglink = 'https://static.wikia.nocookie.net/clubpenguin/images/e/e5/Tusk_Evil.png/revision/latest/scale-to-width-down/856?cb=20130523222135';
        const Comandsembed = new Discord.MessageEmbed()
            .setTitle(`Olá , está é minha lista de comandos:`)
            .addField('+info', value = 'Veja as informações de uma pessoa e seu imagem de perfil, use +info @pessoa.', inline = false)
            .setColor('#00FBFC')
            .setImage(botimglink);

        message.channel.send(Comandsembed);

    }else if (command === 'info') {

    var mencion = message.content.slice(6);
    if (!mencion) {

        return message.channel.send("Mencione uma pessoa corretamente, seu cabaço!");

    }
    var mentionid = getUserFromMention(mencion);
    const userinfoembed = new Discord.MessageEmbed()
        .setTitle(`Informações de ${mentionid.username}`)
        .addField('Username', value = `${mentionid.username + '#' + mentionid.discriminator}`, inline = true)
        .addField('ID', value = `${mentionid.id}`, inline = true)
        .setColor('#00FBFC')
        .setImage(mentionid.displayAvatarURL({ dynamic: true }));

    message.channel.send(userinfoembed);



}
});

client.login('ODI1MDkwMTU1MDUxMjIxMDMy.YF43Fg.JSccCviZDJ492dbodu9kS5BIqmA');