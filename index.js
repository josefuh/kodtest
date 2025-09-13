import express from "express"; 
import { userRoutes } from "./routes/userRoutes.js";

const API_PATH = "api";
const port = 3000;

const app = express();

app.use(`/${API_PATH}`, userRoutes);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
