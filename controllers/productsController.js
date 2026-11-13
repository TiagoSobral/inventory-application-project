import { getFixedTables } from '../db/queries.js';

async function getInventory(req, res) {
	const tables = await getFixedTables();
	res.render('index', {
		category: tables.cat,
		color: tables.color,
		arrangement: tables.arrange,
	});
}

export { getInventory };
