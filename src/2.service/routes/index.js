//imports
import express from "express";
import general from "./general.js";

const fRouter = (app) => {
  console.log("/");
  app.use("/", general);
};

export default fRouter;
