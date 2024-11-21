"use client";
import React from "react";
import Image from "next/image";
import myImag from "../../public/hasan.jpg";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/ui/MagicButton";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

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
            words={`Who I'm`}
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
          <div className="flex gap-6 text-2xl text-white ">
            <a href="https://github.com/devhasanmia" target="_blank" className="hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/hasanmiaweb/" target="_blank" className="hover:text-blue-600">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/hasanmiadev1/" target="_blank" className="hover:text-blue-400">
              <FaFacebook />
            </a>
          </div>
          <div className="flex gap-2  text-white">
            {/* Email & Phone */}
            <a href="#" className="hover:text-blue-400">
            ✉️ hasanmiaweb@gmail.com
            </a>
            <span className="text-white">|</span>
            <a href="tel:+88 01740-398196" className="hover:text-blue-400">
              📞 +88 01740-398196
            </a>
          </div>
          <br />
          <Link className="mt-5" href="/contact">
            <MagicButton title="Contact Me" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
