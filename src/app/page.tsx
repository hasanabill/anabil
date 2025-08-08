import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Hobbies from "@/components/Hobbies";
import { GridBackground } from "@/ui/GridBackground";

export default function Home() {
  return (
    <>
      <GridBackground>
        <Hero />
      </GridBackground>
      <section className="max-w-3xl mx-auto px-4">
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Hobbies />
      </section>
    </>
  );
}
