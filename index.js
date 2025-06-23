require('dotenv').config;
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});
client.once('ready', () => {
    console.log(`✅ Bot logado como ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.content === '!dulu') {
        message.reply('Luíz de rita');
    }
    if (message.content === '!tigrin') {
        message.reply('só faz barulho');
    }
    if (message.content === '!alisson') {
        message.reply('só fica sutando');
    }
})

client.login(process.env.DISCORD_TOKEN);