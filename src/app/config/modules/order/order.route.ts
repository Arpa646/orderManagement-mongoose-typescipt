import express from 'express'
import { ordersControllers } from './order.controller';


const router=express.Router();
router.post('/', ordersControllers.createOrder);
router.get('/', ordersControllers.getAllorder);

//router.delete('/:studentId', StudentControllers.deleteStudent);
export const orderRoute=router;