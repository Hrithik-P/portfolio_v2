import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div>
        <Hero />
        <About />
        <Work />
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <Contact />
      </div>
    </main>
  );
}
