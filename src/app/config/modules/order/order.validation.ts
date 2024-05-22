
import Joi from'joi';
// Define Joi schema for order data
const orderSchema = Joi.object({
    email: Joi.string().email().required(),
    productId: Joi.string().required(),
    price: Joi.number().required(),
    quantity: Joi.number().integer().min(1).required()
});

// Function to validate order data using Joi schema


export default orderSchema;