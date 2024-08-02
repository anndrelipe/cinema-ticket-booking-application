import express from "express";
import SessaoController from "../controllers/sessoesController.js";

const sessoesRouter = express.Router()

sessoesRouter.get('/api/sessoes', SessaoController.teste);

export default sessoesRouter