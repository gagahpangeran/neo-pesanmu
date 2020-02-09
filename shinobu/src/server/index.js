const express = require("express");
const graphqlHTTP = require("express-graphql");
const http = require("http");

const { IS_DEV } = require("../config/const");
const { schema, rootSchema } = require("../gql");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: rootSchema,
    graphiql: IS_DEV
  })
);

const server = http.createServer(app);

module.exports = server;
