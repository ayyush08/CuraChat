import { Router } from "express";
import { registerUser,login,getMyProfile } from "../controllers/user.controller.js";
import { multerUpload } from "../middlewares/multer.middlerware.js";

const router = Router();

router.post('/register',
    multerUpload.single('avatar')
    , registerUser);

router.post('/login', login);


// After here user must be authenticated to access the routes
router.get('/me', getMyProfile);
export default router