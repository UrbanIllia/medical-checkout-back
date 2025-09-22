
import { model, Schema } from 'mongoose';

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name too short'],
      maxlength: [50, 'Name too long'],
      match: [/^[a-zA-Z\s'-]+$/, 'Invalid name format'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      maxlength: [100, 'Email too long'],
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email format'],
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
      trim: true,
      minlength: [6, 'Phone too short'],
      maxlength: [20, 'Phone too long'],
      match: [/^\+?[\d\s-]{6,20}$/, 'Invalid phone format'],
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
      trim: true,
      minlength: [5, 'Address too short'],
      maxlength: [100, 'Address too long'],
      match: [/^[a-zA-Z0-9\s,.-]+$/, 'Invalid address format'],
    },
    city: {
      type: String,
      required: [true, 'City is required'],
      trim: true,
      minlength: [2, 'City too short'],
      maxlength: [50, 'City too long'],
      match: [/^[a-zA-Z\s-]+$/, 'Invalid city format'],
    },
    zip: {
      type: String,
      required: [true, 'Zip code is required'],
      trim: true,
      minlength: [3, 'Zip too short'],
      maxlength: [10, 'Zip too long'],
      match: [/^[a-zA-Z0-9\s-]+$/, 'Invalid zip format'],
    },
    country: {
      type: String,
      required: [true, 'Country is required'],
      trim: true,
      minlength: [2, 'Country too short'],
      maxlength: [50, 'Country too long'],
      match: [/^[a-zA-Z\s-]+$/, 'Invalid country format'],
    },
    shippingMethod: {
      type: String,
      required: [true, 'Shipping method is required'],
      enum: {
        values: ['Odeon Express', 'Cipay Jet', 'Gorgom Express', 'Eunioa Fast'],
        message: 'Invalid shipping method',
      },
    },
    paymentMethod: {
      type: String,
      required: [true, 'Payment method is required'],
      enum: {
        values: ['Credit Card', 'Paypal'],
        message: 'Invalid payment method',
      },
    },
    promocode: {
      type: String,
      trim: true,
      default: '',
    },
    orders: [
      {
        id: {
          type: Number,
          required: [true, 'Order item ID is required'],
        },
        name: {
          type: String,
          required: [true, 'Order item name is required'],
          trim: true,
          minlength: [2, 'Order item name too short'],
          maxlength: [100, 'Order item name too long'],
        },
        description: {
          type: String,
          required: [true, 'Order item description is required'],
          trim: true,
          minlength: [2, 'Order item description too short'],
          maxlength: [200, 'Order item description too long'],
        },
        price: {
          type: Number,
          required: [true, 'Order item price is required'],
          min: [0, 'Price cannot be negative'],
        },
      },
    ],
    status: {
      type: String,
      enum: {
        values: ['pending', 'completed', 'cancelled'],
        message: 'Invalid status',
      },
      default: 'pending',
    },
  },
  {
    timestamps: true,
  },
);

const OrderCollection = model('order', orderSchema);

export default OrderCollection;
