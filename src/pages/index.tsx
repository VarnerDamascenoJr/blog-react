import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import styled from 'styled-components';

const PostLink = styled.a`
  color: #333;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const GET_POSTS = gql`
  query GetPosts {
    entryCollection {
      items {
        sys {
          id
        }
        ... on Post {
          title
          slug
          summary
        }
      }
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {data.entryCollection.items.map((post: any) => (
          <li key={post.sys.id}>

               <Link href={`/posts/${post.slug}`}>
               <PostLink>
                <h2>{post.title}</h2>
                <p>{post.summary}</p>  
                </PostLink>
            </Link>
            <p>{post.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;