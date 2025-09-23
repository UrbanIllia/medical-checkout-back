import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  addOrderController,
  getOrderByIdController,
  getOrderController,
} from '../controllers/orderController.js';

const OrderRouter = Router();

OrderRouter.post('/', ctrlWrapper(addOrderController));
OrderRouter.get('/', ctrlWrapper(getOrderController));
OrderRouter.get('/:id', ctrlWrapper(getOrderByIdController));

export default OrderRouter;
