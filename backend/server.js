import "dotenv/config";
import app from "./src/config/app.js";

const PORT = process.env.SERVER_PORT ?? 3000;
const HOST = process.env.SERVER_HOST ?? 'localhost';

app.listen(PORT, HOST, () => {
    console.log(`Server listen at http://${HOST}:${PORT}`);
});