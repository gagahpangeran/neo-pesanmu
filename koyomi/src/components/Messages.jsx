import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { GET_MESSAGE } from "../gql/message.graphql";

export default function Messages() {
  const { data, loading } = useQuery(GET_MESSAGE, {
    fetchPolicy: "network-only"
  });

  if (loading) {
    return <>Loading...</>;
  }

  if (data === undefined) {
    return <>Error</>;
  }

  return <div>Halo</div>;
}
