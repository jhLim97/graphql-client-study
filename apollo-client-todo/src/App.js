import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const client = new ApolloClient({
  uri: "https://sxewr.sse.codesandbox.io/",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <h2>My first Apollo app 🚀</h2>
      <AddTodo />
      <Todos />
    </ApolloProvider>
  );
};

export default App;
