/* eslint-disable react-hooks/exhaustive-deps */
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { useEffect } from "react";

function App() {
  const client = new ApolloClient({
    uri: "https://48p1r2roz4.sse.codesandbox.io",
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    client
      .query({
        query: gql`
          query GetRates {
            rates(currency: "USD") {
              currency
            }
          }
        `,
      })
      .then((result) => console.log(result));
  }, [client]);

  return <div className="App">하이</div>;
}

export default App;
