"use client";
import React from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const achievements = [
  "Fun With Code programming contest - 2nd place",
  "NASA Space App Challenge Hackathon - Selected for In-Person Competition",
  "Code Samurai - Finalist",
  "International Collegiate Programming Contest (ICPC) - Participant",
  "Standup Hackathon - Top 10",
];

const Achievements = () => (
  <AnimatedSection className="my-16">
    <h2 className="mb-4 text-3xl font-semibold tracking-tight">Competitions & Achievements</h2>
    <ul className="ml-5 list-disc text-neutral-300">
      {achievements.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </AnimatedSection>
);

export default Achievements;
