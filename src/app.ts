import express from "express";
import { connection } from "./server";
import router from "./routes/main";
import path from "path";
import { config } from "dotenv";

config();

const app = express();
console.log("THIS IS ENV: ", process.env.PORT);
console.log("THIS IS ENV: ", process.env.SERVER);
console.log("THIS IS ENV: ", process.env.ADMIN);
console.log("THIS IS ENV: ", process.env.PASSWORD);

const port = process.env.PORT || 3000;

app.use(router);

connection();

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
