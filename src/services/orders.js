import OrderCollection from '../db/models/cart.js';

export const addOrder = (payload) => OrderCollection.create(payload);

export const getOrder = () => OrderCollection.find();

export const getOrderById = (id) => OrderCollection.findById(id);
