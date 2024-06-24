
interface CardBlogProps {
    title: string;
    summary: string;
    slug: string;
    tags: Array<{ name: string }>;
}

const CardBlog: React.FC<CardBlogProps> = ({title, summary, slug, tags}) =>{

    return(
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
          <div className="mt-4">
            {tags.map((tag, index) => (
              <span key={index} className="text-sm font-semibold text-gray-700 mr-2 px-2.5 py-0.5 rounded bg-gray-200">{tag.name}</span>
            ))}
          </div>
            <div className="text-gray-900 font-bold text-xl mb-2 line-clamp-3">{title}</div>
            <p className="text-gray-500 text-base line-clamp-3">{summary}</p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <a href={`/posts/${slug}`} className="text-blue-500 hover:text-blue-800">Read More</a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CardBlog;