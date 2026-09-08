import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { AiDevelopment } from "@/components/sections/ai-development";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <AiDevelopment />
    </main>
  );
}
