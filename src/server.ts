// Modules
import express, { Express } from 'express';
import dotenv from 'dotenv';

// Middleware
import cors from 'cors';

// Routes
import tweets from './routes/tweets.route';

// Configure server
dotenv.config();
const app: Express = express();

// Set up middleware
app.use(cors({ origin: ['http://localhost:3000', 'http://127.0.0.1'] }));
app.use(express.json());

// Set up routing
app.use('/api/v1/tweets', tweets);

export default app;
