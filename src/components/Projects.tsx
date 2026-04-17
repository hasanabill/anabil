"use client";
import React from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-border";

type Project = {
  title: string;
  date: string;
  description: string;
  highlights: string[];
  technologies: string[];
};

const projects: Project[] = [
  {
    title: "CareScape",
    date: "January 2026",
    description:
      "Built a full-stack, role-based digital healthcare platform with dedicated experiences for patients, doctors, and administrators.",
    highlights: [
      "AI-powered symptom intake and triage with guided user flows.",
      "Doctor recommendation, booking flow, and appointment management.",
      "E-prescriptions, clinical note drafting, profile dashboards, and audit-ready admin analytics.",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth",
      "MongoDB",
      "Mongoose",
      "OpenAI API",
      "Zod",
    ],
  },
  {
    title: "Vector Power",
    date: "March 2025",
    description:
      "Developed a modern, responsive website for a leading renewable energy company in Bangladesh.",
    highlights: [
      "3D animations and advanced scroll effects for engaging storytelling.",
      "Contact form integration for streamlined lead capture.",
      "Sustainability-focused content aligned with brand direction.",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "TailwindCSS",
      "Framer Motion",
      "GSAP",
      "EmailJS",
      "Spline",
      "Lenis",
      "SplitType",
    ],
  },
  {
    title: "AI Project Competition 2024",
    date: "November 2024 - December 2024",
    description:
      "Developing a platform for Daffodil International University to manage AI project proposals for a competition.",
    highlights: [
      "Team registration and competition details management.",
      "Dashboard to display and verify team information.",
      "Structured experience for proposal intake and admin oversight.",
    ],
    technologies: [
      "Vite",
      "React.js",
      "NodeJS",
      "ExpressJS",
      "MySQL",
      "Tailwind",
    ],
  },
  {
    title: "Chinta - Community Social Forum",
    date: "October 2024 – April 2026",
    description:
      "Built a full-stack social discussion platform for community-driven conversations, featuring user profiles, follow system, threaded replies, and real-time direct messaging.",
    highlights: [
      "JWT authentication with modern sign-in/sign-up flows and profile editing.",
      "Category/tag-based forum navigation with upvote/downvote interactions.",
      "Conversation-scoped Socket.IO events for real-time messaging.",
    ],
    technologies: [
      "Vite",
      "React",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Tailwind CSS",
    ],
  },
  {
    title: "Shounen Manufacturer",
    date: "April 2022",
    description:
      "Developed a full-stack wholesale manufacturing web application with secure authentication, role-based admin access, and product/order management workflows.",
    highlights: [
      "Built and integrated core backend services for user, inventory, cart, and review operations.",
      "Implemented frontend modules using React.js and React Query.",
      "Improved maintainability by modularizing server architecture and centralizing API configuration with robust client-side error handling.",
    ],
    technologies: [
      "React.js",
      "React Query",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
];

const Projects = () => (
  <AnimatedSection className="my-20">
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-400/80">
          Selected Case Studies
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-100 md:text-4xl">
          Projects
        </h2>
      </div>
      <p className="max-w-xl text-sm text-neutral-400">
        High-impact builds crafted end-to-end, from discovery and system design
        to polished UI engineering and launch support.
      </p>
    </div>
    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((project, idx) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.06 }}
          className="group relative h-full rounded-2xl border border-neutral-800/70"
        >
          <GlowingEffect
            spread={48}
            disabled={false}
            glow
            proximity={128}
            inactiveZone={0.12}
            className="rounded-2xl"
          />
          <div className="relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl bg-neutral-900/60 p-7 backdrop-blur">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-sky-400/70">
                  Case 0{idx + 1}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-neutral-50 group-hover:text-white">
                  {project.title}
                </h3>
              </div>
              <span className="shrink-0 rounded-full border border-neutral-700/80 px-3 py-1 text-xs text-neutral-400">
                {project.date}
              </span>
            </div>
            <p className="text-sm text-neutral-300">{project.description}</p>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
                Highlights
              </p>
              <ul className="space-y-2 text-sm text-neutral-300">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-neutral-700/70 bg-neutral-800/60 px-3 py-1 text-xs uppercase tracking-wide text-neutral-300 transition-colors duration-200 group-hover:border-sky-500/80 group-hover:text-sky-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </AnimatedSection>
);

export default Projects;
