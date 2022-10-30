import express from "express";
import * as dotenv from "dotenv";
import fRouter from "./../../2.service/routes/index.js";
import cors from "cors";
dotenv.config(); //setting .env
const app = express();

app.use(
  cors({
    origin: process.env.CORS_URL_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

fRouter(app);
export default app;
