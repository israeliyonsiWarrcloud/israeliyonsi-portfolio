"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "@/data/profile";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen flex flex-col justify-center mesh-gradient relative">
      <div className="max-w-4xl mx-auto w-full section-padding pt-20 lg:pt-16">
        <motion.div
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.p
            variants={itemVariants}
            className="text-primary font-mono text-sm tracking-wider uppercase"
          >
            Software Engineer &bull; AI & Cloud Innovator
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-7xl lg:text-9xl font-bold tracking-tighter text-foreground leading-[0.9]"
          >
            Israel<br />
            <span className="gold-text">Iyonsi</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light"
          >
            {profile.headline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 sm:gap-5 pt-6"
          >
            {profile.metrics.map((metric) => (
              <div
                key={metric.label}
                className="glass-card px-6 py-4 sm:px-7 sm:py-5 border-primary/10"
              >
                <div className="text-2xl sm:text-3xl font-bold metric-value tracking-tight">
                  {metric.value}
                </div>
                <div className="text-[11px] sm:text-xs text-muted-foreground mt-1.5 uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 pt-6"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(212,168,67,0.25)] hover:shadow-[0_0_40px_rgba(212,168,67,0.4)] hover:-translate-y-0.5"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border/80 rounded-xl text-foreground font-medium hover:border-primary/50 hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll to about section">
          <ArrowDown className="w-5 h-5 text-muted-foreground animate-bounce" />
        </a>
      </motion.div>
    </div>
  );
}
