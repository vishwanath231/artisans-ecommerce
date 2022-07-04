import express from "express";
const router  = express.Router();
import { register, login, getUserProfile, getUsers } from '../controller/authController.js';
import { protect, adminProtect, makerProtect } from '../middleware/authMiddleware.js'; 


router.route('/register').post(register);
router.route('/login').post(login);
router.route('/profile').get(protect ,getUserProfile)
router.route('/user').get(protect, adminProtect, getUsers)
router.route('/maker').get(protect, makerProtect, getUsers)



export default router;