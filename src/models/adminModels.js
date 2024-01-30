import pkg from 'pg';
const { Pool } = pkg;
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USER } from '../utils/config.js'

const pool = new Pool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    allowExitOnIdle: true
})

export class adminModel {
    static async getAdmin(username) {
        const query = 'SELECT * FROM administradores WHERE username=$1'
        const values = [username]
        const { rows } = await pool.query(query, values)
        return rows
    }
}