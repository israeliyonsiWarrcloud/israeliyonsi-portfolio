"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";
import { ThemeToggle } from "@/components/shared/theme-toggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Press", href: "#press" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/IsraelIyonsi", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/iyonsi-israel-123b72b0", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/iyonsi_israel", label: "Instagram" },
  { icon: Mail, href: "mailto:iyonsiisrael@gmail.com", label: "Email" },
];

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[280px] flex-col justify-between p-8 border-r border-border z-40 bg-background/80 backdrop-blur-sm">
      <div>
        <Link href="/" className="block mb-4">
          <div className="w-10 h-10 rounded-lg overflow-hidden border border-primary/30 mb-3">
            <Image
              src="/images/logo.webp"
              alt="Israel Iyonsi Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <h1 className="text-xl font-bold text-foreground">Israel Iyonsi</h1>
        </Link>
        <p className="text-sm text-primary font-medium mb-1">
          Senior .NET Software Engineer
        </p>
        <p className="text-xs text-muted-foreground mb-8">
          AI & Cloud Innovator
        </p>

        <nav className="flex flex-col gap-0.5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm py-2.5 px-3 rounded-md transition-all duration-200 relative ${
                activeSection === item.href.slice(1)
                  ? "text-primary bg-primary/10 font-medium before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-4 before:bg-primary before:rounded-full"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="space-y-4 pt-4 border-t border-border pb-2">
        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
        <ThemeToggle />
        <p className="text-[10px] text-muted-foreground/50 font-mono">
          &copy; {new Date().getFullYear()} Israel Iyonsi
        </p>
      </div>
    </aside>
  );
}
