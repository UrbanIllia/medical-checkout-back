import mongoose from 'mongoose';
import { getEnvVar } from '../utils/getEnvVar.js';

export const initMongodbConnection = async () => {
  try {
    const user = getEnvVar('MONGODB_USER');
    const password = getEnvVar('MONGO_PASSWORD');
    const url = getEnvVar('MONGO_URL');
    const db = getEnvVar('MONGO_DB');
    await mongoose.connect(
      `mongodb+srv://${user}:${password}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`,
    );
    console.log('Successfully connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    throw error;
  }
};
