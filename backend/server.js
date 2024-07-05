import "dotenv/config";
import app from "./src/config/app.js";

app.listen(3000, "localhost", () => {
    console.log('Server listen at http://localhost:3000');
});