const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let iUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!iUser) return message.channel.send("Please specify a user");
let iicon = iUser.user.displayAvatarURL;
let iembed = new Discord.RichEmbed()
.setTitle("Userinfo for " + iUser.user.username)
.setColor("#15f153")
.setThumbnail(iicon)
.addField("Account created on", iUser.user.createdAt)
.addField("User joined on", iUser.user.joinedAt);

message.channel.send(iembed);

}

module.exports.help = {
    name: "userinfo"
  }