import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apollo';
import '../app/globals.css';
import { DefaultSeo } from 'next-seo';
import SEO from '../lib/next-seo.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
        <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;