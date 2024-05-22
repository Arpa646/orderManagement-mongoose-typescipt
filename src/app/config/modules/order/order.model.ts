

import { Schema, model } from 'mongoose';
import { OrderData } from './order.interface';

const orderSchema = new Schema<OrderData>({
    email: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

export const OrdertModel = model<OrderData>('Order',orderSchema );


