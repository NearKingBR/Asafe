const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js"); //define discord
const config = require("./config.json"); //define config
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();





fs.readdir("./comandos/", (err, files) => {
    if(err) console.error(err);

    let arquivojs = files.filter(f => f.split(".").pop() == "js");
    arquivojs.forEach((f, i) => {
        let props = require(`./comandos/${f}`);
        console.log(`Comando ${f} carregado com sucesso.`)
        bot.commands.set(props.help.name, props);        
    });
});

bot.on('ready', () => {
    console.log(`Logado.`); //MUDA PARA O QUE VOCÊ QUISER QUE APAREÇA NO STATUS DO SEU BOT  
    let s = [
        { name: `No Game, No Life`, type: 'WATCHING' },
        { name:  `Boruto`, type: 'STREAMING' },
        { name: `DragonBall`, type: 'LISTENING' },
        { name: `Naruto`, type: 'WATCHING' },
        { name:  `Boku No Hero`, type: 'STREAMING' },
        { name: `Nanatzu No Taizai`, type: 'LISTENING' }
    ];
    
    function st() {
        let rs = s[Math.floor(Math.random() * s.length)];
        bot.user.setPresence({ game: rs });
    }
  
    st();
    setInterval(() => st(), 300000);

});


bot.on('message', message => {
    if(message.author.bot) return; //não responde bot
    if(message.channel.type == "dm") return; //não reponde dm
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: config.prefix
        };
    }

    let prefix = prefixes[message.guild.id].prefixes;
    if(!message.content.startsWith(prefix)) return; //responde só ao seu prefixo
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    let arquivocmd = bot.commands.get(command.slice(prefix.length));
    if(arquivocmd) arquivocmd.run(bot,message,args);

   
});

bot.login(process.env.TOKEN);