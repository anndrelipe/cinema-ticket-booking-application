import express from "express";
import connection from "../db/connection.js";
import movieRoutes from "../routes/movieRoutes.js";

const app = express();
app.use(express(), movieRoutes);

const db = await connection();

db.on('error', () => {
    console.log("Erro ao conectar com o banco de dados!");
});

db.once("open", () => {
    console.log("Sucesso! Conectado ao banco de dados.")
})


app.get('/', (req, res) => {
    res.status(200).send("Tudo Show");
});

export default app