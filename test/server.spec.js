import request from "supertest";
import app from '../app.js';


describe("Revisión de rutas del servidor", () => {

    it('Administrador se logue correctamente (se obtiene token y code 200', async () => {
        const username = "admin"
        const passwword = "1234"
        const response = await request(app).post("/login").send({ username, passwword })
        const token = response.body.token
        const statusCode = response.statusCode
        expect(statusCode).toBe(200)
        expect(typeof token).toBe("string")
    })
    it('Al enviar credenciales incorrectas en la ruta POST /login se obtiene un status code 400', async () => {
        const username = "administrador"
        const passwword = "1234"
        const response = await request(app).post("/login").send({ username, passwword })
        const statusCode = response.statusCode
        expect(statusCode).toBe(400)
    })
})