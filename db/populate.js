import { Client } from 'pg';

const categories = [
	{ name: 'Carnations', price: 4 },
	{ name: 'Daffodils', price: 3 },
	{ name: 'Daisies', price: 5 },
	{ name: 'Peonies', price: 7 },
	{ name: 'Lilies', price: 8 },
	{ name: 'Orchids', price: 6 },
	{ name: 'Roses', price: 9 },
	{ name: 'Sunflowers', price: 10 },
	{ name: 'Tulips', price: 8 },
];

const colors = [
	'Blue',
	'Brown',
	'Burgundy',
	'Orange',
	'Peach',
	'Pink',
	'Purple',
	'Red',
	'White',
	'Yellow',
];

const arrangements = [
	{ occasion: 'Birthday', markup: 1.2, quantity: 4 },
	{ occasion: 'Bouquet', markup: 1.3, quantity: 10 },
	{ occasion: 'Christmas', markup: 1.7, quantity: 8 },
	{ occasion: 'Funeral', markup: 2.3, quantity: 20 },
	{ occasion: 'Individual', markup: 1, quantity: 1 },
	{ occasion: 'Mothers Day', markup: 2.1, quantity: 4 },
	{ occasion: 'Valentines', markup: 2.5, quantity: 6 },
	{ occasion: 'Womans Day', markup: 1.2, quantity: 4 },
	{ occasion: 'Wedding', markup: 2.8, quantity: 30 },
];

const initialScript = `
CREATE TABLE IF NOT EXISTS category (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL UNIQUE,
  price_unit int NOT NULL
);

CREATE TABLE IF NOT EXISTS color (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS arrangement (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL UNIQUE,
  price_markup DECIMAL NOT NULL,
  quantity int NOT NULL
);

CREATE TABLE IF NOT EXISTS flowers (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  color_id int NOT NULL references color(id),
  category_id int NOT NULL references category(id),
  arrangement_id int NOT NULL references arrangement(id)
);`;

async function insertCat(client) {
	for (const val of categories) {
		await client.query(
			`INSERT INTO category(name, price_unit) 
      VALUES($1,$2)
      ON CONFLICT DO NOTHING`,
			[val.name, val.price],
		);
	}
}

async function insertColors(client) {
	for (const val of colors) {
		await client.query(
			`INSERT INTO color(name) 
      VALUES($1)
      ON CONFLICT DO NOTHING
      `,
			[val],
		);
	}
}

async function insertArr(client) {
	for (const val of arrangements) {
		await client.query(
			`INSERT INTO arrangement(name, price_markup, quantity) 
      VALUES($1,$2,$3)
      ON CONFLICT DO NOTHING`,
			[val.occasion, val.markup, val.quantity],
		);
	}
}

async function main() {
	console.log('seeding...');
	const client = new Client({
		connectionString: process.env.DATABASE_URL,
	});
	await client.connect();
	await client.query(initialScript);
	await insertCat(client);
	await insertColors(client);
	await insertArr(client);
	await client.end();
	console.log('done');
}

main();
