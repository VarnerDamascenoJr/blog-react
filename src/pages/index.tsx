import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import CardBlog from '@/components/Card';
import Header from '@/components/Header';

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

const Home = () => {
  const { isAuthenticated, isLoading, user, loginWithRedirect, logout } = useAuth0();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect(); // Redireciona para a tela de login se não estiver autenticado
    }
  }, [isLoading, isAuthenticated, router, loginWithRedirect]);

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
    // Optional: Use router.push para redirecionar o usuário manualmente
    router.push('/'); // Redireciona para a home após o logout
  };

  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    // <div>
    //   {isAuthenticated ? (
    //     <div>
    //    <h1>Bem-vindo, {user ? user.name : 'Usuário'}</h1>
    //    <button onClick={handleLogout}>Logout</button>
    //   <h1>Blog</h1>
    //   <ul>
    //     {data.entryCollection.items.map((post: any) => (
    //       <li key={post.sys.id}>

    //            <Link href={`/posts/${post.slug}`}>
    //            <PostLink>
    //             <h2>{post.title}</h2>
    //             <p>{post.summary}</p>  
    //             </PostLink>
    //         </Link>
    //         <p>{post.summary}</p>
    //       </li>
    //     ))}
    //   </ul>
    //   </div>)
    //   :(<div>
    //     <h1>Faça login para acessar</h1>
    //     <button onClick={() => loginWithRedirect()}>Login</button>
    //   </div>)}
    // </div>
     <div>
      <Header />
         <div>
        <h1>Bem-vindo, {user ? user.name : 'Usuário'}</h1>
        <button onClick={handleLogout}>Logout</button>
       <h1>Blog</h1>
       <ul>
         {data.entryCollection.items.map((post: any) => (
           <li key={post.sys.id}>
                {/* <Link href={`/posts/${post.slug}`}>
                <PostLink>
                 <h2>{post.title}</h2>
                 <p>{post.summary}</p>  
                 </PostLink>
             </Link> */}
          <CardBlog 
            title={post.title}
            summary={post.summary}
            slug={post.slug}
            tags={post.contentfulMetadata?.tags || []}
           />
           
           </li>


         ))}
       </ul>
       </div>
       </div>
  );
};

export default Home;