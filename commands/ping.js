const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    
    message.channel.send("Pong!").catch(console.error);
};
module.exports.help = {
    name: "ping"
}