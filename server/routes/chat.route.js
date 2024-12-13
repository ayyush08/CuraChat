import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

const router = Router();




router.use(isAuthenticated)

export default router