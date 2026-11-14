import {
	createFlower,
	deleteFlower,
	getAllFlowers,
	getFixedTables,
} from '../db/queries.js';

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

async function deleteItemPost(req, res) {
	const id = req.params.id;
	await deleteFlower(id);
	res.redirect('/');
}

export { getInventory, addNewItemPost, deleteItemPost };
