const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {

  let {body} = await superagent
  .get(`https://aws.random.cat/meow`);

  let catembed = new Discord.RichEmbed()
  .setColor("1c64d8")
  .setTitle("A random cat")
  .setImage(body.file);

  message.channel.send(catembed);


}

module.exports.help = {
    name: "cat"
}