import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { getMyChats, newGroupChat } from "../controllers/chat.controller.js";

const router = Router();




router.use(isAuthenticated)

router.post('/new',newGroupChat)
router.get('/my',getMyChats)
export default router