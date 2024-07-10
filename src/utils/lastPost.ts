


import { gql, useQuery } from '@apollo/client';

export const GET_LAST_POST = gql`
  query GetLastPost {
    postCollection(limit: 1, order: sys_publishedAt_DESC) {
        items {
            sys {
                id
            }
            ... on Post {
               title
               slug
               summary
               contentfulMetadata{
               tags {
                name
               }
          }
            }
        }
    }
  }

`;