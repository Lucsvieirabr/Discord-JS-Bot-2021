
function Clear(message, argvs){

    // Verificando se o membro tem permissão de "MANAGE_MESSAGES"...
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("**Você não pode deletar mensagens**....")
    }

    // Vendo se o argvs[0] é um número ....
    if (isNaN(argvs[0]) || parseInt(argvs[0]) <= 0) {
        return message.reply("Opa isso não é um número?... Eu não posso deletar 0 mensagens btw...").then(m => m.delete(5000));
    }

    // Verificando se o bot tem permissão para apagar mensagens..
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Desculpa, o ADM não me deu esses poderes!").then(m => m.delete(5000));
    }

    let deleteAmount;

    // O discord permite que apenas 100 mensagens sejam apagadas direta, então se o usuário inseriu um número maior que 100..
    // Transformamos o número em 100, senão for maior, apenas transformamos esse número em Int...  
    if (parseInt(argvs[0]) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(argvs[0]);
    }

    // Comando simples para deletar mensagens....
    message.channel.bulkDelete(deleteAmount, true)
        .then(deleted => message.channel.send(` **${deleted.size} Mensagens Deletadas **.`))
        .catch(err => message.reply(`Alguma coisa deu de errado... ${err}`));


    // Função para apagar a mensagem de alerta depois de um tempo......
    setTimeout(function () {

        message.channel.bulkDelete(1, true);
    }, 10000);
}
module.exports = Clear