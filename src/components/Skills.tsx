"use client";
import React from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const Skills = () => (
  <AnimatedSection className="my-16">
    <h2 className="mb-4 text-3xl font-semibold tracking-tight">
      Technical Skills
    </h2>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="rounded-xl border border-neutral-800/60 bg-neutral-900/40 p-5">
        <h3 className="font-medium text-neutral-200">Languages</h3>
        <p className="text-neutral-300">
          C, C++, Java, JavaScript, TypeScript, Python, PHP, Arduino
        </p>
        <h3 className="mt-3 font-medium text-neutral-200">Frontend</h3>
        <p className="text-neutral-300">
          React.js, Next.js, React Native, Redux, Tailwind CSS, Firebase
        </p>
        <h3 className="mt-3 font-medium text-neutral-200">Backend</h3>
        <p className="text-neutral-300">
          Node.js, Express.js, MongoDB, Spring Boot, MySQL, FastAPI
        </p>
      </div>
      <div className="rounded-xl border border-neutral-800/60 bg-neutral-900/40 p-5">
        <h3 className="font-medium text-neutral-200">Creative Tools</h3>
        <p className="text-neutral-300">
          Adobe Photoshop, Lightroom, Premiere Pro, Illustrator
        </p>
        <h3 className="mt-3 font-medium text-neutral-200">Tools</h3>
        <p className="text-neutral-300">Git, GitHub, Figma, Docker</p>
        <h3 className="mt-3 font-medium text-neutral-200">OS</h3>
        <p className="text-neutral-300">Arch Linux, Windows</p>
        <h3 className="mt-3 font-medium text-neutral-200">Languages</h3>
        <p className="text-neutral-300">
          Bangla (Native), English (Proficient), Arabic (Learning)
        </p>
      </div>
    </div>
  </AnimatedSection>
);

export default Skills;
