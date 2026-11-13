import { createFlower, getAllFlowers, getFixedTables } from '../db/queries.js';

async function getInventory(req, res) {
	const tables = await getFixedTables();
	const items = await getAllFlowers();
	res.render('index', {
		category: tables.cat,
		color: tables.color,
		arrangement: tables.arrange,
		flower: items,
	});
}

async function addNewItemPost(req, res) {
	const name = req.body.name;
	const category = req.body.category;
	const color = req.body.color;
	const arrangement = req.body.arrangement;
	await createFlower(name, category, color, arrangement);
	res.redirect('/');
}

export { getInventory, addNewItemPost };
