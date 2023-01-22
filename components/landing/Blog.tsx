import React, { FC } from 'react';
import BlogCard, { BlogData } from './BlogCard';

interface BlogProps {
  blogPosts: BlogData[];
}

const Blog: FC<BlogProps> = ({ blogPosts }) => {
  return (
    <div className="items-center px-[6.6vw] py-20">
      <div className="mb-20">
        <h2 className="mb-4 text-center text-navy-medium">BLOG</h2>
        <h3 className="text-center text-3xl font-bold text-grayscale-black md:text-5xl">
          Service member stories and
          <br />
          the latests news
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:flex-wrap lg:items-start lg:justify-around">
        {blogPosts.map((data: BlogData) => (
          <BlogCard
            title={data.title}
            author={data.author}
            date={data.date}
            description={data.description}
            id={data.id}
            key={data.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
