import express from 'express'
import { productsControllers } from './product.controller';
const router=express.Router();

router.get('/', productsControllers.getAllproducts);
//will cal co nteoller function
router.post('/createProduct',productsControllers.createProduct);

router.get('/:productId', productsControllers.getSingleProduct);
router.delete('/:productId', productsControllers.deleteProduct);
router.put('/:productId', productsControllers.updateProduct);

//router.delete('/:studentId', StudentControllers.deleteStudent);
export const productRoute=router;