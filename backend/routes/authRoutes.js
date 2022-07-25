import express from "express";
const router  = express.Router();
import { register, login, getUserProfile, getUsers, updateAuthProfile } from '../controller/authController.js';
import { protect, adminProtect } from '../middleware/authMiddleware.js'; 


router.route('/register').post(register);
router.route('/login').post(login);
router.route('/profile').get(protect, getUserProfile).put(protect, updateAuthProfile)
router.route('/users').get(protect, adminProtect, getUsers)



export default router;