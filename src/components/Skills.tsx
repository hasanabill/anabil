"use client";
import React from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { GlowingEffect } from "@/components/ui/glowing-border";
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
    icon: <FaCode className="text-sky-400 text-lg" />,
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
    icon: <FaLaptopCode className="text-purple-400 text-lg" />,
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
    icon: <FaServer className="text-green-400 text-lg" />,
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
    icon: <FaPaintBrush className="text-pink-400 text-lg" />,
    title: "Creative Tools",
    items: ["Adobe Photoshop", "Lightroom", "Premiere Pro", "Illustrator"],
  },
  {
    icon: <FaTools className="text-yellow-400 text-lg" />,
    title: "Development Tools",
    items: ["Git", "GitHub", "Figma", "Docker"],
  },
  {
    icon: <FaLinux className="text-orange-400 text-lg" />,
    title: "Operating Systems",
    items: ["Arch Linux", "Windows"],
  },
  {
    icon: <FaLanguage className="text-red-400 text-lg" />,
    title: "Languages",
    items: ["Bangla (Native)", "English (Proficient)", "Arabic (Learning)"],
  },
];

const Skills = () => (
  <AnimatedSection className="my-20">
    <h2 className="mb-8 text-3xl font-bold tracking-tight text-primary">
      Technical Skills
    </h2>

    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {skillsData.map((skill, index) => (
        <SkillCard
          key={index}
          icon={skill.icon}
          title={skill.title}
          items={skill.items}
        />
      ))}
    </ul>
  </AnimatedSection>
);

const SkillCard = ({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) => (
  <li className="min-h-[14rem] list-none">
    <div className="relative h-full rounded-2xl border border-neutral-800/60 p-2 md:rounded-3xl md:p-3">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="relative flex h-full flex-col gap-4 overflow-hidden rounded-xl p-6 bg-neutral-900/40 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-fit rounded-lg border border-neutral-700 p-2">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {items.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm rounded-full bg-neutral-800/60 border border-neutral-700 text-neutral-300 hover:bg-sky-500/10 hover:text-sky-300 transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </li>
);

export default Skills;
