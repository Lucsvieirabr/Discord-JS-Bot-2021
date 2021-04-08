const Discord = require('discord.js');

// Função Que Retorna o Embed da página.
// Enviar A Página que está e o Emoji que o usuário reagiu, se reagiu...
function sendcomandos(IsonPage, EmojiReactName){
    

    const botimglink = 'https://static.wikia.nocookie.net/clubpenguin/images/e/e5/Tusk_Evil.png/revision/latest/scale-to-width-down/856?cb=20130523222135';
    const ComandsembedP1 = new Discord.MessageEmbed()
        .setTitle(`Olá , está é minha lista de comandos, você está na Página 1`)
        .addField('?info', value = 'Veja as informações de uma pessoa e seu imagem de perfil, use ?info @pessoa.', inline = false)
        .addField('?bhask', value = 'Calcule uma equação de segundo grau, use ?bhask a b c.', inline = false)
        .addField('?cafune', value = 'Faça um cafuné em alguém, use ?cafune @pessoa.', inline = false)
        .addField('?emais', value = 'Quem é mais? use ?mais @pessoa @pessoa maisoque.', inline = false)
        .addField('?translate', value = 'Use ?translate Texto , que eu traduzo e mando !!!! ', inline = false)
        .setColor('#00FBFC')
        .setImage(botimglink);

    const ComandsembedP2 = new Discord.MessageEmbed()
        .setTitle(`Olá , está é minha lista de comandos, você está na Página 2`)
        .addField('?slap', value = 'De aquele tapa no mongol que ta enchendo o saco,use ?slap e o nome da pessoa, ou marque ela.', inline = false)
        .addField('?x1', value = 'Chame seu amigo para uma trocação franca sem perder a amizade! Use ?x1 @pessoa.', inline = false)
        .addField('?guess', value = 'Tente acertar um número de 0 a 20 que eu escolhi !!', inline = false)
        .addField('?meme', value = 'Use ?meme ou ?meme +Sub Reddit de preferência, para receber um meme aleatório !!', inline = false)
        .setColor('#00FBFC')
        .setImage(botimglink);

        // Se for 0, ou seja, o comando nunca foi chamado, então enviamos que está na página zero;
        // Se a página é 1, ou 2, vamos testa o emoji que a pessoa reagiu e retornamos a Embed de acordo; 
        if(IsonPage === 0){    
            
            return ComandsembedP1      

        }else if(IsonPage === 1){

            if(EmojiReactName === '⬅️'){

                return

            }else{
                
                return ComandsembedP2  
            }

        }else if(IsonPage === 2){

            if(EmojiReactName === '⬅️'){

                return ComandsembedP1
                    
              
                
            }else{

                return
            }
        }   
}

module.exports = sendcomandos;
