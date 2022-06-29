import express from "express";
const router  = express.Router();
import { register, login, getUserProfile } from '../controller/authController.js';
import { protect } from '../middleware/authMiddleware.js'; 


router.route('/register').post(register);
router.route('/login').post(login);
router.route('/profile').get(protect ,getUserProfile)



export default router;