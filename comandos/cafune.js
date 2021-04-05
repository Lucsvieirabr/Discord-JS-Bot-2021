const Discord = require('discord.js');

function doCafune(author, mencion) {
  let cafune = ['https://media.giphy.com/media/ARSp9T7wwxNcs/giphy.gif', 'https://media.giphy.com/media/5tmRHwTlHAA9WkVxTU/giphy.gif',
    'https://media.giphy.com/media/4HP0ddZnNVvKU/giphy.gif', 'https://media.giphy.com/media/109ltuoSQT212w/giphy.gif',
    'https://media.giphy.com/media/xVgGouGtc21H2/giphy.gif', 'https://media.giphy.com/media/ye7OTQgwmVuVy/giphy.gif',
    'https://i.pinimg.com/originals/2e/27/d5/2e27d5d124bc2a62ddeb5dc9e7a73dd8.gif', 'https://i.pinimg.com/originals/18/69/a0/1869a087b74dc5a8152278bcb9381b7e.gif',
    'https://i.pinimg.com/originals/c2/34/cd/c234cdcb3af7bed21ccbba2293470b8c.gif', 'https://thumbs.gfycat.com/FlimsyDeafeningGrassspider-small.gif',
    'https://gifimage.net/wp-content/uploads/2017/09/anime-head-pat-gif-1.gif', 'https://gifimage.net/wp-content/uploads/2017/09/anime-head-pat-gif-5.gif',
    'https://66.media.tumblr.com/6289c42ea805f475698f02207da0a377/tumblr_p14hcsxPsb1tm1dgio1_400.gif', 'https://66.media.tumblr.com/b4d110b98079b935512467aad091f068/tumblr_myki5bzz0U1shdfeho1_500.gif',
    'https://i.kym-cdn.com/photos/images/original/001/286/811/7c7.gif', 'https://i.pinimg.com/originals/7e/e2/9b/7ee29b45d40b1b16d3705c31d1bceba0.gif',
    'https://media1.tenor.com/images/183ff4514cbe90609e3f286adaa3d0b4/tenor.gif?itemid=5518321', 'https://media1.tenor.com/images/291ea37382e1d6cd33349c50a398b6b9/tenor.gif?itemid=10204936',
    'https://media1.tenor.com/images/c0bcaeaa785a6bdf1fae82ecac65d0cc/tenor.gif?itemid=7453915', 'https://i.gifer.com/OVXY.gif',
    'https://66.media.tumblr.com/580396767c1ac6d9b0eeb02f7ede30de/tumblr_p9b11ijLuy1th206io2_500.gif', 'https://i.pinimg.com/originals/a0/6d/65/a06d65ad49f019aaae3f30fb872df619.gif',
    'https://data.whicdn.com/images/125164822/original.gif', 'https://i.imgur.com/42VnOL9.gif', 'https://thumbs.gfycat.com/NaughtySpottedAsiantrumpetfish-size_restricted.gif',
    'https://media.giphy.com/media/lq72vRtxJtpgQ/giphy.gif', 'https://media1.tenor.com/images/d6bc68f949e78c7d17b55d2f65e445c0/tenor.gif?itemid=5628617'
  ];
  let randomcafune = Math.floor(Math.random() * cafune.length);
  let giflink = cafune[randomcafune];
  let CafEmbed = new Discord.MessageEmbed()
    .setTitle('Que coisa linda...')
    .setDescription(`${author} fez um cafuné em ${mencion}`)
    .setColor('#0099ff')
    .setImage(giflink);

  return CafEmbed;
}

module.exports = doCafune