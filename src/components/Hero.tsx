"use client";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 backdrop-blur-sm border border-neutral-800 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
      {/* Decorative glow */}
      <div className="absolute -top-20 -left-20 h-96 w-96 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-96 w-96 bg-purple-500/10 rounded-full blur-3xl" />

      <motion.div
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="bg-gradient-to-b mb-5 from-white via-neutral-200 to-neutral-500 bg-clip-text text-xl md:text-3xl font-extrabold tracking-tight text-transparent "
        >
          لا إله إلا الله محمد رسول الله
        </motion.h1>
        <motion.h1
          variants={itemVariants}
          className="bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl"
        >
          Mahmudul Hasan Anabil
        </motion.h1>

        {/* Role */}
        <motion.h2
          variants={itemVariants}
          className="mt-3 text-lg sm:text-xl text-sky-200 font-medium"
        >
          Full-Stack Web Developer | AI & IoT Enthusiast
        </motion.h2>

        {/* Location & Email */}
        <motion.p
          variants={itemVariants}
          className="mt-1 text-neutral-400 text-sm sm:text-base"
        >
          Dhaka, Bangladesh ·{" "}
          <a
            href="mailto:anabil1310@gmail.com"
            className="text-sky-400 hover:text-sky-300"
          >
            anabil1310@gmail.com
          </a>
        </motion.p>

        {/* Short description */}
        <motion.p
          variants={itemVariants}
          className="mt-5 max-w-2xl text-neutral-300 text-sm sm:text-base leading-relaxed"
        >
          Alhamdulillah, Allah has blessed me with the knowledge and ability to
          work with modern web technologies like{" "}
          <span className="font-medium text-sky-200">
            React.js, Node.js, MongoDB, and Express.js
          </span>
          . Through His guidance, I’ve been able to build impactful web
          platforms, participate in global hackathons, and explore AI-driven IoT
          solutions that strive to benefit people and push the boundaries of
          technology.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-6 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://linkedin.com/in/mahmudulhasananabil"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-sky-500 bg-sky-500/10 px-5 py-2 text-sm text-sky-300 transition-all hover:bg-sky-500/20 hover:border-sky-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/hasanabill"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-purple-500 bg-purple-500/10 px-5 py-2 text-sm text-purple-300 transition-all hover:bg-purple-500/20 hover:border-purple-400"
          >
            GitHub
          </a>
          <a
            href="#projects"
            className="rounded-full border border-neutral-700 bg-neutral-800 px-5 py-2 text-sm text-neutral-200 transition-all hover:bg-neutral-700"
          >
            View My Projects
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
