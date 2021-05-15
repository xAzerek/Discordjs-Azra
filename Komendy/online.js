module.exports = {
    name: 'online',
    description: 'Jeżeli Bot jest online reaguje oraz odpisuje',
    execute(message, args) {
        message.channel.send('Jestem Online! ✅' );
    },
};