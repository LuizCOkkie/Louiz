const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'lm+ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === 'lm+yeah') {
    	message.reply('Também estou feliz! :stuck_out_tongue: ');
  	}
});

client.on('message', message => {
    if (message.content === 'lm+tapa') {
    	message.reply(':wave::skin-tone-1: aí, seu tapa doeu :wave::skin-tone-1: ');
  	}
})

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
