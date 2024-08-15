import React from "react";
import { FlipWords } from "../ui/FlipWords";
import { HeroHighlight } from "../ui/HeroHighlight";
import { Spotlight } from "../ui/Spotlight";

import Skills from "../ui/Skills";
const Hero = () => {
  return (
    <HeroHighlight>
      <div className="pb-20 pt-36 container">
        <div>
          <Spotlight className="right-0 top-0 h-screen " fill="white" />
          <Spotlight
            className="top-10 left-full h-[80vh] w-[50vw]"
            fill="purple"
          />
          <Spotlight
            className="top-28 left-120 h-[80vh] w-[50vw]"
            fill="blue"
          />
        </div>
        <div className=" flex justify-center items-center mx-10">
          <div className="w-[60vw]">
            <h1 className="font-bold lg:text-6xl md:text-5xl text-[40px]">
              Hi, I’m Hrithik,
              <br />a creative{" "}
              <FlipWords
                words={["Software", "Web", "App"]}
                duration={2000}
                className="dark:text-purple"
              />{" "}
              <br />
              developer
            </h1>
          </div>
          <div className="w-[40vw]">
            <Skills />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          <p className="uppercase text-center text-xs tracking-widest text-blue-100 max-w-[40vw] mb-10">
            I bring value to web development projects by merging technical
            expertise with creativity and aesthetics.
          </p>
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none ">
            See my work
          </button>
        </div>
      </div>
    </HeroHighlight>
  );
};

export default Hero;
