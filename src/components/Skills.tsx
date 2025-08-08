"use client";
import React from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaPaintBrush,
  FaTools,
  FaLinux,
  FaLanguage,
} from "react-icons/fa";

const skillsData = [
  {
    icon: <FaCode className="text-sky-400 text-xl" />,
    title: "Programming Languages",
    items: [
      "C",
      "C++",
      "Java",
      "JavaScript",
      "TypeScript",
      "Python",
      "PHP",
      "Arduino",
    ],
  },
  {
    icon: <FaLaptopCode className="text-purple-400 text-xl" />,
    title: "Frontend Development",
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "Redux",
      "Tailwind CSS",
      "Firebase",
    ],
  },
  {
    icon: <FaServer className="text-green-400 text-xl" />,
    title: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Spring Boot",
      "MySQL",
      "FastAPI",
    ],
  },
  {
    icon: <FaPaintBrush className="text-pink-400 text-xl" />,
    title: "Creative Tools",
    items: ["Adobe Photoshop", "Lightroom", "Premiere Pro", "Illustrator"],
  },
  {
    icon: <FaTools className="text-yellow-400 text-xl" />,
    title: "Development Tools",
    items: ["Git", "GitHub", "Figma", "Docker"],
  },
  {
    icon: <FaLinux className="text-orange-400 text-xl" />,
    title: "Operating Systems",
    items: ["Arch Linux", "Windows"],
  },
  {
    icon: <FaLanguage className="text-red-400 text-xl" />,
    title: "Languages",
    items: ["Bangla (Native)", "English (Proficient)", "Arabic (Learning)"],
  },
];

const Skills = () => (
  <AnimatedSection className="my-20">
    <h2 className="mb-8 text-3xl font-bold tracking-tight bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
      Technical Skills
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillsData.map((category, index) => (
        <div
          key={index}
          className="rounded-xl border border-neutral-800/60 bg-neutral-900/40 p-5 hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-3">
            {category.icon}
            <h3 className="text-lg font-semibold text-white">
              {category.title}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.items.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm rounded-full bg-neutral-800/60 border border-neutral-700 text-neutral-300 hover:bg-sky-500/10 hover:text-sky-300 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </AnimatedSection>
);

export default Skills;
