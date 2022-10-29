import express from "express";
import * as dotenv from "dotenv";
dotenv.config(); //setting .env
const app = express();

app.use(express.json);

export default app;
