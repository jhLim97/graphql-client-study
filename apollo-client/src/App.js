import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import ExchangeRates from "./components/ExchangeRates";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <h2>My first Apollo app 🚀</h2>
      <ExchangeRates />
    </ApolloProvider>
  );
};

export default App;
