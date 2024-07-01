import { gql, useQuery } from "@apollo/client";
import { useState } from "react";


const GET_ALL_POSTS = gql`
    query GetAllPosts($limit: Int!, $skip: Int!){
        postCollection(limit: $limit, skip:$skip){
            total
            skip
            limit 
            items {
                sys {
                    id
                }
                ... on Post {
                    title
                    content
                }
            }
        }
    }
`

const AllPosts = () => {

    const [skip, setSkip] = useState(0);
    const limit = 3; // I put this value default

    const {loading, error, data, fetchMore} = useQuery(GET_ALL_POSTS, {variables:{limit, skip}});

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const {total, items} =  data.postCollection;

    const loadMorePosts = () => {
        fetchMore({
          variables: {
            skip: skip + limit,
          },
        }).then(() => {
          setSkip(skip + limit);
        });
      };

    return(
        <div>
            {items.map((post: any)=>(
                <div key={post.sys.id}>
                   <h2>{post.title}</h2>
                <div  dangerouslySetInnerHTML={{__html:post.content}}/>
        </div>))}

      {total > skip + limit && (
        <button onClick={loadMorePosts}>Carregar Mais</button>
      )}
        </div>
    )
}

export default AllPosts;