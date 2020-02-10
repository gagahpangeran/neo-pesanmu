import gql from "graphql-tag";

export const GET_MESSAGE = gql`
  query GetMessage {
    message {
      id
      from
      to
      message
    }
  }
`;
