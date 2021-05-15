const Discord = require('discord.js');
const nodemon = require('nodemon');
const client = new Discord.Client();
const { token, prefix } = require('./config.js');
const fs = require('fs')
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('Komendy').filter(file => file.endsWith('.js'));
 
 
client.once('ready', () =>{
    console.log('Bot jest online!');
    client.user.setActivity('PornHub.com', {type: 'WATCHING'});
});
 
for (const file of commandFiles) {
    const command = require(`./Komendy/${file}`);
    client.commands.set(command.name, command);
}
 
 
client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
 
    if (command === 'online') {
        client.commands.get('online').execute(message, args);
    } else if (command === 'invite') {
        client.commands.get('invite').execute(message, args, Discord);
    } else if (command === 'ankieta') {
        client.commands.get('ankieta').execute(message, args, Discord);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    }
});
 
 
client.login(token);