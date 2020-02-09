const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    hello: String!
  }
`);

const rootSchema = {
  hello: () => "world"
};

module.exports = { schema, rootSchema };
