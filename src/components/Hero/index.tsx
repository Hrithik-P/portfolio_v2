"use client";
import React from "react";
import { FlipWords } from "../ui/FlipWords";
import { HeroHighlight } from "../ui/HeroHighlight";
import { Spotlight } from "../ui/Spotlight";

import Skills from "../ui/Skills";
import NavBar from "../NavBar";
import Link from "next/link";

const Hero = () => {
  return (
    <HeroHighlight>
      <NavBar />
      <div className="pb-20 pt-36 container">
        <div>
          <Spotlight
            className="lg:left-0 lg:top-0 h-screen -top-10 left-34 "
            fill="white"
          />
          <Spotlight
            className="top-10 left-full h-[80vh] w-[50vw]"
            fill="purple"
          />
          <Spotlight
            className="top-60 left-150 h-[80vh] w-[50vw]"
            fill="blue"
          />
        </div>
        <div className=" flex justify-center items-center mx-10">
          <div className="lg:w-[60vw] w-full">
            <h1 className="font-bold lg:text-6xl md:text-5xl text-[40px] text-center lg:text-left">
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
            <div className="mt-5">
              <p className="uppercase text-xs tracking-widest text-blue-100 max-w-[40vw] mb-10">
                I bring value to web development projects by merging technical
                expertise with creativity and aesthetics.
              </p>

              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none ">
                See my work
              </button>
            </div>
          </div>
          <div className="w-[40vw] hidden lg:block">
            <Skills />
          </div>
        </div>
      </div>
    </HeroHighlight>
  );
};

export default Hero;
