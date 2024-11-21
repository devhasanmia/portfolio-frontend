"use client";
import React from "react";
import Image from "next/image";
import myImag from "../../public/hasan.jpg";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/ui/MagicButton";

const AboutUs = () => {
  return (
    <section className="relative py-56 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="relative w-full md:w-1/2 h-[300px] lg:h-[400px]">
          <Image
            src={myImag}
            alt="About Us"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <TextGenerateEffect
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            duration={2}
            words={`Who We Are`}
          />
          <div className="mt-4 w-20 h-1 bg-blue-500 rounded-full"></div>
          <p className="text-lg text-gray-300">
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
          <br />
          <a className="mt-5" href="/contact">
            <MagicButton title="Contact Me" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
