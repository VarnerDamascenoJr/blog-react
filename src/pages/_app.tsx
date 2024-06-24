import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apollo';
import '../app/globals.css';
import { DefaultSeo } from 'next-seo';
import SEO from '../lib/next-seo.config';
import Auth0ProviderWithRouter from '@/lib/auth0Provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
   // <Auth0ProviderWithRouter>
    <ApolloProvider client={client}>
        <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ApolloProvider>
  //  </Auth0ProviderWithRouter>
  );
}

export default MyApp;