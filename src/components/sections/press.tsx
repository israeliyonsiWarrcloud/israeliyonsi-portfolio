"use client";

import { FadeUp } from "@/components/animations/fade-up";
import { pressFeatures } from "@/data/press";
import { ExternalLink, Newspaper } from "lucide-react";

export function Press() {
  return (
    <div className="section-padding max-w-4xl mx-auto">
      <FadeUp>
        <h2 className="text-sm font-mono text-primary tracking-wider uppercase mb-2">
          Media
        </h2>
        <h3 className="section-heading mb-2">
          As Seen In
        </h3>
        <p className="text-muted-foreground text-sm mb-8">
          Featured in leading publications for contributions to software engineering, AI, and fintech.
        </p>
      </FadeUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {pressFeatures.map((feature, i) => (
          <FadeUp key={`${feature.publication}-${i}`} delay={i * 0.05}>
            <a
              href={feature.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-6 flex flex-col h-full hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/50">
                <Newspaper className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs font-mono text-primary uppercase tracking-wider font-medium">
                  {feature.publication}
                </span>
              </div>
              <p className="text-sm text-foreground leading-relaxed flex-1">
                {feature.title}
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-primary transition-colors font-medium">
                Read article
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
