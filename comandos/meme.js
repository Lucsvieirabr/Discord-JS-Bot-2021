const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

async function SendMemes(message, argvs) {

    let SubReddit = ['dankmeme', 'me_irl', 'FellowKids', 'memes', 'niceguys', 'Tinder', 'BikiniBottomTwitter', '2meirl4meirl', 'ShitPostCrusaders']
    let RandomSub = SubReddit[Math.floor(Math.random() * SubReddit.length)];
    let WhereGetImg = argvs[0] || RandomSub
    if (await randomPuppy(WhereGetImg) === undefined) WhereGetImg = RandomSub;
    let ImgSubReddit = WhereGetImg;
    const MemeEmbed = new Discord.MessageEmbed()
        .setTitle(`Meme retirado do SubReddit: **${ImgSubReddit}** `)
        .setColor('#00FBFC')
        .setImage(await randomPuppy(WhereGetImg));

    message.channel.send(MemeEmbed);
}


module.exports = SendMemes;