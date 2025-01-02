import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { getMyChats, getMyGroups, newGroupChat } from "../controllers/chat.controller.js";

const router = Router();




router.use(isAuthenticated)

router.post('/new',newGroupChat)
router.get('/my',getMyChats)
router.get('/my/groups',getMyGroups)
export default router