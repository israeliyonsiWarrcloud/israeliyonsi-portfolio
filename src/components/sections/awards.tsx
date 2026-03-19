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
        <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          Awards
        </h3>
      </FadeUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {awards.map((award, i) => (
          <FadeUp key={award.title} delay={i * 0.1}>
            <div className="glass-card p-6 sm:p-8 border border-primary/20 hover:gold-glow transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">
                    {award.title}
                  </h4>
                  <p className="text-xs text-primary font-mono">
                    {award.organization} &bull; {award.year}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {award.description}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
