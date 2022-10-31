//arquivo para tratar todas as requisições enviadas para crypto
//seria possível também fazer diversas rotas para separar as funções (criptografia /argon2, /criptografiaAES, etc.),
//porém, creio que seria muito mais complicado, e desnecessário, alem de bloquear várias rotas no servidor

import express from "express";
import requestDriver from "../driver/requestDriver.js";

const general = express.Router();

general.post("/", async (req, res) => {  
  const process = await requestDriver(req.body);
  res.status(200).json({ return: `${process}` });

});

export default general;
