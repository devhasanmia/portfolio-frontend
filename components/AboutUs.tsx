"use client";
import React from "react";
import Image from "next/image";
import myImag from "../public/hasan.jpg"
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
const AboutUs = () => {
  return (
    <section className="relative py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-[300px] lg:h-[400px]">
          <Image
            src={myImag}
            alt="About Us"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <TextGenerateEffect
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            duration={3}
            words={`Who We Are`}
          />
          <p className="text-lg  text-gray-300">
            We are a team of passionate developers, designers, and innovators
            committed to delivering high-quality software solutions. Our mission
            is to create seamless digital experiences that transform businesses
            and make technology accessible to everyone.
          </p>
          <p className="text-lg text-gray-300 mb-5">
            With years of experience and a deep understanding of modern web
            technologies, we pride ourselves on our ability to solve complex
            problems with elegant solutions.
          </p>
          <a
          className="mt-5"
            href="/contact"
          >
            <MagicButton title="Contact Me"/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
