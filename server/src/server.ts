/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

async function main() {
  try {
    console.log('Connecting to MongoDB...');
    
    // Test primary database connection
    if (config.database_url) {
      await mongoose.connect(config.database_url, { serverSelectionTimeoutMS: 10000 });
      console.log('Primary database connected successfully!');
    } else {
      throw new Error('Primary database URL is undefined!');
    }

    // Test secondary database connection (if applicable)
    if (config.second_database_url) {
      const secondaryConnection =await mongoose.createConnection(config.second_database_url, { serverSelectionTimeoutMS: 10000 });
      //console.log(secondaryConnection);
      console.log('Secondary database connected successfully!');
    }

    // Start the server
    app.listen(config.port, () => {
      console.log(`App is listening on port ${config.port}`);
    });
  } catch (err) {
    console.error('Failed to start the application:', err);
  }
}

main();
