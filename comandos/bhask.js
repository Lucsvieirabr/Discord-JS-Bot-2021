const Discord = require('discord.js');

function DoBhask(a, b, c, argvslength, author){
    
    function formbhask(a, b, c) {

        let delta = (b * b) - 4 * a * c;
    
        let x1up = -b + (Math.sqrt(delta));
        x1 = (x1up / (2 * a));
    
        let x2up = -b - (Math.sqrt(delta));
        x2 = (x2up / (2 * a));

        return (`Considerando A = **${a}** , B = **${b}**, C = **${c}** ... X1 = **${x1}** e X2 = **${x2}**.`)
    
    }

    if (argvslength < 3) {
        return (`Você não colocou todas as **três variáveis necessárias**, ${author}!`);
    }else{
        return formbhask(a, b, c);
    }
}

module.exports = DoBhask