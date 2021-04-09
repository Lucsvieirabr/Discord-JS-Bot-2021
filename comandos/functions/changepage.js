const Comandos = require('D:/Github/Discord-JS-Bot-2021/comandos/comandos.js')

// Comandos simples para trocar de página...
// Parâmetro CommandListIsonPage é a página que o comando está...
// Parâmetro EmojiName é o nome do Emoji que o usuário reagiu...
// Parâmetro MsgCommandSent é o ID da mensagem de comandos, precisamos do ID para editar a mensagem...

function ChangePage(CommandListIsonPage, MsgCommandSent) {

    // Ele edita a mensagem pelo ID, e coloca o Embed, mais qual Embed?
    // O Embed que ele envia depende do retorno da função Comandos()...
    // A função Comandos(), precisa da Página que ele está.
    // Mais informação sobre a função Comandos(), na pasta comandos, arquivo : comandos.js...   

    MsgCommandSent.edit(Comandos(CommandListIsonPage)).then(sentMessage => {

        sentMessage.react('⬅️');
        sentMessage.react('➡️');

    })
}

module.exports = ChangePage;