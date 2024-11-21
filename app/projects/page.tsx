"use client";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Meeting Room Project",
    description:
      "An advanced system for booking and managing meeting rooms seamlessly.",
    image: "/hasan.jpg",
    link: "/projects/meeting-room",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "A scalable e-commerce platform with real-time cart and payment integration.",
    image: "/hasan.jpg",
    link: "/projects/ecommerce",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A visually appealing portfolio site to showcase creative works.",
    image: "/hasan.jpg",
    link: "../public/hasan.jpg",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A visually appealing portfolio site to showcase creative works.",
    image: "/hasan.jpg",
    link: "../public/hasan.jpg",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A visually appealing portfolio site to showcase creative works.",
    image: "/hasan.jpg",
    link: "../public/hasan.jpg",
  },
];

const RecentProjects = () => {
  return (
    <section className="py-20  text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <TextGenerateEffect
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            duration={3}
            words={`Recent Projects`}
          />
        <p className="text-lg text-gray-400 mt-4">
          Discover some of my latest projects.
        </p>
        <div className="mt-4 w-20 h-1 bg-blue-500 rounded-full"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group border border-gray-700 rounded-xl shadow-md overflow-hidden  transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-lg font-semibold text-white">{project.title}</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400">{project.description}</p>
                <div className="flex gap-3 mt-4">
                  <button
                    className="px-6 py-2 bg-emerald-500 text-white rounded-lg transition-transform transform hover:scale-105"
                  >
                    View Details
                  </button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg transition-transform transform hover:scale-105"
                  >
                    Live Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
