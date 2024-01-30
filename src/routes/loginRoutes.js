import express from 'express';
import { validateAdmin } from "../middlewares/validate.js"
import { adminController } from '../controller/adminController.js';

export const loginRoutes = express.Router();

loginRoutes.post("/", validateAdmin, adminController.login)