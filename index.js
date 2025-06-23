import 'dotenv/config';
import { Client, GatewayIntentBits } from 'discord.js';
import traduzir from './piadas';

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});
client.once('ready', () => {
    console.log(`✅ Bot logado como ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
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
    if (message.content.startsWith === '!traduza') {
        const args = message.content.split(' ');
        const idioma = args[1];
        const texto = args.slice(2).join('');
        try {
            const textoTraduzido = await traduzir(idioma, texto);
            message.reply("✅Tradução: " + textoTraduzido);
        } catch (error) {
            console.error('Erro na tradução:', error);
            message.reply('❌ Não consegui traduzir agora.');
        }
    }
})

client.login(process.env.DISCORD_TOKEN);