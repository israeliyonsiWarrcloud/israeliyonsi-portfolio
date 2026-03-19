"use client";

import { FadeUp } from "@/components/animations/fade-up";
import { experiences } from "@/data/experience";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <div className="section-padding max-w-4xl mx-auto">
      <FadeUp>
        <h2 className="text-sm font-mono text-primary tracking-wider uppercase mb-2">
          Career
        </h2>
        <h3 className="section-heading mb-8">
          Experience
        </h3>
      </FadeUp>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 sm:left-4 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <FadeUp key={`${exp.company}-${exp.period}`} delay={i * 0.1}>
              <div className="relative pl-8 sm:pl-12">
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-4 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                <div className="glass-card p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-foreground">
                        {exp.company}
                      </h4>
                      <p className="text-sm text-primary">{exp.role}</p>
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">
                    {exp.description}
                  </p>

                  <ul className="space-y-1 mb-4">
                    {exp.achievements.map((achievement, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted-foreground flex gap-2"
                      >
                        <span className="text-primary mt-1.5 shrink-0">▸</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-[10px] font-mono"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  );
}
