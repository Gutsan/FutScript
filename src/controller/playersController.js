import { playersModel } from "../models/playersModels.js"

export class playerController {

    static async getPlayers(req, res) {
        try {
            const idPlayer = req.body.id
            if (idPlayer) {
                const player = await playersModel.getPlayers(idPlayer)
                res.status(200).send(player)
            }
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: "Ha ocurrido un error inesperado, intente mas tarde" })
        }
    }
    static async createPlayer(req, res) {
        try {
            const validToken = req.validToken
            if (validToken) {
                const { id_equipo, name, position, edad } = req.body
                const player = await playersModel.createPlayers(id_equipo, name, position, edad)
                res.status(200).send(player)
            } else {
                res.status(401).send({ message: "Usuario no tiene permiso para crear nuevos teams, contactese con administrador" })
            }

        } catch (error) {
            console.log(error)
            res.status(500).send({ message: "Ha ocurrido un error inesperado, intente mas tarde" })
        }
    }
}