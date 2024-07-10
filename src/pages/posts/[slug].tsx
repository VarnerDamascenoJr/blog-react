import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import SEO from '../../lib/next-seo.config'
import Disqus from 'disqus-react';

const GET_POST = gql`
  query GetPost($slug: String!) {
    postCollection(limit: 1, where: { slug: $slug }) {
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
`;

const PostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log('Slug:', slug);
  const { loading, error, data } = useQuery(GET_POST, {
    variables: { slug },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const post = data.postCollection.items[0];
 console.log(post)
  const disqusShortname = 'react-blog-6';

  const disqusConfig = {
    url: `http://localhost:3000/${slug}`,
    identifier: post.sys.id,
    title: post.title,
  };

  return (
    <div className="container mx-auto md:container md:mx-auto flex flex-col">
      <NextSeo
        title={post.title}
        description={post.summary}
        canonical={`http://localhost:3000/${post.slug}`}
        openGraph={{
          url: `http://localhost:3000/${post.slug}`,
          title: post.title,
          description: post.summary,
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <h1 className='text-5xl py-4'>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
       <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} /> 
    </div>
  );
};

export default PostPage;