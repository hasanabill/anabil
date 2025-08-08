"use client";
import React from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const Education = () => (
  <AnimatedSection className="my-16">
    <h2 className="mb-4 text-3xl font-semibold tracking-tight">Education</h2>
    <div className="rounded-xl border border-neutral-800/60 bg-neutral-900/40 p-5">
      <p className="font-medium text-neutral-100">
        BSc in Computing and Information Systems (AI in IoT)
      </p>
      <p className="text-neutral-300">Daffodil International University – Dhaka, Bangladesh</p>
      <p className="text-neutral-300">8th Semester (CGPA: 3.73)</p>
      <p className="text-neutral-300">Expected Graduation: April 2026</p>
    </div>
  </AnimatedSection>
);

export default Education;
