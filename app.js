import express, { json } from "express";
import cors from 'cors'
import { PORT } from "./src/utils/config.js";
import { loginRoutes } from "./src/routes/loginRoutes.js";
import { teamsRoutes } from "./src/routes/teamsRoutes.js";
import { playerRoutes } from "./src/routes/playerRoutes.js";
const app = express()
app.use(json())
app.disable('x-powered-by')
app.use(cors())


app.listen(PORT || 3000, () => console.log(`server listening on port http://localhost:${PORT}`))

app.get("/", (req, res) => { res.send("prueba de servidor") })

app.use("/login", loginRoutes)
app.use("/equipos", teamsRoutes)
app.use("/jugadores", playerRoutes)

export default app;