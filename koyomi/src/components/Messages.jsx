import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { GET_MESSAGE } from "../gql/message.graphql";

export default function Messages() {
  const { data, loading, error } = useQuery(GET_MESSAGE, {
    fetchPolicy: "network-only"
  });

  if (loading) {
    return <>Loading...</>;
  }

  if (data === undefined || error) {
    return <>Error</>;
  }

  return (
    <div>
      {data.message.map(({ id, from, to, message }) => (
        <ul key={id}>
          <li>From : {from}</li>
          <li>To : {to}</li>
          <li>Message : {message}</li>
        </ul>
      ))}
    </div>
  );
}
