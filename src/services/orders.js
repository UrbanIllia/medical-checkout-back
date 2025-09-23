import OrderCollection from '../db/models/cart.js';

export const addOrder = (payload) => OrderCollection.create(payload);
