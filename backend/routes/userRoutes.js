import express from "express";
const router  = express.Router();
import { register, login, getUserProfile } from '../controller/userController.js';
import { userProtect } from '../middleware/authMiddleware.js'; 


router.route('/register').post(register);
router.route('/login').post(login);
router.route('/profile').get(userProtect ,getUserProfile)



export default router;