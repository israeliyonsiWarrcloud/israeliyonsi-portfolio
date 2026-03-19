"use client";

import { FadeUp } from "@/components/animations/fade-up";
import { awards } from "@/data/awards";
import { Trophy } from "lucide-react";

export function Awards() {
  return (
    <div className="section-padding max-w-4xl mx-auto">
      <FadeUp>
        <h2 className="text-sm font-mono text-primary tracking-wider uppercase mb-2">
          Recognition
        </h2>
        <h3 className="section-heading mb-8">
          Awards
        </h3>
      </FadeUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {awards.map((award, i) => (
          <FadeUp key={award.title} delay={i * 0.1}>
            <div className="glass-card glass-card-hover p-6 sm:p-8 border border-primary/20 transition-all duration-300 relative overflow-hidden group">
              {/* Subtle gold gradient accent in corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-4 mb-5 relative">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 shrink-0">
                  <Trophy className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground leading-tight">
                    {award.title}
                  </h4>
                  <p className="text-xs text-primary font-mono mt-1">
                    {award.organization} &bull; {award.year}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed relative">
                {award.description}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
