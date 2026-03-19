"use client";

import { FadeUp } from "@/components/animations/fade-up";
import { Github, Linkedin, Instagram, Mail, MapPin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "iyonsiisrael@gmail.com",
    href: "mailto:iyonsiisrael@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "iyonsiisrael",
    href: "https://linkedin.com/in/iyonsiisrael-123b72b0",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "IsraelIyonsi",
    href: "https://github.com/IsraelIyonsi",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@iyonsi_israel",
    href: "https://instagram.com/iyonsi_israel",
  },
];

export function Contact() {
  return (
    <div className="section-padding max-w-4xl mx-auto">
      <FadeUp>
        <h2 className="text-sm font-mono text-primary tracking-wider uppercase mb-2">
          Connect
        </h2>
        <h3 className="section-heading mb-4">
          Let&apos;s Build Something Together
        </h3>
        <p className="text-muted-foreground text-base mb-10 max-w-lg leading-relaxed">
          I welcome collaborations, partnerships, and conversations around software engineering,
          AI, and the future of technology. Feel free to reach out.
        </p>
      </FadeUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {contactLinks.map((link, i) => (
          <FadeUp key={link.label} delay={i * 0.1}>
            <a
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              className="glass-card glass-card-hover p-5 flex items-center gap-4 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <link.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {link.label}
                </p>
                <p className="text-xs text-muted-foreground">{link.value}</p>
              </div>
            </a>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={0.4}>
        <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="w-3 h-3" />
          <span>Lagos, Nigeria &bull; Open to Remote & UK-based roles</span>
        </div>
      </FadeUp>

      <FadeUp delay={0.5}>
        <div className="mt-20 pt-10 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground/70 font-mono tracking-wider">
            &copy; {new Date().getFullYear()} Israel Iyonsi. All rights reserved.
          </p>
        </div>
      </FadeUp>
    </div>
  );
}
