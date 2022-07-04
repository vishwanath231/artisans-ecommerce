import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';


/**
 * 
 * @desc    Fetch all products
 * @method  GET
 * @route   /api/products
 * @access  Pubilc
 */

const getProducts = asyncHandler(async (req, res) => {

    const products = await Product.find({})
    res.status(200).json(products)
})




/**
 * 
 * @desc    Fetch all products
 * @method  GET
 * @route   /api/products
 * @access  Pubilc
 */

const getProductById = asyncHandler(async (req, res) => {

    const product = await Product.findById(req.params.id);
    
    if (!product) {
        res.status(404)
        throw new Error('Product not found!')
    }

    res.status(200).json(product)
})


export { getProducts, getProductById };