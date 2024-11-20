"use client";
import React from "react";
import MagicButton from "./ui/MagicButton";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./ui/Animated-Modal";

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
];

const RecentProjects = () => {
  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-500">
          Recent Projects
        </h1>
        <p className="text-lg text-center text-purple-400 mt-2">
          Discover some of my latest projects.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group border-2 border-gray-800 rounded-lg shadow-lg overflow-hidden bg-gray-900"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <div className="flex gap-3 mt-4">
                  <Modal>
                    <ModalTrigger>
                      <MagicButton title="View Details" />
                    </ModalTrigger>
                    <ModalBody>
                      <ModalContent>
                        <h2 className="text-2xl font-semibold text-black dark:text-white">
                          Meeting Room Project Details
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mt-4">
                          This is an advanced system for booking and managing
                          meeting rooms seamlessly.
                        </p>
                      </ModalContent>
                    </ModalBody>
                  </Modal>
                  <MagicButton title="Live Link" />
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
