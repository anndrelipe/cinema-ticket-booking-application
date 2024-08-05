import express from "express";
import connection from "../db/connection.js";
import movieRoutes from "../routes/movieRoutes.js";
import retornaConexaoMysql from "../db/sqlConnection.js";
import sessoesRouter from "../routes/sessoesRoutes.js";

const app = express();
app.use(express.json(), movieRoutes, sessoesRouter);

const sqlConnection = await retornaConexaoMysql();
const db = await connection();

sqlConnection.connect((err) => {
    if (err) {
        console.log("Erro ao tentar conectar com o Mysql.", err);
        return
    }
    console.log("Sucesso! Conectado com o Mysql.");
})

db.on('error', () => {
    console.log("Erro ao conectar com o MongoDb!");
});

db.once("open", () => {
    console.log("Sucesso! Conectado ao MongoDb.")
})


app.get('/', (req, res) => {
    res.status(200).send("Tudo Show");
});

export default app