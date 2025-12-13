"use client";
import React from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaRocket,
  FaUsersCog,
  FaLightbulb,
} from "react-icons/fa";

type ExperienceItem = {
  role: string;
  organisation: string;
  location: string;
  period: string;
  summary: string;
  contributions: string[];
  icon: React.ReactNode;
};

const experiences: ExperienceItem[] = [
  {
    role: "Treasurer",
    organisation: "DIU Computer & Information Science Club",
    location: "Dhaka, Bangladesh",
    period: "October 2024 – Present",
    summary:
      "Steering finances and event strategy for a 150+ member student community focused on AI, IoT, and emerging tech.",
    contributions: [
      "Built transparent budgeting workflows that unlocked funding for flagship tech festivals.",
      "Partnered with industry mentors to deliver workshops on cloud, ML, and community leadership.",
      "Implemented cashless payment tracking and reporting dashboards for executive review.",
    ],
    icon: <FaBalanceScale className="text-lg text-sky-400" />,
  },
  {
    role: "Co-Founder",
    organisation: "Team CodeMars",
    location: "Dhaka, Bangladesh",
    period: "January 2023 – March 2023",
    summary:
      "Bootstrapped an e-learning MVP to make beginner-friendly programming education accessible in Bengali.",
    contributions: [
      "Designed the lesson architecture, project-based curriculum, and student assessments.",
      "Shipped the web platform in six weeks, integrating secure payments and cohort analytics.",
      "Gathered user research through interviews, shaping pivots around onboarding friction.",
      "Documented learnings on market fit, growth experiments, and community engagement.",
    ],
    icon: <FaRocket className="text-lg text-amber-400" />,
  },
];

const Experience = () => (
  <AnimatedSection className="my-20">
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-400/80">
          Leadership & Impact
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-100 md:text-4xl">
          Experience
        </h2>
      </div>
      <p className="max-w-xl text-sm text-neutral-400">
        Moments where strategy, community, and shipping fast intersected. Each role sharpened my product
        thinking as much as my engineering craft.
      </p>
    </div>
    <div className="relative mt-12 pl-6 md:pl-10">
      <div className="absolute left-[0.9rem] top-0 h-full w-px bg-gradient-to-b from-emerald-500/40 via-neutral-800/90 to-transparent md:left-[1.45rem]" />
      <div className="space-y-10">
        {experiences.map((experience, idx) => (
          <motion.article
            key={experience.role}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.08 }}
            className="relative pl-10 md:pl-14"
          >
            <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700/80 bg-neutral-900/80 shadow-[0_0_0_4px_rgba(12,12,12,0.95)] backdrop-blur">
              {experience.icon}
            </span>
            <div className="rounded-2xl border border-neutral-800/70 bg-neutral-900/60 p-6 shadow-[0_20px_45px_-25px_rgba(0,0,0,0.7)]">
              <div className="flex flex-col gap-3 border-b border-neutral-800/60 pb-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-emerald-400/80">
                    {experience.period}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-neutral-50">
                    {experience.role}
                  </h3>
                  <p className="text-sm text-neutral-400">
                    {experience.organisation} • {experience.location}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <FaUsersCog className="text-neutral-500" />
                  <span>Collaborative leadership</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-neutral-300">{experience.summary}</p>
              <ul className="mt-5 space-y-3 text-sm text-neutral-300">
                {experience.contributions.map((item) => (
                  <li key={item} className="flex gap-3">
                    <FaLightbulb className="mt-1 shrink-0 text-xs text-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Experience;
