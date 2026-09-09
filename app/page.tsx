import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { AiDevelopment } from "@/components/sections/ai-development";
import { Achievements } from "@/components/sections/achievements";
import { Journey } from "@/components/sections/journey";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <AiDevelopment />
      <Achievements />
      <Journey />
      <Contact />
    </main>
  );
}
