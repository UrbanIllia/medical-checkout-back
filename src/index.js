import { initMongodbConnection } from './db/initMongodbConnection.js';
import { startServer } from './server.js';
// u77*huy4A*rDx4U Urban

const bootstrap = async () => {
  await initMongodbConnection();
  startServer();
};

bootstrap();
