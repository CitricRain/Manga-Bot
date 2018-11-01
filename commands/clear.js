const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(!args[0]) return message.channel.send("Please tell me how many messages to delete!");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000))
    });
}
module.exports.help = {
    name: "clear"
}