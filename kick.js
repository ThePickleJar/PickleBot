const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Please specify a user");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't kick this person!");
    if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("This person can't be kicked");

    if(message.guild.member(kUser).kick(kReason)){
    message.reply(kUser + " has been kicked");
    }
    
}

module.exports.help = {
  name:"kick"
}