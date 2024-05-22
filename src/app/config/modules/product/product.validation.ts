const Joi = require('joi');

// Define Joi schema for variant
const variantSchema = Joi.object({
    type: Joi.string().required(),
    value: Joi.string().required()
});

// Define Joi schema for inventory
const inventorySchema = Joi.object({
    quantity: Joi.number().integer().min(0).required(),
    inStock: Joi.boolean().required()
});

// Define Joi schema for product
const productSchema = Joi.object({
    productId: Joi.string().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().positive().required(),
    category: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
    variants: Joi.array().items(variantSchema).required(),
    inventory: inventorySchema.required(),
    isDeleted: Joi.boolean().default(false)
});

export default productSchema;
