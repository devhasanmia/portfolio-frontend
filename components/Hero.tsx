"use client";
import { FloatingNav } from "./ui/FloatingNav";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
const navItems = [
  { name: "Home", link: "/",  },
  { name: "About", link: "/about",  },
  { name: "Projects", link: "/projects",  },
  { name: "Contact", link: "/contact",  },
];
const Hero = () => {
  const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <FloatingNav navItems={navItems}/>
        <div className="max-w-[89w] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            MERN Stack Developer
          </h1>
          <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl text-white" duration={2} filter={false} words={`I am Mern Stack Developer.`} />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white my-2">
          I am a passionate developer who uses the MERN stack to build high-quality applications.
          </p>
          <a href="#about">
            <MagicButton title="Recent Project" />
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
