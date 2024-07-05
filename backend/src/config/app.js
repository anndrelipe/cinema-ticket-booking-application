import express from "express";
const app = express();
app.use(express());

app.get('/', (req, res) => {
    res.status(200).send("Tudo Show");
});

export default app