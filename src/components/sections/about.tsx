"use client";

import Image from "next/image";
import { FadeUp } from "@/components/animations/fade-up";
import { about } from "@/data/profile";
import { GraduationCap } from "lucide-react";

export function About() {
  return (
    <div className="section-padding max-w-4xl mx-auto">
      <FadeUp>
        <h2 className="text-sm font-mono text-primary tracking-wider uppercase mb-2">
          About Me
        </h2>
        <h3 className="section-heading mb-8">
          Who I Am
        </h3>
      </FadeUp>

      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2 space-y-4">
          {/* Profile image */}
          <FadeUp>
            <div className="relative w-full aspect-[3/2] sm:aspect-[2/1] rounded-2xl overflow-hidden mb-6 border border-border/50">
              <Image
                src="/images/israel-profile-1.webp"
                alt="Israel Iyonsi"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F1A]/40 via-transparent to-transparent" />
            </div>
          </FadeUp>

          {about.paragraphs.map((p, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <p className="text-muted-foreground leading-relaxed text-[15px]">{p}</p>
            </FadeUp>
          ))}

          <FadeUp delay={0.3}>
            <blockquote className="mt-8 pl-5 border-l-2 border-primary italic text-foreground text-lg leading-relaxed">
              &ldquo;{about.philosophy}&rdquo;
            </blockquote>
          </FadeUp>
        </div>

        <div>
          <FadeUp delay={0.2}>
            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center gap-2 text-primary mb-2">
                <GraduationCap className="w-5 h-5" />
                <h4 className="font-semibold text-foreground">Education</h4>
              </div>
              {about.education.map((edu, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-sm font-medium text-foreground">
                    {edu.degree}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-primary">{edu.status}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
