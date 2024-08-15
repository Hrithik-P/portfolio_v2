import OrbitingCircles from "../ui/OrbitingCircles";
import { skills } from "../data";
const Skills = () => {
  return (
    <div className="relative flex h-[450px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border-none bg-transparent md:shadow-xl">
      {/* 1st Inner Circles */}
      <>
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
      </>
      {/* 1st Inner Circles */}
      {/* 2st Inner Circles */}
      <>
        <OrbitingCircles
          className="size-[40px] border-none bg-transparent"
          duration={20}
          delay={18}
          radius={140}
          reverse
        >
          {skills?.tailwind()}
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[40px] border-none bg-transparent"
          duration={20}
          delay={12}
          radius={140}
          reverse
        >
          {skills?.bootstrap()}
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[40px] border-none bg-transparent"
          duration={20}
          delay={6}
          radius={140}
          reverse
        >
          {skills?.git()}
        </OrbitingCircles>
      </>
      {/* 2st Inner Circles */}
      {/* 3st Inner Circles */}
      <>
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          duration={20}
          delay={18}
          radius={200}
        >
          {skills?.laravel()}
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          duration={20}
          delay={12}
          radius={200}
        >
          {skills?.react()}
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          duration={20}
          delay={6}
          radius={200}
        >
          {skills?.next()}
        </OrbitingCircles>
      </>
      {/* 3st Inner Circles */}
    </div>
  );
};

export default Skills;
