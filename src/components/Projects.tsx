"use client";
import React from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Vector Power",
    date: "March 2025",
    description:
      "Developed a modern, responsive website for a leading renewable energy company in Bangladesh.",
    features:
      "3D animations, scroll effects, contact form integration, and sustainability-focused content.",
    technologies:
      "Next.js, React.js, TailwindCSS, Framer Motion, GSAP, EmailJS, Spline, Lenis, SplitType.",
  },
  {
    title: "AI Project Competition 2024",
    date: "Nov 2024 – Dec 2024",
    description:
      "Developing a platform for Daffodil International University to manage AI project proposals for a competition.",
    features:
      "Team registration, competition details, dashboard to display and verify team information.",
    technologies: "Vite, React.js, NodeJS, ExpressJS, MySQL, Tailwind",
  },
  {
    title: "Chinta – Government-Citizen Forum",
    date: "October 2024",
    description:
      "A platform to connect citizens with the government for constructive national development.",
    features:
      "National ID-based authentication, pay-to-post model, structured templates, upvote/downvote system, cooldown periods.",
    technologies: "Vite, React, Mongoose Node.js, Express.js, MongoDB",
  },
  {
    title: "Items and Ideas",
    date: "June 2024",
    description: "Developed an Amazon-affiliated website for an Upwork client.",
    features: "Secure dashboard for managing and adding products for sale.",
    technologies: "Vite, React, Node.js, Express.js, MongoDB.",
  },
  {
    title: "Shounen Manufacturer",
    date: "April 2022",
    description:
      "Developed a full-stack web application for a wholesale product sales factory.",
    features:
      "Admin panel, authentication, password reset, and data management.",
    technologies: "React.js, Node.js, Express.js, MongoDB, Firebase.",
  },
];

const Projects = () => (
  <AnimatedSection className="my-16">
    <h2 className="mb-6 text-3xl font-semibold tracking-tight">Projects</h2>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((project, idx) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.05 }}
          className="rounded-xl border border-neutral-800/60 bg-neutral-900/40 p-5 hover:border-neutral-700/80 hover:bg-neutral-900/60"
        >
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-bold text-neutral-100">{project.title}</h3>
            <span className="shrink-0 text-xs text-neutral-400">{project.date}</span>
          </div>
          <p className="mt-2 text-sm text-neutral-300">{project.description}</p>
          <p className="mt-3 text-sm text-neutral-400">
            <span className="font-medium text-neutral-300">Features:</span> {project.features}
          </p>
          <p className="mt-1 text-sm text-neutral-400">
            <span className="font-medium text-neutral-300">Technologies:</span> {project.technologies}
          </p>
        </motion.div>
      ))}
    </div>
  </AnimatedSection>
);

export default Projects;
