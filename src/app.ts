import express, { Application, Request, Response } from 'express';


const port = 3000;
import cors from 'cors';
import {  productRoute } from './app/config/modules/product/product.route';
import { orderRoute } from './app/config/modules/order/order.route';
// Create Express app
const app: Application = express();
app.use(express.json());
app.use(cors());

app.use('/api/products',productRoute)
app.use('/api/orders',orderRoute)


// Define a route handler for the root path
app.get('/', (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
});

// Start the server
export default app;
