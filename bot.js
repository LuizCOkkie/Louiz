const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.MzgwMTE2Mjg0NTk3MDc1OTY4.DcTB2g.Lpx7bQSIRUDrHifOzqSVsRpBHdg);
