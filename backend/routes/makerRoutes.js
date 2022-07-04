import express from 'express';
const router = express.Router();
import { getProducts } from '../controller/makerController.js';
import { protect, makerProtect } from '../middleware/authMiddleware.js';

router.route('/').get(protect, makerProtect, getProducts)


export default router;