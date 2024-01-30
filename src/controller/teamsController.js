
import { teamsModel } from "../models/teamsModels.js"

export class teamsController {
    static async getAllTeams(req, res) {
        try {
            const teams = await teamsModel.getAllTeams()
            res.status(200).send(teams)
        } catch (error) {
            res.status(500).send({ message: "Ha ocurrido un error inesperado, intente mas tarde" })
        }
    }
    static async createTeams(req, res) {
        try {
            const validToken = req.validToken
            const { name } = req.body
            if (validToken) {
                const teams = teamsModel.createTeams(name)
                res.status(201).send(teams)
            } else {
                res.status(401).send({ message: "Usuario no tiene permiso para crear nuevos teams, contactese con administrador" })
            }
        } catch (error) {
            res.status(500).send({ message: "Ha ocurrido un error inesperado, intente mas tarde" })
        }
    }
    static async getPlayersByTeams(req, res) {
        try {
            const { teamID } = req.params
            const player = await teamsModel.getPlayersByTeams(teamID)
            res.status(200).send(player)
        } catch (error) {
            res.status(500).send({ message: "Ha ocurrido un error inesperado, intente mas tarde" })
        }
    }
}
