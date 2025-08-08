"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-neutral-950/40 backdrop-blur-xs">
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 px-6 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl"
        >
          Mahmudul Hasan Anabil
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-base text-neutral-400"
        >
          Dhaka, Bangladesh
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="flex flex-col items-center gap-1"
        >
          <a
            href="mailto:anabil1310@gmail.com"
            className="text-sky-400 hover:text-sky-300"
          >
            anabil1310@gmail.com
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-3 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="https://linkedin.com/in/mahmudulhasananabil"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-neutral-800/60 bg-neutral-900 px-4 py-2 text-sm text-neutral-200 transition-colors hover:border-neutral-700 hover:bg-neutral-800"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/hasanabill"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-neutral-800/60 bg-neutral-900 px-4 py-2 text-sm text-neutral-200 transition-colors hover:border-neutral-700 hover:bg-neutral-800"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
