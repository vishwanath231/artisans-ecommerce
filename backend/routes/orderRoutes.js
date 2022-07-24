import express from "express";
const router  = express.Router();
import { addOrderItems, getMyOrders, getOrderById, createRazorpayOrder, upateOrderToPay, updateOrderToDelivered, allOrders } from "../controller/orderController.js";
import { adminProtect, protect } from '../middleware/authMiddleware.js';



router
.route('/')
.post(protect, addOrderItems)
.get(protect, adminProtect, allOrders)

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
.put(updateOrderToDelivered)



export default router;