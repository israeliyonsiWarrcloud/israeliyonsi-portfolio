"use client";

import { useState } from "react";
import { Menu, X, Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
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

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 h-14 flex items-center justify-between px-4 border-b border-border bg-background/80 backdrop-blur-sm z-50">
      <a href="#" className="text-lg font-bold text-foreground">
        Israel Iyonsi
      </a>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="p-2" aria-label="Open menu">
            <Menu className="w-5 h-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-background border-border">
            <SheetTitle className="text-foreground">Navigation</SheetTitle>
            <nav className="flex flex-col gap-2 mt-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base py-2 px-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3 mt-8 pt-4 border-t border-border">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
