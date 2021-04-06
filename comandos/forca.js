const Discord = require('discord.js');

function Doforca(message){
    
    const randomWordsRequire = require('random-words');
    let letterUssed = "";
        let randomWordsForHandMAn = randomWordsRequire();
        let TriesRemanHd = 5;
        let LettersNum = randomWordsForHandMAn.length
        let WordToSecret = "";
        console.log(randomWordsForHandMAn);
        function ReplaceThelettersHM() {
            if (LettersNum > 0) {

                LettersNum--;
                WordToSecret += " -";
                ReplaceThelettersHM();
            }
        }
        ReplaceThelettersHM();
        let LetterCorrects = 0;
        let author = message.author;
        const msgauthorId = message.author.id;
        LettersNum = randomWordsForHandMAn.length
        let LetterinPosition = randomWordsForHandMAn.length - 1;
        let HandManEmbed = new Discord.MessageEmbed()
            .setTitle(`Tente acertar a palavra em inglês que eu escolhi! **5** letras erradas te levaram a derrota !! Digite a letra escolhida no chat !`)
            .setDescription(`Palavra : ${WordToSecret}`)
            .setColor('#CB06F2')
        message.channel.send(HandManEmbed).then(sentMessage => {

            msgHandManID = sentMessage.id;

        })
        function CheckifHasTheLetterInString(str, strlen, Letter, LoctoReplace) {

            if (Number.isNaN(+Letter)) {


                if (Letter.length > 1) {

                    TriesRemanHd--
                    if (TriesRemanHd > 0) {

                        message.channel.send(`${author}, Você digitou múltiplas letras, menos **1** chance !! \n Você possui **${TriesRemanHd}** chances sobrando !`)
                        Play();

                    } else {
                        message.channel.send(`${author}, Você digitou múltiplas letras, e suas chances acabaram !! GAME OVER !!`)
                        return

                    }

                } else if (strlen <= -1) {


                    if (LetterCorrects === 0) {

                        TriesRemanHd--;
                        message.channel.send(`Sua letra foi checada, e a palavra não possuia essa letra !!! **${TriesRemanHd}** Chances sobrando !!!`)

                    } else {

                        message.channel.send(`Sua letra foi checada, e colocado nos lugares correto !!!`)

                    }
                    LetterCorrects = 0;
                    LoopTimesHand = 0;
                    letterUssed += `**${Letter}**,  `
                    HandManEmbed = new Discord.MessageEmbed()
                        .setTitle(`Tente acertar a palavra em inglês que eu escolhi! **5** letras erradas te levaram a derrota !! Digite a letra escolhida no chat !`)
                        .setDescription(`Palavra : ${LoctoReplace}`)
                        .addField('Letras Usadas: ', value = `${letterUssed}`, inline = false)
                        .setColor('#CB06F2')
                    message.channel.send(HandManEmbed);
                    Play()

                } else if (Letter.toUpperCase() === str.charAt(strlen).toUpperCase()) {

                    LetterCorrects++;
                    LoctoReplace.replaceAt(strlen, Letter);
                    strlen--;
                    CheckifHasTheLetterInString(str, strlen, Letter, LoctoReplace);


                } else {

                    strlen--;
                    CheckifHasTheLetterInString(str, strlen, Letter, LoctoReplace);
                }


            } else {

                TriesRemanHd--
                message.channel.send(`${msgauthorId}, Você digitou um número, menos **1** chance !! Você possui **${TriesRemanHd}** chances sobrando !`)
                LoopTimesHand = 1;
                Play();
            }

        }
        function AwaitLetter() {

            let filter = m => m.author.id === msgauthorId;
            message.channel.send(`Esperando sua letra...`).then(() => {
                message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 15000,
                    errors: ['time']
                })
                    .then(message => {

                        message = message.first()
                        CheckifHasTheLetterInString(randomWordsForHandMAn, LetterinPosition, message.content, WordToSecret);
                        return;

                    })
                    .catch(collected => {
                        message.channel.send('O tempo acabou, e você não mandou nenhuma mensagem ! Fim de jogo !');
                    });
            })

        }
        function Play() {

            if (WordToSecret === randomWordsForHandMAn) {
                message.channel.send(`${message.author}, parabéns, você acertou a palavra !!! `)
            } else if (TriesRemanHd > 0) {
                AwaitLetter()
            } else {
                message.channel.send(`Você perdeu, a palavra correta era **${randomWordsForHandMAn}**, mais sorte na próxima vez !`);
            }


        }
        Play();

}
module.exports = Doforca