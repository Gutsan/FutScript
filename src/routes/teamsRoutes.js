import express from 'express';
import { validateToken } from '../middlewares/validate.js';
import { teamsController } from '../controller/teamsController.js';

export const teamsRoutes = express.Router();

teamsRoutes.get("/", teamsController.getAllTeams)
teamsRoutes.get("/:teamID/jugadores", teamsController.getPlayersByTeams)
teamsRoutes.post("/", validateToken, teamsController.createTeams)