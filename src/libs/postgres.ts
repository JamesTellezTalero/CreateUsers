const { Pool } = require('pg')

export class PgConnect {
    async connect(){
        const pool = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'users',
            password: 'root',
            port: 5432,
        });
        const client = await pool.connect();
        return client;
    }
}
