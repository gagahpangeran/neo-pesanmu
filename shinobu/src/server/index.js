const express = require("express");
const graphqlHTTP = require("express-graphql");
const http = require("http");

const { IS_DEV } = require("../config/const");
const { schema, rootSchema } = require("../gql");
const db = require("../config/db");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: rootSchema,
    graphiql: IS_DEV
  })
);

db.on("error", err => console.log("Connection database error", err));

db.once("open", () => console.log("Database connected..."));

const server = http.createServer(app);

module.exports = server;
