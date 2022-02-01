// Import the express in typescript file
import express from 'express';

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

// Server setup
app.listen(port, () => {
	console.log(`TypeScript with Express http://localhost:${port}/`);
});
