import OrderCollection from '../db/models/order.js';

export const addOrder = (payload) => OrderCollection.create(payload);
