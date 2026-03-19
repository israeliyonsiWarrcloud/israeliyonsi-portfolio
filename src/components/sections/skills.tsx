"use client";

import { FadeUp } from "@/components/animations/fade-up";
import { skillCategories } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import {
  Server,
  Cloud,
  Blocks,
  Monitor,
  Database,
  Brain,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Server,
  Cloud,
  Blocks,
  Monitor,
  Database,
  Brain,
};

export function Skills() {
  return (
    <div className="section-padding max-w-4xl mx-auto">
      <FadeUp>
        <h2 className="text-sm font-mono text-primary tracking-wider uppercase mb-2">
          Expertise
        </h2>
        <h3 className="section-heading mb-8">
          Technical Skills
        </h3>
      </FadeUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, i) => {
          const Icon = iconMap[category.icon] || Server;
          return (
            <FadeUp key={category.name} delay={i * 0.08}>
              <div className="glass-card glass-card-hover p-5 h-full hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground text-sm">
                    {category.name}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-[10px] font-mono"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </div>
  );
}
