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

export class playersModel {
    static async getPlayers(id) {
        const query = 'SELECT*FROM jugadores WHERE id=$1'
        const values = [id]
        const { rows } = await pool.query(query, values)
        return rows
    }
    static async createPlayers(id_equipos, name, position, edad) {
        const query = 'INSERT INTO jugadores VALUES(DEFAULT,$1,$2,$3,$4)'
        const values = [id_equipos, name, position, edad]
        const { rows } = await pool.query(query, values)
        return rows
    }
}