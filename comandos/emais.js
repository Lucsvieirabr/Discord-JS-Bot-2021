
function Doemais(mencion1, mencion2, eoq){

    if (typeof(mencion1) != 'object' || typeof(mencion2) != 'object' ) {

        return ("**Mencione duas pessoas, seu cabaço!**");

    } else if (!eoq) {
        return ('**Diga algo para os dois competirem !! \nPor exemplo: ?emais @pessoa @pessoa lindo **')
    } else {

        let men1por = Math.floor(Math.random() * 101);
        let men2por = Math.floor(Math.random() * 101);
        return (`O  ${mencion1} é ${men1por}% ${eoq}, e o ${mencion2} é ${men2por}% ${eoq} `);
    }
}
module.exports = Doemais