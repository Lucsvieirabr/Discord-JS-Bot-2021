function Doemais(mencion1, mencion2, eoq, message) {

    // Checando se o usuário mencionou alguém corretamento, se for uma pessoa, o tipo da variável mencion seria object...
    if (typeof(mencion1) != 'object' || typeof(mencion2) != 'object') return message.channel.send("**Mencione duas pessoas, seu cabaço!**");


    // Checando se o usuário colocou algo para os dois mencionados competirem .... 
    if (!eoq) return message.channel.send('**Diga algo para os dois competirem !! \nPor exemplo: ?emais @pessoa @pessoa lindo **')


    // Criando uma porcentagem aleatória para cada pessoa mencionada, e retornando a mensagem de base...
    let men1por = Math.floor(Math.random() * 101);
    let men2por = Math.floor(Math.random() * 101);
    message.channel.send(`O  ${mencion1} é ${men1por}% ${eoq}, e o ${mencion2} é ${men2por}% ${eoq} `);

}
module.exports = Doemais