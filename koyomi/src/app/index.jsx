import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import ApolloClient from "../apollo";
import Form from "../components/Form";
import Messages from "../components/Messages";

import "../styles/app.css";

function App() {
  return (
    <ApolloProvider client={ApolloClient}>
      <div className="wrapper">
        <h1>Neo Pesanmu</h1>
        <Form />
        <Messages />
      </div>
    </ApolloProvider>
  );
}

export default App;
