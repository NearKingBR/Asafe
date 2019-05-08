const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  
  
  
  let kEmbed = new Discord.RichEmbed()
  .setDescription('``` Os comandos deste Bot são em sua maioria restritos. ``` Se deseja continuar, escreva: `sim`')
  .setColor('#FF0000')

        message.channel.send(kEmbed);
  
  
  
  
  let tEmbed = new Discord.RichEmbed()
  .setTitle("``` COMANDOS ```")
  .setDescription('`setPrefix`: Muda o prefixo do bot\n `anGeral`: Envia um aviso para todos os usuários do Bot pelo privado\n `anServer`: Envia seu aviso para todos os membros do servidor')
  .addField('|', 'Peça você mesmo seu Bot ao criador: [Clique Aqui](https://gam1ng.com.br/servicos/outros-venda-de-itens/eu-faco-bots-para-discord/)')
  .setColor("#FF0000")
  
const filter = b => !b.author.bot && b.author.id == message.author.id;
const colector = await message.channel.createMessageCollector(filter, {time: 30000})
colector.on("collect", async resposta => {
if(resposta.content === "sim"){
return message.reply(tEmbed)
}
})
  
}

exports.help = {
  name: "help"
}

