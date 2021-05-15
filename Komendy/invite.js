module.exports = {
    name: 'invite',
    description: 'zaproś mojego bota na własny serwer!',
    execute(message, args, Discord) {
        let newEmbed = new Discord.MessageEmbed()
 
        .setColor('#FF0000')
        .setTitle('Zaproś mnie na swój serwer!')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=843096260817977386&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize&response_type=code&scope=guilds.join%20gdm.join%20bot')
        .setDescription('Aby zaprosić mnie na własny serwer, użyj **linku powyżej**!')
        .setFooter('Z góry dzięki!');
 
        message.channel.send(newEmbed);
    }
}