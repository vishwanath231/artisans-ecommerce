import express from "express";
const router  = express.Router();
import { addOrderItems, getMyOrders, getOrderById, createRazorpayOrder, upateOrderToPay, updateOrderToDelivered } from "../controller/orderController.js";
import { protect } from '../middleware/authMiddleware.js';

router
.route('/')
.post(protect, addOrderItems)

router
.route('/create-razorpay-order')
.post(protect, createRazorpayOrder)

router
.route('/myorders')
.get(protect, getMyOrders)

router
.route('/:id')
.get(protect, getOrderById)



router
.route('/:id/pay')
.put(protect, upateOrderToPay)

router
.route('/:id/deliver')
.put(protect, updateOrderToDelivered)


export default router;