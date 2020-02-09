const { buildSchema } = require("graphql");

const { getMessage, addMessage } = require("../app");

const schema = buildSchema(`
  type Query {
    message: [Message!]
  }

  type Mutation {
    addMessage(from: String!, to: String!, message: String!): [Message!]
  }

  type Message {
    id: ID!
    from: String!
    to: String!
    message: String!
  }
`);

const rootSchema = {
  message: () => getMessage(),
  addMessage: args => addMessage(args)
};

module.exports = { schema, rootSchema };
