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




/**
 * 
 * @desc    Fetch all products
 * @method  GET
 * @route   /api/products
 * @access  Pubilc
 */

 const searchProducts = asyncHandler(async (req, res) => {

    const pageSize = 3
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

})

export { getProducts, getProductById, searchProducts };