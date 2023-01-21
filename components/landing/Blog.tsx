import React, { FC } from 'react';
import BlogCard, { BlogData } from './BlogCard';

interface BlogProps {
  blogPosts: BlogData[];
}

const Blog: FC<BlogProps> = ({ blogPosts }) => {
  return (
    <div className="px-[6.6vw] py-[6vw]">
      <div className="mb-10">
        <h2 className="text-center text-navy-medium py-3">
          BLOG
        </h2>
        <h3 className="text-5xl font-bold text-center text-grayscale-black">
          Service member stories and 
          <br/>
          the latests news
        </h3>
      </div>
      <div className="flex py-3 items-center gap-10 md:flex-wrap flex-col md:flex-row md:justify-between">
        {blogPosts.map((data: BlogData) => (
          <BlogCard 
            title={data.title}
            author={data.author}
            date={data.date}
            description={data.description}
            id={data.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;