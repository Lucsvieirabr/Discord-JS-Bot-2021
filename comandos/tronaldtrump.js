const translate = require('@iamtraction/google-translate');
const request = require('request');
const Discord = require('discord.js');

async function TronaldTrump(message) {

        const options = {
            method: 'GET',
            url: 'https://matchilling-tronald-dump-v1.p.rapidapi.com/random/quote',
            headers: {
              accept: 'application/hal+json',
              'x-rapidapi-key': '73c8f7217dmsh0f16014a559a2bep118c18jsna45cbb055155',
              'x-rapidapi-host': 'matchilling-tronald-dump-v1.p.rapidapi.com',
              useArray: true
            }
          };
          
          request(options, async function (error, response, body) {
              if (error) throw new Error(error);
              let BodyArray = body.split('":"')
              let Value = await translate(BodyArray[13], {to: 'pt'})
              let Tag = await translate(BodyArray[8], {to: 'pt'})
              const FraseEmbed = new Discord.MessageEmbed()
                 .setTitle(`Uma Frase Do Trump Saindo Do Forno !!!`)
                 .addField('Tag :', value = `${Tag.text}`, inline = false)
                 .setDescription(`"${Value.text}"`)
                 .setColor('#00FBFC')
                 .setImage('https://s2.glbimg.com/jV2zFZJ1ijKz2XwZZW8l0jeZ_JQ=/640x424/i.glbimg.com/og/ig/infoglobo1/f/original/2021/04/07/92269620_file_photo_former_us_president_donald_trump_speaks_at_the_conservative_political_action_con.jpg')
              
              return message.channel.send(FraseEmbed)

          });

          return
    
}
module.exports = TronaldTrump