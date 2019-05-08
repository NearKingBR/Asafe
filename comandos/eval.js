const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    const Discord = require('discord.js')

    if (message.author.id !== '235075700262961152' && message.author.id !== '235075700262961152') return message.reply("Tá sem moral comigo");
    try {
        let nylindao = args.join(" ");
        let nytotoso = eval(nylindao);

        if (typeof nytotoso !== 'string')
            nytotoso = require('util').inspect(nytotoso, { depth: 0 });

  message.channel.send(nytotoso)
    } catch(e) {
        message.channel.send(e);
    }
}

exports.help = { 
    name: 'eval'
}