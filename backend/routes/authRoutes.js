import express from "express";
const router  = express.Router();
import { register, login, getUserProfile, getUsers, updateAuthProfile, getUserById } from '../controller/authController.js';
import { protect, adminProtect } from '../middleware/authMiddleware.js'; 


router.route('/register').post(register);
router.route('/login').post(login);
router.route('/profile').get(protect, getUserProfile).put(protect, updateAuthProfile)
router.route('/users').get(protect, adminProtect, getUsers)
router.route('/view/:id').get(protect, adminProtect, getUserById)


export default router;