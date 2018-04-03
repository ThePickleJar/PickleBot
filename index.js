const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

const PREFIX = ".!"

var fortunes = [
    ":8ball:Definetely:8ball:",
    ":8ball:Possibly:8ball:",
    ":8ball:Pickles is the best:8ball:",
    ":8ball:No:8ball:",
    ":8ball:No u:8ball:"
]

bot.on('message' , (message) => {

     if(message.content == 'ping') {
        message.channel.sendMessage('pong');
    }

if(!message.content.startsWith(PREFIX)) return;

var args = message.content.substring(PREFIX.length).split(" ");

switch (args[0].toLowerCase()){
    case "hi":
       message.channel.sendMessage("Hello. If you would like help please type .!help");
       break;
    default:
       message.channel.sendMessage("That command does not exist");
       break;
    case "8ball":
       if(message.content.endsWith("?")) {
          message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
       }else message.channel.sendMessage("Question unclear")
        break;
   
       

        
    }
});

bot.login('process.env.token');
