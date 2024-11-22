"use client";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { useGetAllBlogQuery } from "@/redux/services/blog/BlogApi";
import { TBlog } from "@/types/blog.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  const { data: blogPosts, isLoading, isError } = useGetAllBlogQuery("");

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-pink-500 text-5xl font-semibold animate-pulse">
          Please wait...
        </div>
      </div>
    );
  if (isError) return <div>Something went wrong!</div>;

  return (
    <div className="py-20 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <TextGenerateEffect
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          duration={2}
          words={`Latest Blog Posts...`}
        />
        <p className="text-lg text-gray-400 mt-4">
          Discover the latest blog posts from our team. The more you read, the
          better you become a web developer.
        </p>
        <div className="mt-4 mb-6 w-20 h-1 bg-blue-500 rounded-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts?.data.map((post: TBlog) => (
            <div
              key={post._id}
              className="border-2 border-gray-900 rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={post.thumbnail}
                alt={`Thumbnail for ${post.title}`}
                width={300}
                height={48}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <Link
                  href={`/blog/${post._id}`}
                  className="text-2xl font-bold mb-3 text-blue-400 hover:underline cursor-pointer"
                >
                  {post.title}
                </Link>
                <div className="flex items-center text-gray-400 mb-3">
                  <span className="mr-4">By {post.author}</span>
                </div>
              </div>
            </div>
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

export default Blog;
