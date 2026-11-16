import { pool } from './pool.js';

async function getAllFlowers() {
	const { rows } = await pool.query(`
    SELECT 
    flowers.id as id,
    flowers.name as flower, 
    category.name as category, 
    color.name as color, 
    arrangement.name as arrangement, 
    (category.price_unit * arrangement.quantity) * arrangement.price_markup 
    as price from flowers 
      LEFT JOIN category on category_id = category.id
      LEFT JOIN color on color_id = color.id
      LEFT JOIN arrangement on arrangement_id = arrangement.id
    `);
	return rows;
}

async function createFlower(name, category_id, color_id, arrangement_id) {
	await pool.query(
		`INSERT INTO flowers(name, category_id, color_id, arrangement_id) 
    VALUES ($1, $2, $3, $4)`,
		[name, category_id, color_id, arrangement_id],
	);
}

async function deleteFlower(id) {
	await pool.query(
		`DELETE from flowers
    WHERE id = $1`,
		[id],
	);
}

async function getFlowerBySearch(name) {
	await pool.query(
		`
    SELECT 
    flowers.name as flower, 
    category.name as category, 
    color.name as color, 
    arrangement.name as arrangement, 
    (category.price_unit * arrangement.quantity) * arrangement.price_markup 
    as price from flowers 
      LEFT JOIN category on category_id = category.id
      LEFT JOIN color on color_id = color.id
      LEFT JOIN arrangement on arrangement_id = arrangement.id
      WHERE flowers.name = $1
      `,
		[name],
	);
}

async function getFlowerById(id) {
	const { rows } = await pool.query(
		`
    SELECT * from flowers 
    WHERE flowers.id = $1
      `,
		[id],
	);
	return rows;
}

async function updateFlower(name, category_id, color_id, arrangement_id, id) {
	const { rows } = await pool.query(
		`
    UPDATE flowers 
    SET name = $1,
    category_id = $2,
    color_id = $3,
    arrangement_id = $4
    WHERE id = $5
      `,
		[name, category_id, color_id, arrangement_id, id],
	);
	return rows;
}

async function getFixedTables() {
	const cat = await pool.query(`SELECT * FROM category;`);
	const color = await pool.query(`SELECT * FROM color;`);
	const arrange = await pool.query(`SELECT * FROM arrangement;`);

	return { cat: cat.rows, color: color.rows, arrange: arrange.rows };
}

export {
	getAllFlowers,
	createFlower,
	deleteFlower,
	getFlowerBySearch,
	getFlowerById,
	getFixedTables,
	updateFlower,
};
