import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import ApolloClient from "../utils/apollo";
import Form from "../components/Form";
import Messages from "../components/Messages";

function App() {
  return (
    <ApolloProvider client={ApolloClient}>
      <Form />
      <Messages />
    </ApolloProvider>
  );
}

export default App;
