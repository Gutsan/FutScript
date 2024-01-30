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

export class teamsModel {
    static async getAllTeams() {
        const query = 'SELECT*FROM equipos'
        const { rows } = await pool.query(query)
        return rows
    }
    static async getTeams(id) {
        const query = 'SELECT*FROM equipos WHERE id=$1'
        const values = [id]
        const { rows } = await pool.query(query, values)
        return rows
    }
    static async createTeams(name) {
        const query = 'INSERT INTO equipos VALUES(DEFAULT,$1)'
        const values = [name]
        const { rows } = await pool.query(query, values)
        return (rows)
    }
    static async getPlayersByTeams(id_equipo) {
        const query = 'SELECT jugadores.name, posiciones.name AS posicion FROM (SELECT name, position FROM jugadores WHERE id_equipo=$1) AS jugadores INNER JOIN posiciones ON jugadores.position=posiciones.id'
        const values = [id_equipo]
        const { rows } = await pool.query(query, values)
        return rows
    }
}