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
    } if (message.content === '!oneros') {
        message.reply('só sabe abusar');
    } if (message.content === '!bullet') {
        message.reply('aposentado');
    } if (message.content === '!pervious') {
        message.reply('riquinho');
    }
    if (message.content === '!faca') {
        message.reply('o cara mais humilde do grupo');
    }
})

client.login(process.env.DISCORD_TOKEN);