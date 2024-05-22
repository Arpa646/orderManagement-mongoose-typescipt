

import { Schema, model } from 'mongoose';
import { OrderData } from './order.interface';

const orderSchema = new Schema<OrderData>({
    email: {
        type: String
    
    },
    productId: {
        type: String
      
    },
    price: {
        type: Number
       
    },
    quantity: {
        type: Number
        
    }
});

export const OrdertModel = model<OrderData>('Order',orderSchema );


