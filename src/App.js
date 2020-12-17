import React, { } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {ApolloClient, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import ProtectedRoute from "./helpers/protectedRoute";
import Principal from './pages/principal'
import Error404 from "./pages/error404";
import login from './pages/login'
import { createHttpLink } from "apollo-link-http";

const link = createHttpLink({ uri: "http://localhost:4000/graphql" });

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  },
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Switch>
          <Route exact from="/" component={login} />
          <ProtectedRoute exact path="/inicio" component={Principal} />
          <Route path="*" component={Error404} />
        </Switch>
      </ApolloProvider>
    </Router>
  );
}

export default App;
