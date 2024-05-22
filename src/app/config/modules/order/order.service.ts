import { ProductModel } from "../product/product.model";
import { OrderData } from "./order.interface";
import { OrdertModel } from "./order.model";

const createOrderIntoDb = async (order: OrderData,orderproductId:string) => {


  //  const product = await ProductModel.findById(orderproductId);
   const product = await ProductModel.findOne({ productId: orderproductId });
   if (!product) {
    throw new Error('Product not found');
}

if (product.inventory.quantity < order.quantity) {
  throw new Error('Insufficient quantity in stock');
}


console.log('matches produt',product)



    const result = await OrdertModel.create(order);
    product.inventory.quantity -= order.quantity;
    product.inventory.inStock = product.inventory.quantity > 0;
    await product.save();



    return result;





  };

  const getAllOrderFromDB = async (email: string) => {
  
  
        // Check if the email is provided and it's a valid email format
      
        if (email) {
            const orders = await OrdertModel.find({ email });
            return orders;
        }
        else{
            const orders = await OrdertModel.find();
            return orders; 
        }
      
        // Query orders by email
      
      };
      




  export const OrderServices = {
    createOrderIntoDb,
    getAllOrderFromDB,
  };
  