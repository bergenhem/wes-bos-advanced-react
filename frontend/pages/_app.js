import Page from "../components/Page"
import NProgress from 'nprogress';
import Router from 'next/router';
import { createApolloClient } from '../lib/withData';
import { ApolloProvider } from '@apollo/client/react';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// TODO: Swap with our own
import '../components/styles/nprogress.css';

export default function MyApp({ Component, pageProps }) {
  const apolloClient = createApolloClient(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  )
};
