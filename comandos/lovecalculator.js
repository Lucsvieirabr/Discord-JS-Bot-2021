const Discord = require('discord.js');
const translate = require('@iamtraction/google-translate');

function CalcLove(message, mention1, mention2) {

    // Checando se o usuário mencionou alguém corretamento...
    // Se for uma pessoa, o tipo da variável mencion seria object...
    if (typeof(mention1) != 'object' || typeof(mention2) != 'object') return message.channel.send("**Mencione duas pessoas, seu cabaço!**");


    const request = require('request');

    const options = {
        method: 'GET',
        url: 'https://love-calculator.p.rapidapi.com/getPercentage',
        qs: { fname: `${mention1.username}`, sname: `${mention2.username}` },
        headers: {
            'x-rapidapi-key': '73c8f7217dmsh0f16014a559a2bep118c18jsna45cbb055155',
            'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
            useQueryString: true
        }
    };

    request(options, async function(error, response, body) {
        if (error) throw new Error(error);

        const BodyObj = JSON.parse(body);
        let Percentage = await BodyObj.percentage
        let Text = await translate(BodyObj.result, { to: 'pt' })
        const LoveEmbed = new Discord.MessageEmbed()
            .setTitle(`Como será que os dois vão se sair?.....`)
            .addField(`Os dois tem ${Percentage}% de chances de certo...`, value = `${mention1} e ${mention2}, ${Text.text}`)
            .setImage('https://i.pinimg.com/736x/0e/de/d0/0eded02148d997485272bb52eaf17656.jpg')
            .setColor('#00FBFC')

        return message.channel.send(LoveEmbed)

    });

}

module.exports = CalcLove;