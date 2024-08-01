import { Router } from "express";
import handleLogout from "../controllers/handleLogout.js";

const router = Router();

router.get("/", handleLogout);

export default router;
