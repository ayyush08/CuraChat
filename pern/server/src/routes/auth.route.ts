import { Router } from "express";
import { login, signup,logout,getMe  } from "../controllers/auth.controller.js";
import protectRoute from "../middlewares/protectRoute.js";
const router = Router()


router.get('/me',protectRoute,getMe)
router.post('/login',login)
router.post('/signup',signup)
router.post('/logout',logout)

export default router