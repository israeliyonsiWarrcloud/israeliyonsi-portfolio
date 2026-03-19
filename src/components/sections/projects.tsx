"use client";

import { FadeUp } from "@/components/animations/fade-up";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <div className="section-padding max-w-4xl mx-auto">
      <FadeUp>
        <h2 className="text-sm font-mono text-primary tracking-wider uppercase mb-2">
          Featured Work
        </h2>
        <h3 className="section-heading mb-8">
          Projects & Case Studies
        </h3>
      </FadeUp>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <FadeUp key={project.title} delay={i * 0.1}>
            <div className="glass-card glass-card-hover p-6 sm:p-8 transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <p className="text-xs text-primary font-mono uppercase tracking-wider">
                    {project.company}
                  </p>
                  <h4 className="text-xl sm:text-2xl font-bold text-foreground mt-1">
                    {project.title}
                  </h4>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-3">
                <span className="text-foreground font-medium">Challenge: </span>
                {project.problem}
              </p>

              <p className="text-sm text-muted-foreground mb-4">
                <span className="text-foreground font-medium">Approach: </span>
                {project.approach}
              </p>

              <div className="flex flex-wrap gap-3 mb-4">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="text-center">
                    <div className="text-lg font-bold metric-value">
                      {metric.value}
                    </div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs font-mono"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
