const express = require("express");
const graphqlHTTP = require("express-graphql");
const http = require("http");
const cors = require("cors");

const { IS_DEV, ALLOWED_HOST } = require("../config/const");
const { schema, rootSchema } = require("../gql");
const db = require("../config/db");
const { getMessage } = require("../app");

const app = express();

app.use(cors({ origin: ALLOWED_HOST, credentials: true }));

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

const add = async () => {
  await getMessage();
};

add();

module.exports = server;
