import jwt from "jsonwebtoken"
import { adminModel } from "../models/adminModels.js"
import { KEY_TOKEN } from "../utils/config.js"


export const validateAdmin = async (req, res, next) => {
    const { username, password } = req.body
    const [user] = await adminModel.getAdmin(username)
    const isPassword = (password === user.password)
    req.validAdmin = user && isPassword
    next()
}

export const validateToken = async (req, res, next) => {

    const authorization = req.header("Authorization")
    if (!authorization) {
        res.status(401).send({ message: "Token no ingresado" })
    } else {
        try {
            const token = authorization.split("Bearer ")[1]
            const validToken = jwt.verify(token, KEY_TOKEN)
            req.validToken = validToken
            next()
        }
        catch (error) {
            console.log(error)
            res.status(401).send({ message: "Token invalido" })
        }
    }
}
