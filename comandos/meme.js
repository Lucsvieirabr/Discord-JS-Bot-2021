const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

async function SendMemes(message, argvs){

        // Aqui vamos definir as váriaveis...
        // Img está vazia, já que depois eu vou colocar o url do meme..
        // let Local é apenas para saber de onde eu tirei o meme...
        // SubReddit array com alguns SubReddit...
        // RandomSub, pega um Sub aleatório da array dos SubReddit...
        let img = '';
        let local = '';
        let SubReddit = ['dankmeme', 'me_irl', 'FellowKids', 'memes', 'Tinder', 'BikiniBottomTwitter', '2meirl4meirl', 'ShitPostCrusaders']
        let RandomSub = SubReddit[Math.floor(Math.random() * SubReddit.length)];
    
        // Agora vamos ver de qual SubReddit vamos pegar a imagem...
        // Se o usuário não inseriu um sub, pegamos um random da array...
        // Se o usuário inseriu, vemos se ele existe, e se não, avisamos o usuário...
        if(!argvs[0]){
            
            img = await randomPuppy(RandomSub);
            local = RandomSub;
    
        }else if(!randomPuppy(argvs[0])){
    
            message.channel.send(`${message.author}, **Você escreveu um SubReddit errado !`)
        }else{
    
            img = await randomPuppy(argvs[0])
            local = argvs[0]
        }

        // Agora criamo um Embed simples, e depois enviamos...
        const MemeEmbed = new Discord.MessageEmbed()
            .setTitle(`Meme retirado do SubReddit: **${local}** `)
            .setColor('#00FBFC')
            .setImage(img);
    
            message.channel.send(MemeEmbed)
    
   
}

module.exports = SendMemes;
