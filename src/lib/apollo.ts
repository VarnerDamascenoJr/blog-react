import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from 'isomorphic-unfetch';

const client = new ApolloClient({
    link: new HttpLink({
        uri:process.env.URL_CONTENT,
        headers:{
            Authorization: `Bearer ${process.env.AUTHORIZATION}`,
        },
        fetch,
    }),
    cache: new InMemoryCache(),
})

export default client;