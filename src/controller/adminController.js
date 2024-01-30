import jwt from "jsonwebtoken"
import { KEY_TOKEN } from "../utils/config.js"


export class adminController {
    static async login(req, res) {
        try {
            const validAdmin = req.validAdmin
            const { username } = req.body
            if (validAdmin) {
                const token = jwt.sign({ username }, KEY_TOKEN)
                res.status(200).send({ token })
            } else {
                res.status(400).send(({ message: "Email o contraseña incorrecta" }))
            }
        } catch (error) {
            res.status(500).send(({ message: "Ha ocurrido un error inesperado" }))
        }
    }
} 