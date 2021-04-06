const Discord = require('discord.js');

function DoMute(message){

    //Vendo se o membro tem permissão 
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.reply("**Você não pode mutar pessoas !! \nApenas os admiros possuem tal poder !!**....")
    }

    //Vendo se o Autor do comando marcou alguém corretamente
    if (typeof(message.mentions.users.first()) != 'object') {

        return message.reply(`**Marque alguém corretamente**!!`)
    }

    // Defindo a role Muted e o membro, e depois dando a role Muted para ele, e retornamos a mensagem de confirmação...
    let role = message.guild.roles.cache.find(role => role.name === "MUTED");
    let member = message.mentions.members.first();
    member.roles.add(role).catch(console.error);
    message.channel.send(`${member}** foi mutado com sucesso !! **`);
}
module.exports = DoMute