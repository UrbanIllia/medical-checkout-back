import express from 'express';
import cors from 'cors';
import { logger } from './src/midlewares/logger.js';
import { errorHandler } from './src/midlewares/errorHandler.js';
import { notFoundHandler } from './src/midlewares/notFoundHandler.js';
import OrderRouter from './src/routers/order-router.js';

export const startServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(logger);

  app.use('/order', OrderRouter);

  app.use(errorHandler);
  app.use(notFoundHandler);

  const port = Number(process.env.PORT) || 3000;

  app.listen(port, () => console.log(`Server running on ${port} port`));
};
