import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { addOrderController } from '../controllers/orderController.js';

const OrderRouter = Router();

OrderRouter.post('/', ctrlWrapper(addOrderController));

export default OrderRouter;
