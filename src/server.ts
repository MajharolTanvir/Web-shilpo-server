/* eslint-disable no-console */
import mongoose from 'mongoose';
import app from './app';
import config from './config/config';
import { errorLogger, logger } from './Shared/logger';
import { Server } from 'http';

process.on('uncaughtException', error => {
  errorLogger.error(error);
  process.exit(1);
});

let server: Server;

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info('😎 Successfully connected to MongoDB');

    server = app.listen(config.port, () => {
      logger.info(`🤗 Application listening on port ${config.port}`);
    });
  } catch (error) {
    errorLogger.error('😣 Failed to connect the database', error);
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

bootstrap();

process.on('SIGTERM', () => {
  logger.info('SIGTERM is retrieved');
  if (server) {
    server.close();
  }
});
