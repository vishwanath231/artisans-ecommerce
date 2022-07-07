import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';
import Sample from '../models/sampleModel.js';
import Brand from '../models/brandModel.js';
import Category from '../models/categoryModel.js';

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

    const keyword = req.query.keyword ? 
        {
            name: {
                $regex: req.query.keyword,
                $options: 'i',
            },
        }:{}

    const count = await Product.countDocuments({ ...keyword })
    const products = await Product.find({ ...keyword })
        .limit(pageSize)
        .skip(pageSize * (page - 1))

    res.json({ products, page, pages: Math.ceil(count / pageSize) })

})


const createBrand = asyncHandler(async (req, res) => {
    
    const { brand , category } = req.body;

    const sampleData = new Sample({
        brand: brand,
        category: category
    })
    
    const brandData = new Brand({
        name: brand,
    })

    const categoryData = new Category({
        name: category,
    })

    const existBrand = await Brand.findOne({name: brand})
    if (!existBrand) {
        
        await brandData.save();
    }

    const existCategory = await Category.findOne({name: category})
    if (!existCategory) {

        await categoryData.save();
    }


    const savedSamples = await sampleData.save();

    res.status(200).json(savedSamples)
})


const getBrand = asyncHandler(async (req, res) => {

    const brands = await Brand.find({})

    res.status(200).json(brands)
})


const getCategory = asyncHandler(async (req, res) => {

    const categories = await Category.find({})

    res.status(200).json(categories)
})




export { getProducts, getProductById, searchProducts, createBrand, getBrand, getCategory};