import Hero from "@/components/Hero";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div>
        <Hero />
        <Work />
      </div>
    </main>
  );
}
