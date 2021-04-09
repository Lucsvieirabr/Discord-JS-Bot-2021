function DoBhask(a, b, c, argvslength, author, message) {

    //Função da formúla de Bhaskara...
    function formbhask(a, b, c) {

        let delta = (b * b) - 4 * a * c;

        let x1up = -b + (Math.sqrt(delta));
        x1 = (x1up / (2 * a));

        let x2up = -b - (Math.sqrt(delta));
        x2 = (x2up / (2 * a));

        return (`Considerando A = **${a}** , B = **${b}**, C = **${c}** ... X1 = **${x1}** e X2 = **${x2}**.`)

    }

    //Aqui estamos testando se o usuário colocou tres váriaveis, com o argvs.lenght .... 
    //Se não tiver colocado, retornamos pedindo para colocar as três variáveis...
    //Se tiver colocado, chamamos a função da formúla de bhaskara e retornamos a mensagem de resposta...
    if (argvslength < 3) {
        return message.channel.send(`Você não colocou todas as **três variáveis necessárias**, ${author}!`);
    }
    return message.channel.send(formbhask(a, b, c));

}

module.exports = DoBhask