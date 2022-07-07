import express from 'express';
const router = express.Router();
import { getProducts, getProductById, searchProducts, createBrand, getBrand, getCategory } from '../controller/productController.js';
// import { protect, adminProtect } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts)
router.route('/query').get(searchProducts)
router.route('/brand').post(createBrand).get(getBrand)
router.route('/category').get(getCategory)
router.route('/:id').get(getProductById)


export default router;