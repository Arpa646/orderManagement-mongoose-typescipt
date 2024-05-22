import { OrderData } from "./order.interface";
import { OrdertModel } from "./order.model";

const createOrderIntoDb = async (order: OrderData) => {
    const result = await OrdertModel.create(order);
  
    return result;
  };
  export const OrderServices = {
    createOrderIntoDb
  
  };
  