const Discord = require('discord.js');

function Aula(message) {
    const Data = new Date();
    const Time = Data.getHours() + (Data.getMinutes() / 100)
    if (Data.getDay === 0 || Data.getDay === 6) return message.reply('É final de semana, vai dormir vagabundo !!');
    if (Time < 7.25 || Time > 11.50) return message.reply('Ainda é cedo ou já acabou a sua aula !!');
    if (Time >= 9.05 && Time < 9.20) return message.reply('Tá no recreio Vagabundo, vai fazer oque com o link ?!!');
    let HistLink = 'https://meet.google.com/lookup/d2tiva74v6?authuser=0&hs=179';
    let MatLink = 'https://meet.google.com/lookup/eet5chxvkt';
    let BioLink = 'https://meet.google.com/lookup/aidnilv2my'
    let QuiLink = 'https://meet.google.com/lookup/gp4spgnxaw';
    let PortLink = 'https://meet.google.com/lookup/gzh5izuxxb';
    let FisLink = 'https://meet.google.com/lookup/dedfvgu3od';
    let FiloLink = 'https://meet.google.com/lookup/cl22tuuycb';
    let GeoLink = 'https://meet.google.com/lookup/d4eg42rpbj';
    let EreLink = 'https://meet.google.com/lookup/giigxovike';
    let LingEstranLink = 'https://drive.google.com/file/d/1eVD0jccmJTQaXJXnvHUHZxIXWSLfnyFb/view?usp=sharing';
    const CronogramaDeAula = [

        [HistLink, MatLink, QuiLink, PortLink, FisLink],
        [FiloLink, MatLink, GeoLink, BioLink, PortLink],
        [BioLink, LingEstranLink, QuiLink, FisLink, MatLink],
        [QuiLink, FisLink, GeoLink, MatLink, HistLink],
        [PortLink, PortLink, LingEstranLink, BioLink, EreLink]

    ]
    const AulasDoDia = CronogramaDeAula[Data.getDay() - 1]
    const ClassHour = [{
            AulaNum: 1,
            StartTime: 7.25,
            EndTime: 8.15
        },
        {
            AulaNum: 2,
            StartTime: 8.15,
            EndTime: 9.05
        },
        {
            AulaNum: 3,
            StartTime: 9.20,
            EndTime: 10.10
        },
        {
            AulaNum: 4,
            StartTime: 10.10,
            EndTime: 11.00
        },
        {
            AulaNum: 5,
            StartTime: 11.00,
            EndTime: 11.50
        },

    ];
    ClassHour.forEach((Class) => {
        if (Class.StartTime <= Time && Time < Class.EndTime) {

            let Aula = new Discord.MessageEmbed()
                .setTitle('Pega aqui seu link da Aula')
                .setDescription(`Você está na Aula ${Class.AulaNum}, o link de acesso dela é  : ${AulasDoDia[Class.AulaNum - 1]}`)
                .setColor('#0099ff')
                .setImage('http://pa1.narvii.com/7449/105cac9c2c1ea9797438cb3d74eac57ff1ca838fr1-300-300_00.gif')

            message.channel.send(Aula);

        }
    })


}

module.exports = Aula;