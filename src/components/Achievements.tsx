"use client";
import React from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import {
  FaMedal,
  FaRocket,
  FaChartLine,
  FaGlobeAmericas,
  FaTrophy,
} from "react-icons/fa";

type Achievement = {
  title: string;
  result: string;
  description: string;
  category: string;
  icon: React.ReactNode;
};

const achievements: Achievement[] = [
  {
    title: "Fun With Code Programming Contest",
    result: "2nd Place",
    description:
      "Delivered competitive algorithmic solutions under pressure, outperforming dozens of regional teams.",
    category: "Competitive Programming",
    icon: <FaMedal className="text-lg text-amber-400" />,
  },
  {
    title: "NASA Space Apps Challenge",
    result: "In-Person Finalist",
    description:
      "Selected to pitch an innovation prototype to NASA mentors, focusing on data-driven insights for space research.",
    category: "Innovation Hackathon",
    icon: <FaRocket className="text-lg text-sky-400" />,
  },
  {
    title: "Code Samurai",
    result: "National Finalist",
    description:
      "Reached the final round through rapid prototyping, real-time collaboration, and well-documented deliverables.",
    category: "Product Build",
    icon: <FaChartLine className="text-lg text-emerald-400" />,
  },
  {
    title: "ICPC Regional",
    result: "Team Representative",
    description:
      "Represented DIU on the prestigious algorithmic stage, gaining deep experience in team-based problem solving.",
    category: "Global Contest",
    icon: <FaGlobeAmericas className="text-lg text-blue-400" />,
  },
  {
    title: "Standup Hackathon",
    result: "Top 10 Finish",
    description:
      "Built and pitched a working MVP within 24 hours, backed by user research and a crisp go-to-market pitch.",
    category: "Rapid Prototyping",
    icon: <FaTrophy className="text-lg text-fuchsia-400" />,
  },
];

const Achievements = () => (
  <AnimatedSection className="my-20">
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-400/80">
          Recognition
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-100 md:text-4xl">
          Competitions & Achievements
        </h2>
      </div>
      <p className="max-w-xl text-sm text-neutral-400">
        Outcomes from hackathons and contests where curiosity met execution. These moments sharpened
        collaboration, clarity, and grit.
      </p>
    </div>
    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
      {achievements.map((achievement, idx) => (
        <motion.article
          key={achievement.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.05 }}
          className="group relative overflow-hidden rounded-2xl border border-neutral-800/70 bg-neutral-900/60 p-6"
        >
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-80" />
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700/80 bg-neutral-900/90">
              {achievement.icon}
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-amber-400/80">
                {achievement.category}
              </p>
              <h3 className="text-lg font-semibold text-neutral-50">{achievement.title}</h3>
            </div>
          </div>
          <p className="mt-4 inline-flex rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200/90">
            {achievement.result}
          </p>
          <p className="mt-4 text-sm text-neutral-300">{achievement.description}</p>
        </motion.article>
      ))}
    </div>
  </AnimatedSection>
);

export default Achievements;
