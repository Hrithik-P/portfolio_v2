import React from "react";
import LabelInputContainer from "../ui/LabelInputContainer";
import BottomGradient from "../ui/BottomGradient";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import { FaLocationArrow } from "react-icons/fa";
import Ripple from "../ui/Ripple";

const Contact = () => {
  return (
    <div className="py-10 relative" id="contact">
      <h1 className="heading">
        Contact <span className="text-purple">Me</span>
      </h1>
      {/* <Ripple className="-left-[100%] -bottom-[100%] " numCircles={12} /> */}
      <div className="flex justify-between mx-[15rem] mt-10 gap-[4rem]">
        <div className="px-[3rem] py-[2rem]">
          <div className="w-[30vw]">
            <h2 className="text-3xl ">
              Got a problem to <span className="text-purple">Solve</span>?
            </h2>
            <p className="mt-10">
              Get your space suit ready and tell us your ideas to develop your
              dream web solution.
            </p>
          </div>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <div className="flex justify-between items-center gap-2">
            <button
              className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                GitHub
              </span>
              <BottomGradient />
            </button>
            <button
              className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                LinkedIn
              </span>
              <BottomGradient />
            </button>
            <button
              className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconBrandInstagram className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Instagram
              </span>
              <BottomGradient />
            </button>
          </div>
        </div>
        <div className="border border-white-100 px-[3rem] py-[2rem] rounded-3xl">
          <h5 className="text-3xl">Get In Touch!</h5>
          <form className="my-8">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" placeholder="Tyler" type="text" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" placeholder="Durden" type="text" />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
              />
            </LabelInputContainer>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            <button
              className="flex w-full h-12 animate-shimmer items-center gap 5 justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none "
              type="submit"
            >
              Connect with me{" "}
              <FaLocationArrow color="#CBACF9" className="ms-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
