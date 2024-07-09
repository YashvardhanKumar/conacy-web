import { createHttpLink, from, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getMainDefinition } from "@apollo/client/utilities";
import { handleValid } from "../apis/submitActions";
import { onError } from "@apollo/client/link/error";

const httpLink = createHttpLink({
  uri: `/api/graphql`,
  credentials: "same-origin",
  fetchOptions: { cache: "no-store" },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:3001/graphql",
  })
);

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  // console.log(_, headers);
  if (localStorage.getItem("isAuthenticated") == "Yes") {
    await handleValid();
  }
  // console.log(_, headers);

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
    },
  };
});
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authLink, errorLink, splitLink]),
});

export function ApolloWrapper(props: any) {
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
