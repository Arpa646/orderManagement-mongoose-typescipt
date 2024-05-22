import { Schema, model } from 'mongoose';
import { Product } from './product.interface';

const variantSchema = new Schema({
  type: String,
  value: String,
});

const inventorySchema = new Schema({
  quantity: Number,
  inStock: Boolean,
});

const productSchema = new Schema<Product>({

  name: { type: String },
  description: { type: String },
  price: { type: Number },
  category: { type: String },
  tags: { type: [String] },
  variants: { type: [variantSchema] },
  inventory: { type: inventorySchema },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});
export const ProductModel = model<Product>('Product', productSchema);
