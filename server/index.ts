// Import the express in typescript file
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
require('dotenv').config();

import counsellingServiceRouter from './controllers/counsellingService.controller';

// Initialize the express engine
const app: express.Application = express();

// Take a port 3000 for running server.
const port: number = 4000;

// setup cors to allow client http access
app.use(cors({
  origin: '*'
}))

// Routes

// Handling '/' Request
app.get('/', (_req, _res) => {
  // test data to serve
  const groceries = [
    {
      "id": "1",
      "item": "Cauliflower"
    },
    {
      "id": "2",
      "item": "Eggs"
    }
  ]
	_res.send(groceries);
});

app.use('/counselling-services', counsellingServiceRouter);

// Server setup
app.listen(port, () => {
	console.log(`TypeScript with Express http://localhost:${port}/`);
});

// connect to mdb
let dbStr:string = process.env.MONGO_DB_CONNECT_STR as string;
console.log(dbStr);

mongoose.connect( dbStr,
  () => {

    console.log('connected to db')
})
