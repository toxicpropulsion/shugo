const Discord = require("discord.js");
const { token, prefix } = require("./config");

const client = new Discord.Client();
const guilds = client.guilds;

const CHANNELS = [];

client.once("ready", async () => {
  const channels = client.channels.filter(value => CHANNELS.includes(value.id));
  console.log(`Found ${channels.size} channels`);
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
});

client.login(token);
