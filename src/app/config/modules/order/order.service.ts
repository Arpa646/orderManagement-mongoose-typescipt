import { OrderData } from "./order.interface";
import { OrdertModel } from "./order.model";

const createOrderIntoDb = async (order: OrderData) => {
    const result = await OrdertModel.create(order);
  
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
  