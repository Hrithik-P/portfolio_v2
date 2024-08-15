import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 text-white">
      <div>
        <Hero />
      </div>
    </main>
  );
}
