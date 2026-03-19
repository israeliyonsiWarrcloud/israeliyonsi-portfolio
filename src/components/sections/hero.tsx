"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Ghost image fades IN as user scrolls past hero (0 at top, 0.08 when scrolled past)
  const ghostOpacity = useTransform(scrollYProgress, [0.3, 0.8], [0, 0.08]);

  return (
    <>
      {/* Fixed ghost image — fades into background as user scrolls past hero */}
      {!prefersReducedMotion && (
        <motion.div
          className="hidden lg:block fixed inset-0 z-0 pointer-events-none"
          style={{ opacity: ghostOpacity }}
        >
          <div className="absolute right-0 top-0 w-[55vw] h-full">
            <Image
              src="/images/israel-headshot.jpg"
              alt=""
              fill
              className="object-cover object-top"
              sizes="55vw"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0F1A] via-[#0C0F1A]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F1A] via-transparent to-[#0C0F1A]/40" />
          </div>
        </motion.div>
      )}

      <div ref={heroRef} className="min-h-screen flex flex-col justify-center mesh-gradient relative overflow-hidden">
        <div className="max-w-6xl mx-auto w-full section-padding pt-20 lg:pt-16 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 lg:gap-12 items-center">
            {/* Text content */}
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
                className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tighter text-foreground leading-[0.9]"
              >
                Israel<br />
                <span className="gold-text">Iyonsi</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-xl leading-relaxed font-light"
              >
                {profile.headline}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 sm:gap-5 pt-4"
              >
                {profile.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="glass-card px-5 py-3 sm:px-6 sm:py-4 border-primary/10"
                  >
                    <div className="text-xl sm:text-2xl font-bold metric-value tracking-tight">
                      {metric.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex gap-4 pt-4"
              >
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(212,168,67,0.25)] hover:shadow-[0_0_40px_rgba(212,168,67,0.4)] hover:-translate-y-0.5"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-border/80 rounded-xl text-foreground font-medium hover:border-primary/50 hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
                >
                  Get in Touch
                </a>
              </motion.div>
            </motion.div>

            {/* Profile image — stays solid in hero, untouched */}
            <motion.div
              variants={prefersReducedMotion ? {} : imageVariants}
              initial="hidden"
              animate="visible"
              className="hidden lg:block relative"
            >
              <div className="relative w-[340px] h-[420px]">
                {/* Gold accent border */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/40 via-primary/10 to-transparent" />
                {/* Image container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border/50">
                  <Image
                    src="/images/israel-headshot.jpg"
                    alt="Israel Iyonsi - Senior .NET Software Engineer"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="340px"
                  />
                  {/* Subtle bottom gradient fade into background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F1A]/60 via-transparent to-transparent" />
                </div>
                {/* Decorative gold glow behind image */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px]" />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="w-5 h-5 text-muted-foreground animate-bounce" />
          </a>
        </motion.div>
      </div>
    </>
  );
}
