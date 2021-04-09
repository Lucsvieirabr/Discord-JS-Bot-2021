const Discord = require('discord.js');

function Guess(message) {

    // Definindo as chances sobrando do usuário e um número aleatório, assim como o filtro para pegar apenas as mensagens desse usuário...
    let triesreman = 3;
    let randomnumber = Math.floor(Math.random() * 21);
    let filter = m => m.author.id === message.author.id

    // Essa função é básica, verifica se o usuário tem chances sobrando, para poder iniciar outro round...
    // Se ele possui, esperamos uma resposta, pegamos ela, se for maior que vinte o usuário perde uma chance...
    // Se for diferente do número aleatório que escolhemos, ele perde uma chance, e renincia o loop, caso for igual ele ganha...
    function AnotherChance() {

        if (triesreman != 0) {
            message.channel.send(`**${message.author.username}**, Você tem **${triesreman}** para acertar um número de 0 a 20 que eu escolhi !`).then(() => {
                message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 30000,
                        errors: ['time']
                    })
                    .then(message => {
                        message = message.first()
                        if (message.content > 20) {

                            triesreman--
                            message.channel.send(`Número maior que 20, digite um número de 1 a 20. `)
                            AnotherChance();
                            return


                        }
                        if (message.content != randomnumber) {


                            triesreman--
                            message.channel.send(`Resposta errada ou inválida, tente novamente ! `)
                            AnotherChance();


                        } else {

                            message.channel.send(`${message.author}, Parábens você acertou, meu número era ${randomnumber}!`)
                        }

                    })
                    .catch(collected => {
                        message.channel.send('Durante 30s você não digitou nada, comando encerrado');
                    });
            })
        } else {

            message.channel.send(`Terminaram suas chances, você errou, o número que eu escolhi era ${randomnumber}`)
        }

    }
    AnotherChance();
}
module.exports = Guess