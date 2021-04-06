const Discord = require('discord.js');

function DoSlap(mencion, author){
    
    // Vendo se o Autor do comando marcou alguém corretamente
    if (typeof(mencion) != 'object' ) {

        return ("**Mencione uma pessoa corretamente, seu cabaço!**");

    }

    // Array com o link dos gifs, escolhendo um link aleatório e depois escolhendo uma frase...Em seguida criando e retornando um Embed...
    let slaplist = ['https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943', 'https://i.pinimg.com/originals/96/8c/b1/968cb1f9eaa12dde1d6fdf2f6ee296ed.gif', 'https://media1.tenor.com/images/2915aef3da681c2361ee9c4dcc9dbfa4/tenor.gif?itemid=14694312', 'https://i.imgur.com/fm49srQ.gif', 'https://image.myanimelist.net/ui/BQM6jEZ-UJLgGUuvrNkYUFk2Ae92E1tAeAfjk_pGLpKnHfWiikue5-m1fMe8_1TjRXlLKNwbrQTs1EfUN5ol3A', 'https://i.kym-cdn.com/photos/images/original/001/040/951/73e.gif', 'https://i.pinimg.com/originals/65/57/f6/6557f684d6ffcd3cd4558f695c6d8956.gif', 'https://i.gifer.com/1Vbb.gif', 'https://media1.tenor.com/images/a6c2f17d9209f8f536b6b4bfbfb84686/tenor.gif?itemid=5376964', 'https://media3.giphy.com/media/lSDqu7IbMqMiQvCjjN/giphy.gif', 'https://media1.tenor.com/images/85722c3e51d390e11a0493696f32fb69/tenor.gif?itemid=5463215', 'https://i.kym-cdn.com/photos/images/newsfeed/000/940/326/086.gif', 'https://media1.tenor.com/images/9ea4fb41d066737c0e3f2d626c13f230/tenor.gif?itemid=7355956'];
    let randotapnun = parseFloat(Math.floor(Math.random() * slaplist.length));
    let tapalink = slaplist[randotapnun];
    let randtextlist = ['deu um tapão em ', 'desferiu um poderoso tapa em', 'deu uma bilada em', 'espacou o sujeito, press f, para consolar nosso querido', 'surrou'];
    let randotextnum = parseFloat(Math.floor(Math.random() * randtextlist.length));
    let randomtext = randtextlist[randotextnum];  
    let slapEmbed = new Discord.MessageEmbed()
            .setTitle('Se quer? então pega!')
            .setDescription(`${author} ${randomtext}  ${mencion}`)
            .setColor('#CB06F2')
            .setImage(tapalink);
            
    return slapEmbed;
}
module.exports = DoSlap