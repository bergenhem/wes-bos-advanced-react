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

function MyApp({ Component, pageProps }) {
  const apolloClient = createApolloClient(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  )
};

// If any pages have getInitialProps, then wait until the props have been fetches
//   this is supposed to help with Apollo and Next.js
MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default MyApp;
