import { Router } from "express";
import { registerUser,login,getMyProfile, logout } from "../controllers/user.controller.js";
import { multerUpload } from "../middlewares/multer.middlerware.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

const router = Router();

router.post('/register',
    multerUpload.single('avatar')
    , registerUser);

router.post('/login', login);


router.use(isAuthenticated)
// After here user must be authenticated to access the routes
router.get('/me', getMyProfile);
router.get('/logout',logout)
export default router