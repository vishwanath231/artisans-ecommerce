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


const getOrderById = asyncHandler(async (req, res) => {

    const order = await Order.findById(req.params.id).populate('user', 'name email phone')
   
    if (order) {
        res.status(200).json(order)
    }else{
        res.status(404)
        throw new Error('Order not found')
    }

})


const upateOrderToPay = asyncHandler(async (req, res) => {

    const order = await Order.findById(req.params.id)

    if (order) {
        order.isPaid = true
        order.paidAt = Date.now()
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.payer.email_address
        }


        const updatedOrder = await order.save()
        
        res.status(200).json(updatedOrder)

    } else {

        res.status(404)
        throw new Error('Order not found')
    }
}) 


const updateOrderToDelivered = asyncHandler(async (req, res) => {

    const order = await Order.findById(req.params.id)

    if (order) {
        
        order.isDelivered = true
        order.deliveredAt = Date.now()

        const updatedOrder = await order.save()

        res.status(200).json(updatedOrder)

    } else {

        res.status(404)
        throw new Error('Order not found')
    }
})



export { addOrderItems, getMyOrders, getOrderById, upateOrderToPay, updateOrderToDelivered };