import { Request, Response } from 'express';

import { OrderServices } from './order.service';
import orderSchema from './order.validation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;

    const orderproductId = order.productId;
    console.log('proid', orderproductId);
    const { error, value } = orderSchema.validate(order);
    console.log(error, value);
    const result = await OrderServices.createOrderIntoDb(value, orderproductId);

    console.log(result);

    res.status(200).json({
      success: true,
      message: 'order is placed succesfully',
      data: result,
    });
  } catch (error: unknown) {
    if ((error as Error).message === 'Insufficient quantity in stock') {
      return res.status(400).json({
        success: false,
        message: 'Insufficient quantity available in inventory',
      });
    }

    if ((error as Error).message === 'Product not found') {
      return res.status(400).json({
        success: false,
        message: 'product not found',
      });
    }

    // Handle other errors
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'product not found',
    });
  }
};

const getAllorder = async (req: Request, res: Response) => {
  try {
    // const email = req.query.email;
    const email: string | undefined = req.query.email as string;
    console.log(typeof email);

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
  createOrder,
  getAllorder,
};
