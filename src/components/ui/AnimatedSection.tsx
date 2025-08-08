"use client";
import React from "react";
import { motion } from "framer-motion";

type AnimatedSectionProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export default function AnimatedSection({
  children,
  delay = 0,
  className,
}: AnimatedSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
