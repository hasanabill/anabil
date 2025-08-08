"use client";
import React from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const Hobbies = () => (
  <AnimatedSection className="my-16">
    <h2 className="mb-4 text-3xl font-semibold tracking-tight">Hobbies & Interests</h2>
    <ul className="ml-5 list-disc text-neutral-300">
      <li>Competitive coding</li>
      <li>Exploring AI and IoT technologies</li>
      <li>Building AI systems like J.A.R.V.I.S.</li>
      <li>Learning about cybersecurity and its applications</li>
      <li>Building personal development projects</li>
      <li>Keeping up with new tech trends</li>
    </ul>
  </AnimatedSection>
);

export default Hobbies;
