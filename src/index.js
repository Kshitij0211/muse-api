import express from "express";
import dotenv from "dotenv";
dotenv.config();

import AuthRouter from "./routes/auth.routes.js";

const app = express();

app.use("/auth", AuthRouter);

app.listen(process.env.PORT, () => {
  console.info(`Server is running at ${process.env.PORT}`);
});
