const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'mysql',
	logging: false,
});

const Shop = sequelize.import('models/Shop');
sequelize.import('models/Users');
sequelize.import('models/UserItems');

const force = process.argv.includes('--force') || process.argv.includes('-f');

sequelize.sync({ force }).then(async () => {
	const shop = [
		Shop.upsert({ name: 'Blank', cost: 1 }),
		Shop.upsert({ name: 'Blankx2', cost: 2 }),
		Shop.upsert({ name: 'Blankx5', cost: 5 }),
	];
	await Promise.all(shop);
	console.log('Database synced');
	sequelize.close();
}).catch(console.error);