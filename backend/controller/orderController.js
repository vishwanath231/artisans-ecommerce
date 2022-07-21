import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

const addOrderItems = asyncHandler(async (req, res) => {

    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body

    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No order items')
        return
        
    }else {
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        })
      
        const createdOrder = await order.save()
      
        res.status(201).json(createdOrder)
    }

})


/**
 * @description  Get logged in user orders
 * @route        GET /api/orders/myorders
 * @access       Private
 */

const getMyOrders = asyncHandler(async (req, res) => {

    const orders = await Order.find({ user: req.user._id })

    res.json(orders)
})


export { addOrderItems, getMyOrders };