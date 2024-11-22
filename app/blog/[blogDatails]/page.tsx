"use client";
import { useGetBlogByIdQuery } from "@/redux/services/blog/BlogApi";
import Image from "next/image";
import { useParams } from "next/navigation";

const BlogDetails = () => {
  const { blogDatails } = useParams();
  const { data: blog, isFetching } = useGetBlogByIdQuery(blogDatails);
  if (isFetching)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-pink-500 text-5xl font-semibold animate-pulse">
          Please wait...
        </div>
      </div>
    );
  const { thumbnail, title, category, author, tags, description, createdAt } =
    blog?.data || {};
  return (
    <div className=" text-white mt-10">
      <div className="container mx-auto py-12 px-6 lg:px-12">
        <div className="mb-10">
          <Image
            src={thumbnail}
            alt={title}
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <h1 className="text-4xl font-bold mt-6 mb-2">{title}</h1>
          <p className="text-gray-400 text-lg mb-2">
            Author: {author} | {category}
          </p>
        </div>
        <div className="mt-8 text-lg leading-relaxed">
          <p>{description}</p>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          <p>Published on: {new Date(createdAt).toLocaleDateString()}</p>
        </div>
        <br />
        <div className="flex space-x-3">
          {tags?.map((tag: string, index: number) => (
            <span
              key={index}
              className="bg-blue-600 text-sm px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
        {/* Back-to-top button */}
        <div className="fixed bottom-10 right-10">
        <a
          href="#"
          className="bg-emerald-400 text-white p-4 rounded-full shadow-lg transform transition-all hover:scale-110"
        >
          ↑
        </a>
      </div>
    </div>
  );
};

export default BlogDetails;
