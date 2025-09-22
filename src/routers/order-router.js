import { Router } from 'express';
import { addOrderController } from '../controllers/orderController.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const OrderRouter = Router();

OrderRouter.post('/', ctrlWrapper(addOrderController));

export default OrderRouter;
