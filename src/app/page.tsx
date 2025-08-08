import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Hobbies from "@/components/Hobbies";
import { GridBackground } from "@/components/ui/GridBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Home() {
  return (
    <>
      <GridBackground>
        <Hero />
      </GridBackground>
      <main className="mx-auto max-w-5xl px-4">
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Hobbies />
        <AnimatedSection className="my-24 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Mahmudul Hasan Anabil. All rights
          reserved.
        </AnimatedSection>
      </main>
    </>
  );
}
