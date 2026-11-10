import { Client } from 'pg';
import { database_url } from './pool';

const initialScript = `
CREATE TABLE category (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  price_unit int NOT NULL
);

CREATE TABLE color (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL
);

CREATE TABLE arrangement (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  price_markup DECIMAL NOT NULL,
  quantity int NOT NULL
);

CREATE TABLE flowers (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  color_id int NOT NULL references color(id),
  category_id int NOT NULL references category(id),
  arrangement_id int NOT NULL references arrangement(id),
  price int NOT NULL
);`;

async function main() {
	console.log('seeding...');
	const client = new Client({
		connectionString: process.env.DATABASE_URL,
	});
	await client.connect();
	await client.query(initialScript);
	await client.end();
	console.log('done');
}

main();
