const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args) => {
  
      if (message.author.id !== '235075700262961152' && message.author.id !== '235075700262961152') return message.reply("Você não tem moral comigo");
try{
  

message.channel.send("Informe os dados do anúncio no privado")

message.author.send("Qual será o título do anúncio?")
var dm = await message.member.createDM();
const filter = b => !b.author.bot && b.author.id == message.author.id;

const a = await dm.createMessageCollector(filter, {max: 1, time: 30000,})
a.on("collect", async d => {
const prefixo = d.content
a.on("end", c => {
    if(c.size == 0) {
     message.author.send("Você não especificou o título")
    }
})


await message.author.send(`Qual será o conteúdo do anúncio?`)
const k = await dm.createMessageCollector(filter, {max: 1, time: 30000,})
k.on("collect", async ç => {
let perms = ç.content
    k.on("end", y => {
        if(y.size == 0) {
            message.channel.send("Você não especificou o conteúdo do anúncio")
           }
        })
  
  
await message.author.send(`Qual será a imagem do anúncio?`)
const h = await dm.createMessageCollector(filter, {max: 1, time: 30000,})
h.on("collect", async u => {
let img = u.content
    h.on("end", r => {
        if(r.size == 0) {
            message.channel.send("Você não especificou a imagem do anúncio")
           }
        })
  
  
  
  
  let kEmbed = new Discord.RichEmbed()
  .setTitle(`${prefixo}`)
  .setDescription(`${perms}`)
  .setImage(`${img}`)
  .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
  .setColor("#FF0000")
  


  bot.users.forEach(user => user.send(kEmbed))
  
})
})
})
}catch(e){
    message.author.send("Algo deu errado.")
}
}
exports.help = {
    name: "anGeral"
}