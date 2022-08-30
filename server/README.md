# Running the Server

Before running the server, make sure you have a local `.env` file in this directory with the database connection string, defined as `MONGO_DB_CONNECT_STR`.

To run the server locally:

```
cd server
npm install
npm start
```

# Running Tests

Before running tests, make sure you have a local `test.env` file in this directory with the database connection string, defined as `MONGO_DB_CONNECT_STR`. __The database specified in the connection string should be used for testing purposes only__. It's recommended to use a local MongoDB database when running your tests to prevent conflicts.

Run the tests using the command: `npm test`

## Unit Tests

Unit tests are in the `server/tests/unit` directory.

Run the unit tests: `npm run test:unit`

## Integration Tests

Integration tests are in the `server/tests/integration` directory.

Run the integration tests: `npm run test:int`

Our "integration" tests use a live database to test the functionality of the endpoints together. This is a bit more like "system" testing, but for our purposes it will get the job done.

# Testing Endpoints Manually

To test the API during dev, you can use a REST client to send the requests and view the responses.

## VS Code REST Client Extension

[Link](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

After installing, open the `route.rest` file in VS Code and you should be able to see the request.

## Postman

[Link](https://www.postman.com/)

After installing, import a collection using the `bring-it-up.postman_collection.json` file. Note: This file is not currently fully up to date.

# Other

## ESLint

Run `npm run lint -s` to manually run ESLint on all files .ts in ./server.