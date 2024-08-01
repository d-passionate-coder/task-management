import { Router } from "express";
import handleSignup from "../controllers/handleSignup.js";
import handleLogin from "../controllers/handleLogin.js";

const router = Router();

router.post("/", handleSignup, handleLogin);

export default router;
