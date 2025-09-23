import createHttpError from 'http-errors';
import OrderCollection from '../db/models/cart.js';
import { getOrder, getOrderById } from '../services/orders.js';

// export const addOrderController = async (req, res, next) => {
//   try {
//     const { orders, totalPrice, ...formData } = req.body;

//     if (!orders || orders.length === 0) {
//       throw createHttpError(400, 'orders_empty');
//     }

//     const order = await OrderCollection.create({
//       ...formData,
//       orders,
//       totalPrice,
//     });

//     console.log('Received order data:', req.body);

//     res.status(201).json({
//       status: 201,
//       message: 'order_created',
//       data: order,
//     });
//   } catch (error) {
//     next(error);
//   }
// };
export const addOrderController = async (req, res, next) => {
  try {
    const { orders, totalPrice, ...formData } = req.body;

    if (!orders || orders.length === 0) {
      throw createHttpError(400, 'Orders cannot be empty');
    }

    // Валидация totalPrice
    if (
      !totalPrice ||
      typeof totalPrice !== 'object' ||
      totalPrice.subTotal == null ||
      totalPrice.shippingFee == null ||
      totalPrice.total == null
    ) {
      throw createHttpError(400, 'Invalid total price data');
    }

    const order = await OrderCollection.create({
      ...formData,
      orders,
      totalPrice: {
        subTotal: totalPrice.subTotal,
        shippingFee: totalPrice.shippingFee,
        total: totalPrice.total,
      },
    });

    console.log('Received order data:', {
      orderId: order._id,
      email: formData.email,
      ordersCount: orders.length,
      totalPrice: totalPrice.subTotal,
      shippingFee: totalPrice.shippingFee,
      total: totalPrice.total,
    });

    res.status(201).json({
      status: 201,
      message: 'Order created successfully',
      data: order,
    });
  } catch (error) {
    console.error('Order creation error:', {
      error: error.message,
      email: req.body.email,
      url: req.url,
      totalPrice: req.body.totalPrice,
    });
    next(error);
  }
};

export const getOrderController = async (req, res, next) => {
  const data = await getOrder();
  res.json({
    status: 200,
    message: 'Success you have all orders',
    data,
  });
};

export const getOrderByIdController = async (req, res, next) => {
  const { id } = req.params;
  const data = await getOrderById(id);
  if (!data) throw createHttpError(404, `Order with ${id} not found`);
  res.json({
    status: 200,
    message: 'Everything success. You have your one order',
    data,
  });
};
