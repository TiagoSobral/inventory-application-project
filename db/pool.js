import { Pool } from 'pg';

// no value for now until online database is created
const database_url = '';

const pool = new Pool({
	connectionString: database_url,
});

export { database_url };
