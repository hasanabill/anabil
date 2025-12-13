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
    title: "Vector Power",
    date: "March 2025",
    description:
      "A modern, responsive website for a renewable energy company with strong emphasis on storytelling and conversions.",
    highlights: [
      "Immersive 3D animations, parallax storytelling, and scroll-triggered reveals.",
      "Lead capture contact form integrated with automated email notifications.",
      "Content strategy aligned with sustainability goals and brand messaging.",
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Spline",
      "EmailJS",
      "Lenis",
    ],
  },
  {
    title: "AI Project Competition Platform",
    date: "Nov 2024 – Dec 2024",
    description:
      "Competition portal for Daffodil International University to streamline AI project submissions and jury workflows.",
    highlights: [
      "Team onboarding with eligibility validation and member management.",
      "Live dashboard for jury review, verification, and event announcements.",
      "Optimised admin tooling to track submissions and broadcast updates.",
    ],
    technologies: ["Vite", "React", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
  },
  {
    title: "Chinta — Govt & Citizen Forum",
    date: "October 2024",
    description:
      "Civic engagement platform connecting citizens with ministries through structured, impactful dialogue.",
    highlights: [
      "National ID-based authentication and identity verification.",
      "Structured templates that guide policy proposals and problem statements.",
      "Community voting, cooldown systems, and moderation tooling for healthy debates.",
    ],
    technologies: ["Vite", "React", "Node.js", "Express.js", "MongoDB", "Mongoose"],
  },
  {
    title: "Items & Ideas",
    date: "June 2024",
    description:
      "Amazon-affiliated e-commerce experience tailored for an Upwork client, focused on conversion and trust.",
    highlights: [
      "Secure merchant dashboard for catalog curation and product lifecycle management.",
      "SEO-friendly product storytelling with dynamic cross-selling sections.",
      "Modular architecture enabling rapid experimentation with offer layouts.",
    ],
    technologies: ["Vite", "React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Shounen Manufacturer",
    date: "April 2022",
    description:
      "Full-stack application powering sales, inventory, and customer communications for a wholesale factory.",
    highlights: [
      "Role-based admin workspace with audit trails and activity logs.",
      "Authentication, password reset, and granular access controls.",
      "Data visualisations for order trends and production planning.",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Firebase"],
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
        High-impact builds crafted end-to-end, from discovery and system design to polished UI
        engineering and launch support.
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
