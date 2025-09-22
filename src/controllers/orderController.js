// import OrderCollection from '../db/models/order.js';

// export const addOrderController = async (req, res) => {
//   const data = await OrderCollection.create(req.body);
//   console.log(req.body);
//   res.status(201).json(data);
// };
// src/controllers/orderController.js
import createHttpError from 'http-errors';
import OrderCollection from '../db/models/order.js';
// import OrderCollection from '../db/models/order.js';

export const addOrderController = async (req, res, next) => {
  try {
    const { orders, ...formData } = req.body;

    if (!orders || orders.length === 0) {
      throw createHttpError(400, 'orders_empty');
    }

    const order = await OrderCollection.create({
      ...formData,
      orders,
    });

    console.log('Received order data:', req.body);

    res.status(201).json({
      status: 201,
      message: 'order_created',
      data: order,
    });
  } catch (error) {
    next(error);
  }
};
