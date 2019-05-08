const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("vc n pode fzer isso");
  if(!args[0] || args[0 == "help"]) return message.reply("para trocar de prefixo digite: `=prefixo <novo prefixo>`");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF0000")
  .setDescription(`Prefixo Alterado para: ${args[0]}`);

  message.channel.send(sEmbed);

}

exports.help = {
  name: "setPrefix"
}