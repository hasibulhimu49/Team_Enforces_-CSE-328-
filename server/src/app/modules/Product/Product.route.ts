import express from 'express';
import { ProductControllers } from './Product.controller';

const router = express.Router();

// create or post a product
router.post('/create-product',
    ProductControllers.createProduct);

    
// get all products
router.get('/', ProductControllers.getAllProducts);

// get a single product
router.get('/:productId', 
    ProductControllers.getSingleProduct);

// delete a single product
router.delete('/:productId', 
    ProductControllers.deleteProduct);

// update a single product
router.put('/:productId', 
    ProductControllers.updateProduct);



export const ProductRoute = router;


