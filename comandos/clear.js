const Discord = require('discord.js');

function Clear(message, argvs){

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("**Você não pode deletar mensagens**....")
    }

    // Check if args[0] is a number
    if (isNaN(argvs[0]) || parseInt(argvs[0]) <= 0) {
        return message.reply("Opa isso não é um número?... Eu não posso deletar 0 mensagens btw...").then(m => m.delete(5000));
    }

    // Maybe the bot can't delete messages
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Desculpa, o ADM não me deu esses poderes!").then(m => m.delete(5000));
    }

    let deleteAmount;

    if (parseInt(argvs[0]) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(argvs[0]);
    }

    message.channel.bulkDelete(deleteAmount, true)
        .then(deleted => message.channel.send(` **${deleted.size} Mensagens Deletadas **.`))
        .catch(err => message.reply(`Alguma coisa deu de errado... ${err}`));

    setTimeout(function () {

        message.channel.bulkDelete(1, true);
    }, 10000);
}
module.exports = Clear