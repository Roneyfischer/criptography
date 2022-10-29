//imports
import app from "./src/0.config/server/app.js";
import * as dotenv from "dotenv";

console.log(process.env.SERVER_PORT);
//to run the server
app.listen(process.env.SERVER_PORT, () => {
  console.log(`server is running on port "${process.env.SERVER_PORT}"`);
});
