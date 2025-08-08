"use client";
import React from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const Experience = () => (
  <AnimatedSection className="my-16">
    <h2 className="mb-4 text-3xl font-semibold tracking-tight">Experience</h2>
    <div className="space-y-6">
      <div className="rounded-xl border border-neutral-800/60 bg-neutral-900/40 p-5">
        <h3 className="font-bold text-neutral-100">Treasurer</h3>
        <p className="text-neutral-300">DIU CIS Club — Dhaka, Bangladesh</p>
        <p className="text-sm text-neutral-400">October 2024 – Present</p>
        <ul className="ml-5 list-disc text-neutral-300">
          <li>Manage financial operations and budgets for the club.</li>
          <li>
            Organize tech events and workshops focused on computing, AI, and emerging technologies.
          </li>
        </ul>
      </div>
      <div className="rounded-xl border border-neutral-800/60 bg-neutral-900/40 p-5">
        <h3 className="font-bold text-neutral-100">Co-Founder</h3>
        <p className="text-neutral-300">Team CodeMars — Dhaka, Bangladesh</p>
        <p className="text-sm text-neutral-400">January 2023 – March 2023</p>
        <ul className="ml-5 list-disc text-neutral-300">
          <li>
            Co-founded an e-learning platform aimed at teaching coding skills to beginners.
          </li>
          <li>
            Led the project from concept to execution, including platform design and curriculum development.
          </li>
          <li>
            Gained valuable insights into the challenges of scaling educational platforms.
          </li>
          <li>
            Despite pausing the project due to low enrollment, we learned key lessons about product-market fit and audience targeting.
          </li>
        </ul>
      </div>
    </div>
  </AnimatedSection>
);

export default Experience;
