import express from 'express';
import { validateToken } from '../middlewares/validate.js';
import { playerController } from '../controller/playersController.js';


export const playerRoutes = express.Router();

playerRoutes.get("/", playerController.getPlayers)
playerRoutes.post("/", validateToken, playerController.createPlayer)