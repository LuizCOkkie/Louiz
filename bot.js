nodeconst Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "lm-";

client.on("ready", () => {
    console.log(`Em funcionamento!!!! total de ${client.channels.size} Canais, em ${client.guilds.size} servers, um total de ${client.users.size} usuarios.`)
  });

client.login('MzgwMTE2Mjg0NTk3MDc1OTY4.DPsmAA.ouz0ZiDC8kFbSS6IrQg91X2xtus') 

client.on("message", (message) => {
  
  if (message.content.startsWith(prefix + "ping")) {
      message.channel.sendMessage(":ping_pong: Pong!");
  }

});

client.on("message", (message) => {
  
  if (message.content.startsWith(prefix + "Oi")) {
      message.channel.sendMessage("Olá! Tudo Bem?");
  }

});

client.on("message", (message) => {
  
  if (message.content.startsWith(prefix + "youtube")) {
      message.channel.sendMessage("Entre aqui: https://www.youtube.com/channel/UC48rX5dydN_4bjHhlv1FK3w");
  }

});

client.on("message", (message) => {
  
  if (message.content.startsWith(prefix + "biscoito")) {
      message.channel.sendMessage("Bolacha!");
  }

});

client.on("message", (message) => {
  
  if (message.content.startsWith(prefix + "beep")) {
      message.channel.sendMessage("i'm a sheep");
  }

});

client.on("message", (message) => {
  
  if (message.content.startsWith(prefix + "jogos")) {
      message.channel.sendMessage("Minecraft e LOL");
  }

});

client.on("message", (message) => {
  
  if (message.content.startsWith(prefix + "ToComFome")) {
      message.channel.sendMessage("Tome :ice_cream: ");
  }

});

client.on("message", (message) => {
  
  if (message.content.startsWith(prefix + "TudoBem")) {
      message.channel.sendMessage("SS, e vc?");
  }

});

client.on("message", (message) => {
  
  if (message.content.startsWith(prefix + "TudoOtimo")) {
      message.channel.sendMessage("Que Bom!!");
  }

});

client.on("message", (message) => {
  
  if (message.content.startsWith(prefix + "SouUmInscrito")) {
      message.channel.sendMessage("Vlw pelo apoio <3 <3 <3");
  }

});

client.on("message", (message) => {
  
  if (message.content.startsWith(prefix + "Admin")) {
      message.channel.sendMessage("Sua resposta está em andamento");
  }

});
