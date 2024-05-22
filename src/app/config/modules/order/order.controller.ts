import express, { Request, Response } from 'express';


import mongoose from 'mongoose';
import { OrderServices } from './order.service';



const createOrder= async (req: Request, res: Response) => {
    try {
      const order = req.body;
      console.log('from body', order);
    
  
      const result = await OrderServices.createOrderIntoDb(order);
  
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


  const getAllorder = async (req: Request, res: Response) => {
    try {
        const email=req.query.email
    console.log(typeof(email))
      const result = await OrderServices.getAllOrderFromDB(email);
  
      res.status(200).json({
        success: true,
        message: 'Students are retrieved succesfully',
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message || 'something went wrong',
        error: err,
      });
    }
  };

  export const ordersControllers = {
    createOrder,getAllorder
  };