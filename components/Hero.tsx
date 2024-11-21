"use client";
import { FaFacebook, FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex items-center h-screen justify-center sm:py-32 md:py-40">
      <div
        className="pointer-events-none inset-0 flex items-center justify-center 
        [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      />
      <div className="flex justify-center relative">
        <div className="max-w-[90vw] sm:max-w-2xl md:max-w-3xl lg:max-w-[60vw] flex flex-col items-center justify-center px-4">
          <h1 className="uppercase tracking-widest text-xs sm:text-base text-center text-blue-100 max-w-80">
            MERN Stack Developer
          </h1>
          <TextGenerateEffect
            className="text-center text-[40px] sm:text-4xl md:text-5xl lg:text-6xl text-white"
            duration={2}
            filter={false}
            words={`MD. HASAN MIA`}
          />
          <p className="text-center md:tracking-wider mb-4 text-sm sm:text-base md:text-xl text-white">
            I am a passionate developer who uses the MERN stack to build
            high-quality applications.
          </p>
          <div className="flex gap-4 mb-6">
            <a href="/path-to-cv.pdf" download>
              <MagicButton
                title="Download CV"
                icon={<FiDownload />}
                position="left"
              />
            </a>
            <a href="#explore">
              <MagicButton
                title="Explore More"
                icon={<FaLocationArrow />}
                position="left"
              />
            </a>
          </div>

          <div className="flex gap-2  text-white">
            {/* Email & Phone */}
            <a href="#" className="hover:text-blue-400">
              📧 hasanmiaweb@gmail.com
            </a>
            <span className="text-white">|</span>
            <a href="tel:+88 01740-398196" className="hover:text-blue-400">
              📞 +88 01740-398196
            </a>
          </div>

          <div className="flex gap-6 text-2xl text-white py-12">
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
