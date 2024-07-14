import { config } from 'dotenv';
import { Client , GatewayIntentBits, messageLink, Routes} from 'discord.js';
import { REST } from '@discordjs/rest';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
require('dotenv').config();
config();
const TOKEN = process.env.TOKEN;
const rest = new REST({ version: '10'}).setToken(TOKEN);


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(TOKEN);



