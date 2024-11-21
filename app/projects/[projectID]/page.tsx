"use client";
import { useGetProjectByIdQuery } from "@/redux/services/project/projectApi";
import { useParams } from "next/navigation";
import { FaGithub, FaLink } from "react-icons/fa"; // For icons
import { motion } from "framer-motion"; // Smooth scroll animations

const Projects = () => {
  const { projectID } = useParams();
  const { data: project, isFetching } = useGetProjectByIdQuery(projectID);

  if (isFetching)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-pink-500 text-5xl font-semibold animate-pulse">
          Please wait...
        </div>
      </div>
    );

  const {
    thumbnail,
    title,
    description,
    technologies,
    liveLink,
    githubLink,
    contributors,
    projectType,
    createdAt,
    status,
  } = project?.data || {};

  return (
    <div className="bg-black-100 text-white mt-10 py-12">
      <div className="container mx-auto px-6 lg:px-12 space-y-10">
        {/* Parallax Hero Section */}
        <div className="relative overflow-hidden rounded-lg shadow-xl">
          <div className="parallax-effect w-full h-96">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0"></div>
        </div>
        <div className="text-center text-white space-y-4">
          <h1 className="text-5xl font-bold">{title}</h1> <br />
          <p className="text-lg text-gray-300">
            Project Type:{" "}
            <span className="bg-emerald-500 p-2 text-white rounded-md">
              {projectType}
            </span>
          </p>
        </div>

        {/* Project Details Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className=" border-2 border-gray-700 p-6 rounded-2xl shadow-lg mt-10"
        >
          <div className="space-y-6">
            {/* Technologies Section */}
            <div className="flex flex-wrap gap-4">
              <p className="text-lg font-semibold">Technology used:</p>
              {technologies?.map((tech: string, index: number) => (
                <span
                  key={index}
                  className=" bg-emerald-400 text-1xl p-2 rounded-full text-white transform transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>

        

          

            {/* Published Date */}
            <div className="mt-4 text-sm text-gray-500">
              <p>Published on: {new Date(createdAt).toLocaleDateString()}</p>
            </div>
          </div>
          <p className="text-lg leading-relaxed text-gray-300">{description}</p>
        </motion.div>
                {/* Contributors Section */}
                <div className="mt-6">
              <p className="text-lg font-semibold">Contributors:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                {contributors?.map((contributor: string, index: number) => (
                  <li key={index}>{contributor}</li>
                ))}
              </ul>
            </div>
        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex gap-6 mt-10 justify-center"
        >
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full text-lg shadow-lg transform hover:scale-110 hover:bg-purple-700 transition-all"
            >
              <FaGithub className="mr-2" />
              View on GitHub
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full text-lg shadow-lg transform hover:scale-110 hover:bg-teal-600 transition-all"
            >
              <FaLink className="mr-2" />
              Live Demo
            </a>
          )}
   
        </motion.div>
         
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

export default Projects;
