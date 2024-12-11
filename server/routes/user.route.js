import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { multerUpload } from "../middlewares/multer.middlerware.js";

const router = Router();

router.post('/register',
    multerUpload.single('avatar')
    , registerUser);


export default router