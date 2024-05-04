import express from "express";
import c from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", c.login);
router.post("/register");

export default router;
