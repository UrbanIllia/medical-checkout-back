import OrderCollection from '../db/models/order.js';

export const addOrder = (payload) => OrderCollection.create(payload);

export const getOrder = () => OrderCollection.find();

export const getOrderById = (id) => OrderCollection.findById(id);
