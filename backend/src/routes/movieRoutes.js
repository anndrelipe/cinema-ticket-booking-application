import express from "express";
import movieController from "../controllers/moviesController.js";

const movieRoutes = express.Router();

movieRoutes.get('/api/movies', movieController.getAllMovies);

export default movieRoutes