import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { captureException } from "@sentry/browser";

import { GET_MESSAGE } from "../gql/message.graphql";

import "../styles/messages.css";

export default function Messages() {
  const { data, loading, error } = useQuery(GET_MESSAGE, {
    fetchPolicy: "network-only"
  });

  if (loading) {
    return <div className="kym-box">Loading...</div>;
  }

  if (data === undefined || error) {
    captureException(error);
    return <div className="kym-box">Error, something went wrong.</div>;
  }

  if (data === []) {
    return (
      <div className="kym-box">No message yet. You can be the first one!</div>
    );
  }

  return (
    <section className="kym-messages">
      {data.message.map(({ id, from, to, message }) => (
        <div key={id} className="kym-message">
          <p>From : {from}</p>
          <p>To : {to}</p>
          <p>Message : {message}</p>
        </div>
      ))}
    </section>
  );
}
