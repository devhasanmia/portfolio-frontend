import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding the Basics of ReactJS",
      author: "John Doe",
      date: "November 20, 2024",
      image: "/hasan.jpg",
      content:
        "ReactJS is a popular JavaScript library for building user interfaces, particularly single-page applications where data changes dynamically.",
    },
    {
      id: 2,
      title: "A Guide to Modern CSS",
      author: "Jane Smith",
      date: "October 15, 2024",
      image: "/hasan.jpg",
      content:
        "CSS has evolved over the years with powerful features like Grid, Flexbox, and custom properties. Learn how to use them effectively.",
    },
    {
      id: 3,
      title: "JavaScript Tips and Tricks",
      author: "Mark Lee",
      date: "September 5, 2024",
      image: "/hasan.jpg",
      content:
        "JavaScript offers powerful tools for developers. Discover lesser-known tips and tricks to enhance your coding efficiency.",
    },
    {
      id: 4,
      title: "The Future of Web Development",
      author: "Anna Wright",
      date: "August 22, 2024",
      image: "/hasan.jpg",
      content:
        "The web is evolving rapidly. From AI integration to WebAssembly, explore what the future holds for web developers.",
    },
  ];

  return (
    <div className="py-20 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <TextGenerateEffect
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          duration={3}
          words={`Latest Blog Posts...`}
        />
        <p className="text-lg text-gray-400 mt-4">
          Discover the latest blog posts from our team. The more you read, the
          better you become a web developer.
        </p>
        <div className="mt-4 mb-6 w-20 h-1 bg-blue-500 rounded-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="border-2 border-gray-900 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-blue-400 hover:underline cursor-pointer">
                  {post.title}
                </h2>

                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <span className="mr-3">
                    <i className="fas fa-user"></i> By {post.author}
                  </span>
                  <span>
                    <i className="fas fa-calendar-alt"></i> {post.date}
                  </span>
                </div>

                <p className="text-gray-300 leading-relaxed mb-4">
                  {post.content.substring(0, 100)}...
                </p>

                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
