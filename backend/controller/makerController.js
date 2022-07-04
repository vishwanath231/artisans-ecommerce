import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';


const getProducts = asyncHandler(async (req, res) => {

    const products = await Product.find({user: req.user._id})
    res.status(200).json(products)
})


export { getProducts };