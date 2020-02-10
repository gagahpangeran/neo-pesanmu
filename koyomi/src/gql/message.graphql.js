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

export const ADD_MESSAGE = gql`
  mutation AddMessage($from: String!, $to: String!, $message: String!) {
    addMessage(from: $from, to: $to, message: $message) {
      id
      from
      to
      message
    }
  }
`;
