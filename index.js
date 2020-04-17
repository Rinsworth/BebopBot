const Discord = require('discord.js');
const client = new Discord.Client();
const { Users, Shop } = require('./dbObjects');
const { Op } = require('sequelize');
const currency = new Discord.Collection();
const config = require('./config.json');

client.once('ready', () => {
	console.log('Ready!');
});

client.login(config.token);

Reflect.defineProperty(currency, 'add', {
	value: async function add(id, amount) {
		const user = currency.get(id);
		if (user) {
			user.balance += Number(amount);
			return user.save();
		}
		const newUser = await Users.create({ user_id: id, balance: amount });
		currency.set(id, newUser);
		return newUser;
	},
});

Reflect.defineProperty(currency, 'getBalance', {
	value: function getBalance(id) {
		const user = currency.get(id);
		return user ? user.balance : 0;
	},
});

client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'balance') {
		const target = message.author;
		return message.channel.send(`${target.tag} has ${currency.getBalance(target.id)}💰`);
	} else if (command === 'tag') {
		// [epsilon]
	} else if (command === 'edittag') {
		// [zeta]
	} else if (command === 'taginfo') {
		// [theta]
	} else if (command === 'showtags') {
		// [lambda]
	} else if (command === 'removetag') {
		// [mu]
	}
	// other commands...
});
