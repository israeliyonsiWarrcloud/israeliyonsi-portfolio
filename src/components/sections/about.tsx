"use client";

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
        <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          Who I Am
        </h3>
      </FadeUp>

      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2 space-y-4">
          {about.paragraphs.map((p, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <p className="text-muted-foreground leading-relaxed">{p}</p>
            </FadeUp>
          ))}

          <FadeUp delay={0.3}>
            <blockquote className="mt-6 pl-4 border-l-2 border-primary italic text-foreground">
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
