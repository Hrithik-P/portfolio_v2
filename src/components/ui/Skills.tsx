import OrbitingCircles from "../ui/OrbitingCircles";
import IconCloud from "./IconCloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "nextjs",
  "html5",
  "css3",
  "tailwindcss",
  "bootstrap",
  "express",
  "laravel",
  "postgresql",
  "firebase",
  "vercel",
  "mysql",
  "redux",
  "vite",
  "docker",
  "git",
  "github",
  "bitbucket",
  "visualstudiocode",
  "figma",
  "axios",
];
const Skills = () => {
  return (
    <div className="relative flex h-[80vh] w-full flex-col items-center justify-center overflow-hidden ">
      {/* 1st Inner Circles */}
      {/* <>
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          duration={20}
          delay={18}
          radius={80}
        >
          {skills?.html()}
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          duration={20}
          delay={12}
          radius={80}
        >
          {skills?.css()}
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          duration={20}
          delay={6}
          radius={80}
        >
          {skills?.javascript()}
        </OrbitingCircles>
      </> */}
      {/* 1st Inner Circles */}
      {/* 2st Inner Circles */}
      {/* <>
        <OrbitingCircles
          className="size-[40px] border-none bg-transparent"
          duration={20}
          delay={5}
          radius={140}
          reverse
        >
          {skills?.mysql()}
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[40px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={140}
          reverse
        >
          {skills?.bootstrap()}
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[40px] border-none bg-transparent"
          duration={20}
          delay={15}
          radius={140}
          reverse
        >
          {skills?.git()}
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[40px] border-none bg-transparent"
          duration={20}
          delay={20}
          radius={140}
          reverse
        >
          {skills?.laravel()}
        </OrbitingCircles>
      </> */}
      {/* 2st Inner Circles */}
      {/* 3st Inner Circles */}
      {/* <>
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          duration={20}
          delay={20}
          radius={200}
        >
          {skills?.tailwind()}
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          duration={20}
          delay={15}
          radius={200}
        >
          {skills?.typeScript()}
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={200}
        >
          {skills?.react()}
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          duration={20}
          delay={5}
          radius={200}
        >
          {skills?.next()}
        </OrbitingCircles>
      </> */}
      {/* 3st Inner Circles */}

      <IconCloud iconSlugs={slugs} />
    </div>
  );
};

export default Skills;
