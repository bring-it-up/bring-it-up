# Running the Server

Before running the server, make sure you have a local `.env` file in this directory with the database connection string, defined as `MONGO_DB_CONNECT_STR`.

Run the server locally: `npm start`

# Running Tests

Before running tests, make sure you have a local `test.env` file in this directory with the database connection string, defined as `MONGO_DB_CONNECT_STR`. __The database specified in the connection string should be used for testing purposes only__. It's recommended to use a local MongoDB database when running your tests to prevent conflicts.

Run the tests using the command: `npm test`
