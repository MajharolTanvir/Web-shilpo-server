/* eslint-disable no-console */
import mongoose from 'mongoose';
import app from './app';
import config from './config/config';

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('Successfully connected to MongoDB');

    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`);
    });
  } catch (error) {
    console.log('Failed to connect the database', error);
  }
}

bootstrap();
