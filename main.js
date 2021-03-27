const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');

const prefix = '?';

let x1 = '';
let x2 = '';

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

function formbhask(a, b, c){
    
    var delta = (b * b) - 4 * a * c;

    let x1up = -b + (Math.sqrt(delta));
    x1 = parseFloat(x1up / (2 * a));

    let x2up = -b - (Math.sqrt(delta));
    x2 = parseFloat(x2up / (2 * a));

}


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const argvs = message.content.replace(prefix, "").split(" ");
    const command = argvs.shift().toLocaleLowerCase();

    if (command === 'comandos') {
        const botimglink = 'https://static.wikia.nocookie.net/clubpenguin/images/e/e5/Tusk_Evil.png/revision/latest/scale-to-width-down/856?cb=20130523222135';
        const Comandsembed = new Discord.MessageEmbed()
            .setTitle(`Olá , está é minha lista de comandos:`)
            .addField('+info', value = 'Veja as informações de uma pessoa e seu imagem de perfil, use +info @pessoa.', inline = false)
            .addField('+bhask', value = 'Calcule uma equação de segundo grau, use +bhask a b c.', inline = false)
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



}else if(command === 'bhask'){

    if (!argvs.length) {
		return message.channel.send(`Você não colocou todas as três variáveis necessárias, ${message.author}!`);
	}

	formbhask(argvs[0], argvs[1], argvs[2]);
    message.channel.send(`Considerando A = ${argvs[0]} , B = ${argvs[1]}, C = ${argvs[2]} ... X1 = ${x1} e X2 = ${x2}.`)
}
});

client.login('ODI1MDkwMTU1MDUxMjIxMDMy.YF43Fg.JSccCviZDJ492dbodu9kS5BIqmA');