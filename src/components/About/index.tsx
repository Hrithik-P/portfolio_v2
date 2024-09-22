import React from "react";
import { about } from "../data";

const About = () => {
  return (
    <div className="container " id="about">
      <h1 className="heading">
        About <span className="text-purple">Me</span>
      </h1>
      <div className=" my-20">
        <div>
          <code>
            {Object.keys(about)?.map((key) => {
              const { className, code, id, isBlinking } = about[key];
              return (
                <div
                  key={id}
                  className={isBlinking ? "blink animate-blink" : ""}
                >
                  {code?.map((item, index) => (
                    <span key={index} className={item?.className}>
                      {item?.text}
                    </span>
                  ))}
                </div>
              );
            })}
          </code>
        </div>
      </div>
    </div>
  );
};

export default About;
