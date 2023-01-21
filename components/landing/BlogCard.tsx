import React, { FC } from 'react';
import Link from 'next/link';

export interface BlogData {
  title: string;
  author: string;
  date: string;
  description: string;
  id: string;
}

const BlogCard: FC<BlogData> = ({ title, author, date, description, id }) => {
  /*
    <Link href='/blog/posts/${id}'/>
  */
  return (
    <div className="flex min-w-[250px] max-w-[400px] flex-col gap-4">
      <h4 className="text-3xl">{title}</h4>
      <p className="text-xs">{`${author} | ${date}`}</p>
      <p className="text-justify">{description}</p>
      <Link
        href="/"
        className="w-fit rounded border border-red-500 bg-transparent py-2 px-8 text-red-700 hover:border-transparent hover:bg-red-500 hover:text-white"
      >
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
