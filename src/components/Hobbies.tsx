"use client";
import React from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import {
  FaBook,
  FaChessKnight,
  FaGlobe,
  FaLandmark,
  FaRobot,
  FaSatelliteDish,
  FaShieldAlt,
  FaStarAndCrescent,
  FaTools,
  FaNewspaper,
} from "react-icons/fa";

type Hobby = {
  title: string;
  description: string;
  icon: React.ReactNode;
  pillar: string;
};

const hobbies: Hobby[] = [
  {
    title: "Competitive Coding",
    description:
      "Solving data structure and algorithm problems to stay sharp and experiment with new paradigms.",
    pillar: "Problem Solving",
    icon: <FaChessKnight className="text-lg text-indigo-400" />,
  },
  {
    title: "AI & IoT Explorations",
    description:
      "Rapid prototyping with microcontrollers, sensors, and machine learning models to bridge hardware with smart software.",
    pillar: "Innovation",
    icon: <FaSatelliteDish className="text-lg text-sky-400" />,
  },
  {
    title: "Building J.A.R.V.I.S.-Like Assistants",
    description:
      "Designing voice-first automations and context-aware agents that make everyday workflows more delightful.",
    pillar: "Automation",
    icon: <FaRobot className="text-lg text-emerald-400" />,
  },
  {
    title: "Cybersecurity Deep Dives",
    description:
      "Studying secure architectures, practicing CTF challenges, and applying best practices to personal projects.",
    pillar: "Resilience",
    icon: <FaShieldAlt className="text-lg text-rose-400" />,
  },
  {
    title: "Islamic Learning",
    description:
      "Studying Islamic knowledge to strengthen faith, character, and discipline in both life and work.",
    pillar: "Faith",
    icon: <FaStarAndCrescent className="text-lg text-emerald-400" />,
  },
  {
    title: "Philosophy",
    description:
      "Exploring ideas around ethics, reasoning, and meaning to develop clearer thinking and better judgment.",
    pillar: "Reflection",
    icon: <FaBook className="text-lg text-violet-400" />,
  },
  {
    title: "History",
    description:
      "Reading historical narratives to understand how societies evolve through leadership, conflict, and change.",
    pillar: "Perspective",
    icon: <FaLandmark className="text-lg text-amber-400" />,
  },
  {
    title: "World Civilizations",
    description:
      "Learning how civilizations rise, interact, and influence culture, science, governance, and identity.",
    pillar: "Culture",
    icon: <FaGlobe className="text-lg text-sky-400" />,
  },
];

const Hobbies = () => (
  <AnimatedSection className="my-20">
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-indigo-400/80">
          Beyond the Screen
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-100 md:text-4xl">
          Hobbies & Interests
        </h2>
      </div>
      <p className="max-w-xl text-sm text-neutral-400">
        Curiosity fuels everything I build. These pursuits keep me
        experimenting, tinkering, and connecting ideas across disciplines.
      </p>
    </div>
    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
      {hobbies.map((hobby, idx) => (
        <motion.article
          key={hobby.title}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.05 }}
          className="group relative overflow-hidden rounded-2xl border border-neutral-800/70 bg-neutral-900/60 p-6"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-700/80 bg-neutral-900/80">
              {hobby.icon}
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
                {hobby.pillar}
              </p>
              <h3 className="text-lg font-semibold text-neutral-50">
                {hobby.title}
              </h3>
            </div>
          </div>
          <p className="mt-4 text-sm text-neutral-300">{hobby.description}</p>
        </motion.article>
      ))}
    </div>
  </AnimatedSection>
);

export default Hobbies;
