import {
	createFlower,
	deleteFlower,
	getAllFlowers,
	getFixedTables,
	getFlowerById,
	getFlowerBySearch,
	organizeBy,
	updateFlower,
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

async function updateItemGet(req, res) {
	const id = req.params.id;
	const tables = await getFixedTables();
	const items = await getAllFlowers();
	const [update] = await getFlowerById(id);
	res.render('index', {
		category: tables.cat,
		color: tables.color,
		arrangement: tables.arrange,
		flower: items,
		update: update,
	});
}

async function updateItemPost(req, res) {
	const id = req.params.id;
	const name = req.body.name;
	const category = req.body.category;
	const color = req.body.color;
	const arrangement = req.body.arrangement;
	await updateFlower(name, category, color, arrangement, id);
	res.redirect('/');
}

async function searchItemGet(req, res) {
	const name = req.query.name;
	const flowers = await getFlowerBySearch(name);
	const tables = await getFixedTables();
	res.render('index', {
		category: tables.cat,
		color: tables.color,
		arrangement: tables.arrange,
		flower: flowers,
	});
}

async function orderFlowersGet(req, res) {
	const filter = req.query.order;
	const tables = await getFixedTables();
	const items = await organizeBy(filter);
	res.render('index', {
		category: tables.cat,
		color: tables.color,
		arrangement: tables.arrange,
		flower: items,
	});
}

export {
	getInventory,
	addNewItemPost,
	deleteItemPost,
	updateItemGet,
	updateItemPost,
	searchItemGet,
	orderFlowersGet,
};
