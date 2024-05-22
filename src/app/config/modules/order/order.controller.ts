import express, { Request, Response } from 'express';
import { ProductServices } from './product.service';

import mongoose from 'mongoose';



const createOrder= async (req: Request, res: Response) => {
    try {
      const order = req.body;
  
      // const {error,value }=studentvalidationSchema.validate(student);
      // console.log(error,value);
      console.log('from body', order);
  
      const result = await ProductServices.createOrderIntoDb(order);
  
      console.log(result);
  
      res
        .status(200)
        .json({
          success: true,
          message: 'order is placed succesfully',
          data: result,
        });
    } catch (err: any) {
      {
        res.status(500).json({
          success: false,
          message: err.message || 'something went wrong',
          error: err,
        });
      }
    }
  };


  export const productsControllers = {
    createOrder
  };