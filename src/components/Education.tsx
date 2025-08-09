"use client";
import React from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => (
  <AnimatedSection className="my-20">
    <h2 className="mb-6 text-3xl font-bold tracking-tight text-primary">
      Education
    </h2>

    <div className="relative overflow-hidden rounded-xl border border-neutral-800/60 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 p-6 shadow-lg hover:shadow-sky-500/10 transition-shadow duration-300">
      {/* Decorative icon in corner */}
      <div className="absolute -top-6 -right-6 opacity-10 text-sky-500">
        <FaGraduationCap size={100} />
      </div>

      <p className="text-lg font-semibold text-white">
        BSc in Computing and Information Systems{" "}
        <span className="text-primary">(AI in IoT)</span>
      </p>
      <p className="text-neutral-400 mt-1">
        Daffodil International University - Dhaka, Bangladesh
      </p>

      <div className="mt-3 flex flex-wrap gap-4 text-sm text-neutral-300">
        <span className="px-3 py-1 rounded-full bg-neutral-800/60 border border-neutral-700">
          8th Semester (CGPA: <span className="text-sky-300">3.73</span>)
        </span>
        <span className="px-3 py-1 rounded-full bg-neutral-800/60 border border-neutral-700">
          Expected Graduation: April 2026
        </span>
      </div>
    </div>
  </AnimatedSection>
);

export default Education;
