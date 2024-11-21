import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import React from "react";

export type TSkills = {
  title: string;
  shortDescription: string;
  experienceMonths: number;
  experienceYears: number;
};

const Skills = () => {
  const skills: TSkills[] = [
    {
      title: "ReactJS",
      shortDescription: "Build dynamic user interfaces efficiently.",
      experienceMonths: 24,
      experienceYears: 2,
    },
    {
      title: "Next.js",
      shortDescription: "React framework for server-side rendering and SEO.",
      experienceMonths: 18,
      experienceYears: 1,
    },
    {
      title: "Tailwind CSS",
      shortDescription: "Utility-first CSS framework for rapid UI design.",
      experienceMonths: 12,
      experienceYears: 1,
    },
    {
      title: "Node.js",
      shortDescription: "Server-side JavaScript for building scalable apps.",
      experienceMonths: 36,
      experienceYears: 3,
    },
    {
      title: "Mongoose",
      shortDescription: "Object Data Modeling (ODM) for MongoDB.",
      experienceMonths: 24,
      experienceYears: 2,
    },
    {
      title: "MongoDB",
      shortDescription: "NoSQL database for modern applications.",
      experienceMonths: 30,
      experienceYears: 2,
    },
    {
      title: "Express.js",
      shortDescription: "Minimalist Node.js web application framework.",
      experienceMonths: 36,
      experienceYears: 3,
    },
  ];

  return (
    <section className=" text-white py-16 mt-5 px-5">
        <TextGenerateEffect
            className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-white"
            duration={2}
            words={`Skills`}
          />
        <p className="text-lg text-center text-purple-400 mt-2">
          My extensive skill set covers various technologies and frameworks.
        </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12 py-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center border border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:translate-y-[-5px] transition-all duration-300"
          >
            <div className="absolute -top-3 -right-3 bg-blue-500 text-white text-sm px-3 py-1 rounded-full shadow-md">
            Experience: {skill.experienceYears} years, {skill.experienceMonths} months
            </div>

            <h3 className="text-1xl font-semibold text-white mb-4 uppercase tracking-wide">
              {skill.title}
            </h3>

            <p className="text-gray-300 text-center leading-relaxed">
              {skill.shortDescription}
            </p>

            <div className="mt-4 w-20 h-1 bg-blue-500 rounded-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
