import AuthRouter from "./routes/auth.routes.js";

export default (app) => {
  app.use("/auth", AuthRouter);
};
