import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

import { GRAPHQL } from "../config/const";

const link = createHttpLink({
  uri: GRAPHQL,
  credentials: "include",
  headers: {}
});

const cache = new InMemoryCache();

const client = new ApolloClient({ link, cache });

export default client;
