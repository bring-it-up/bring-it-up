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

# Testing Endpoints Manually

To test the API during dev, you can use a REST client to send the requests and view the responses.

## VS Code REST Client Extension

[Link](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

After installing, open the `route.rest` file in VS Code and you should be able to see the request.

## Postman

[Link](https://www.postman.com/)

After installing, import a collection using the `bring-it-up.postman_collection.json` file. Note: This file is not currently fully up to date.