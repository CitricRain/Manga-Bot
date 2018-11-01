const Discord = require('discord.js');

exports.run = (bot, message, args) => {
 
    message.channel.send(`:exclamation: Alerted! - Took: **${new Date().getTime() - message.createdTimestamp} ms**`);

    }

module.exports.help = {
    name: "test"
}