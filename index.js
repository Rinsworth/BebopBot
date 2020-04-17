// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

const config = require('./config.json');


// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// login to Discord with your app's token
client.login(config.token);



client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('Pong.');
	} else if (command === 'beep') {
		message.channel.send('Boop.');
	} else if (command === 'wabang'){
    message.react('🍎');
    message.react('🍊');
    message.react('🍇');
  } else if (command === 'gamble'){
    
  }
	// other commands...
});
