import { ApolloClient, ApolloLink, InMemoryCache, gql } from '@apollo/client';
import { ErrorLink } from '@apollo/client/link/error';
import { createUploadLink } from 'apollo-upload-client';
import { endpoint, prodEndpoint } from '../config';
import { create } from 'react-test-renderer';

function createApolloClient({ headers, initialState }) {
  const errorLink = new ErrorLink(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
      );
    }
    if (networkError) {
      console.log(`[Network error]: ${networkError}. Backend is unreachable. Is it running?`);
    }
  });

  const httpLink = createUploadLink({
    uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
    credentials: 'include',
    headers,
  });

  return new ApolloClient({
    link: ApolloLink.from([errorLink, httpLink]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // TODO: We will add this together!
            // allProducts: paginationField(),
          },
        },
      },
    }).restore(initialState || {}),
  });
}

export default createApolloClient;
