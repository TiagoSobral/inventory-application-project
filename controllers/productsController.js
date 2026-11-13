import { getAllFlowers, getFixedTables } from '../db/queries.js';

async function getInventory(req, res) {
	const tables = await getFixedTables();
	const items = await getAllFlowers();
	res.render('partials/formOptions', {
		category: tables.cat,
		color: tables.color,
		arrangement: tables.arrange,
		flower: items,
	});
}

export { getInventory };
