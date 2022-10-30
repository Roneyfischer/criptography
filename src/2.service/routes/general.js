import express from "express";
import Criptography from "./../../3.controller/class/Criptography.js";
import index from "./index.js";
import requestDriver from "./../../3.controller/requestDriver.js";

const general = express.Router();

general.post("/crypto", async (req, res) => {
  const process = await requestDriver(req.body);
  res.status(200).json({ return: `${process}` });
});

export default general;
