import app from './server';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import { syncExists } from './utils/fileExists';

console.log('⚡️ [Server]: Starting up...');

// Check if .env exists
const envExists: boolean = syncExists('./.env');
if (envExists) {
  dotenv.config();
} else {
  console.error('⚡️ [Server]: No .env file. Exiting...');
  process.exit(1);
}

// Set up db connection
const dbUri: string = process.env.MONGODB_URI;
const mongoClient: MongoClient = new MongoClient(dbUri, {
  maxPoolSize: 30,
  writeConcern: { wtimeoutMS: 2500 },
});

// Establish db connection
mongoClient
  .connect()
  .catch((err: any) => {
    console.error('⚡️ [Server]: MongoDB connection error.');
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client: MongoClient) => {
    console.log('⚡️ [Server]: Connected to MongoDB.');

    // Start express server
    const port: number = parseInt(process.env.PORT, 10) || 8000;
    app.listen(port, () => {
      console.log('⚡️ [Server]: Backend running at http://localhost:' + port);
    });
  });
