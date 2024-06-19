import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from 'isomorphic-unfetch';

const client = new ApolloClient({
    link: new HttpLink({
        uri:'https://graphql.contentful.com/content/v1/spaces/wae5kt6i2hgo',
        headers:{
            Authorization: `Bearer IGVIJb57-GmIGIkMJh2X9_PArbBInAjlUn6zrSMDYyM`,
        },
        fetch,
    }),
    cache: new InMemoryCache(),
})

export default client;