// Import the express in typescript file
import express from 'express';
import mongoose from 'mongoose';
import { CounsellingService } from './models/counsellingService';
// Initialize the express engine
const app: express.Application = express();

// Take a port 3000 for running server.
const port: number = 4000;

// setup cors to allow client http access
const cors = require('cors');
app.use(cors({
  origin: '*'
}))

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

// Handling '/' Request
app.get('/', (_req, _res) => {
	_res.send(groceries);
});

app.get('/mongo', (_req, _res) => {
  // create new counselling service model
	_res.send(CounsellingService.build({serviceName: "UBC"}));
});

// Server setup
app.listen(port, () => {
	console.log(`TypeScript with Express http://localhost:${port}/`);
});

// connect to mdb
mongoose.connect('mongodb://???',
  () => {
    console.log('connected to db')
})