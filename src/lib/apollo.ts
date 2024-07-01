import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from 'isomorphic-unfetch';

const client = new ApolloClient({
    link: new HttpLink({
        uri: process.env.NEXT_PUBLIC_CONTENTFUL_URL,
        headers:{
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_AUTHORIZATION}`,
        },
        fetch,
    }),
    cache: new InMemoryCache(),
})

export default client;