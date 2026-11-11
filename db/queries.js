import { pool } from './pool';

async function getAllFlowers() {
	const { rows } = pool.query(`
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
    `);
	return rows;
}

async function createFlower({ name, category_id, color_id, arrangement_id }) {
	pool.query(
		`INSERT INTO flowers(name, category_id, color_id, arrangement_id) 
    VALUES ($1, $2, $3, $4)`,
		[name, category_id, color_id, arrangement_id],
	);
}

async function deleteFlower(id) {
	pool.query(
		`DELETE from flowers
    WHERE id = VALUE($1)`,
		[id],
	);
}
