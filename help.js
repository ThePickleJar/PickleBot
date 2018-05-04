const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let helpembed = new Discord.RichEmbed()
    .setTitle("Commands:")
    .setColor("#15f153")
    .addField("Prefix", "`!!`")
    .addField("Moderation", "`ban`, `kick`, `report`, `tempmute`, `addrole`, `removerole`")
    .addField("Info", "`botinfo`, `serverinfo`, `ping`")
    .addField("Fun", "`dog`, `cat`")

    message.channel.send(helpembed);
}

module.exports.help = {
    name:"help"
  }
