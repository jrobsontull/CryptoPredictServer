// Module imports
import express, { Express } from 'express';
import dotenv from 'dotenv';

// Middleware imports
import cors from 'cors';

// Configure server
dotenv.config();
const app: Express = express();

// Set up middleware
app.use(cors({ origin: ['http://localhost:3000', 'http://127.0.0.1'] }));
app.use(express.json());

// Set up routing

export default app;
