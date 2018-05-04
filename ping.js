const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    message.channel.send("Pong! Ping is " + bot.ping + " ms");        
}



module.exports.help = {
    name:"ping"
  }

