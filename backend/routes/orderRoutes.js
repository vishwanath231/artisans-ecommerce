import express from "express";
const router  = express.Router();
import { addOrderItems, getMyOrders } from "../controller/orderController.js";
import { protect } from '../middleware/authMiddleware.js';

router
.route('/')
.post(protect, addOrderItems)

router
.route('/myorders')
.get(protect, getMyOrders)


export default router;