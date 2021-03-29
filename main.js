const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');

const { tictactoe } = require('reconlx');

module.exports = {
    name: "tictactoe",
    description : "tic tac toe command",

    async run (bot, message, args){

        const member = message.mentions.members.first()
        if(!member) return message.channel.send('Por favor escolha uma pessoa para jogar contra!');

        new tictactoe({
            
            player_two: member,
            message: message

        })


    }
}
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
            .addField('?info', value = 'Veja as informações de uma pessoa e seu imagem de perfil, use ?info @pessoa.', inline = false)
            .addField('?bhask', value = 'Calcule uma equação de segundo grau, use ?bhask a b c.', inline = false)
            .addField('?cafune', value = 'Faça um cafuné em alguém, use ?cafune @pessoa.', inline = false)
            .addField('?slap', value = 'De aquele tapa no mongol que ta enchendo o saco,use ?slap e o nome da pessoa, ou marque ela.', inline = false)
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

}else if (command === 'cafune') {


        let cafune = ['https://media.giphy.com/media/ARSp9T7wwxNcs/giphy.gif', 'https://media.giphy.com/media/5tmRHwTlHAA9WkVxTU/giphy.gif',
            'https://media.giphy.com/media/4HP0ddZnNVvKU/giphy.gif', 'https://media.giphy.com/media/109ltuoSQT212w/giphy.gif',
            'https://media.giphy.com/media/xVgGouGtc21H2/giphy.gif', 'https://media.giphy.com/media/ye7OTQgwmVuVy/giphy.gif',
            'https://i.pinimg.com/originals/2e/27/d5/2e27d5d124bc2a62ddeb5dc9e7a73dd8.gif', 'https://i.pinimg.com/originals/18/69/a0/1869a087b74dc5a8152278bcb9381b7e.gif',
            'https://i.pinimg.com/originals/c2/34/cd/c234cdcb3af7bed21ccbba2293470b8c.gif', 'https://thumbs.gfycat.com/FlimsyDeafeningGrassspider-small.gif',
            'https://gifimage.net/wp-content/uploads/2017/09/anime-head-pat-gif-1.gif', 'https://gifimage.net/wp-content/uploads/2017/09/anime-head-pat-gif-5.gif',
            'https://66.media.tumblr.com/6289c42ea805f475698f02207da0a377/tumblr_p14hcsxPsb1tm1dgio1_400.gif', 'https://66.media.tumblr.com/b4d110b98079b935512467aad091f068/tumblr_myki5bzz0U1shdfeho1_500.gif',
            'https://i.kym-cdn.com/photos/images/original/001/286/811/7c7.gif', 'https://i.pinimg.com/originals/7e/e2/9b/7ee29b45d40b1b16d3705c31d1bceba0.gif',
            'https://media1.tenor.com/images/183ff4514cbe90609e3f286adaa3d0b4/tenor.gif?itemid=5518321', 'https://media1.tenor.com/images/291ea37382e1d6cd33349c50a398b6b9/tenor.gif?itemid=10204936',
            'https://media1.tenor.com/images/c0bcaeaa785a6bdf1fae82ecac65d0cc/tenor.gif?itemid=7453915', 'https://i.gifer.com/OVXY.gif',
            'https://66.media.tumblr.com/580396767c1ac6d9b0eeb02f7ede30de/tumblr_p9b11ijLuy1th206io2_500.gif', 'https://i.pinimg.com/originals/a0/6d/65/a06d65ad49f019aaae3f30fb872df619.gif',
            'https://data.whicdn.com/images/125164822/original.gif', 'https://i.imgur.com/42VnOL9.gif', 'https://thumbs.gfycat.com/NaughtySpottedAsiantrumpetfish-size_restricted.gif',
            'https://media.giphy.com/media/lq72vRtxJtpgQ/giphy.gif', 'https://media1.tenor.com/images/d6bc68f949e78c7d17b55d2f65e445c0/tenor.gif?itemid=5628617'
        ];
        let randomcafune = Math.floor(Math.random() * cafune.length);
        let giflink = cafune[randomcafune];
        let mencion = message.content.slice(7);
        let CafEmbed = new Discord.MessageEmbed()
            .setTitle('Que coisa linda...')
            .setDescription(`${message.author} fez um cafuné em ${mencion}`)
            .setColor('#0099ff')
            .setImage(giflink);
        message.channel.send(CafEmbed);

    }else if (command === 'slap') {

        var slaplist = ['https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943', 'https://i.pinimg.com/originals/96/8c/b1/968cb1f9eaa12dde1d6fdf2f6ee296ed.gif', 'https://media1.tenor.com/images/2915aef3da681c2361ee9c4dcc9dbfa4/tenor.gif?itemid=14694312', 'https://i.imgur.com/fm49srQ.gif', 'https://image.myanimelist.net/ui/BQM6jEZ-UJLgGUuvrNkYUFk2Ae92E1tAeAfjk_pGLpKnHfWiikue5-m1fMe8_1TjRXlLKNwbrQTs1EfUN5ol3A', 'https://i.kym-cdn.com/photos/images/original/001/040/951/73e.gif', 'https://i.pinimg.com/originals/65/57/f6/6557f684d6ffcd3cd4558f695c6d8956.gif', 'https://i.gifer.com/1Vbb.gif', 'https://media1.tenor.com/images/a6c2f17d9209f8f536b6b4bfbfb84686/tenor.gif?itemid=5376964', 'https://media3.giphy.com/media/lSDqu7IbMqMiQvCjjN/giphy.gif', 'https://media1.tenor.com/images/85722c3e51d390e11a0493696f32fb69/tenor.gif?itemid=5463215', 'https://i.kym-cdn.com/photos/images/newsfeed/000/940/326/086.gif', 'https://media1.tenor.com/images/9ea4fb41d066737c0e3f2d626c13f230/tenor.gif?itemid=7355956'];
        var randotapnun = parseFloat(Math.floor(Math.random() * slaplist.length));
        var tapalink = slaplist[randotapnun];
        var randtextlist = ['deu um tapão em ', 'desferiu um poderoso tapa em', 'deu uma bilada em', 'espacou o sujeito, press f, para consolar nosso querido', 'surrou'];
        var randotextnum = parseFloat(Math.floor(Math.random() * randtextlist.length));
        var randomtext = randtextlist[randotextnum];
        const mencion = message.content.slice(5);
        var slapEmbed = new Discord.MessageEmbed()
            .setTitle('Se quer? então pega!')
            .setDescription(`${message.author} ${randomtext}  ${mencion}`)
            .setColor('#CB06F2')
            .setImage(tapalink);
        message.channel.send(slapEmbed);




    }

    });

client.login('ODI1MDkwMTU1MDUxMjIxMDMy.YF43Fg.6H4XpBUsX4yxHeUTxwkPMUWjvTU');