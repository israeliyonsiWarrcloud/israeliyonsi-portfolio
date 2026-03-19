import { Sidebar } from "@/components/layout/sidebar";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ScrollProgress } from "@/components/animations/scroll-progress";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Press } from "@/components/sections/press";
import { Awards } from "@/components/sections/awards";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Sidebar />
      <MobileNav />

      <main className="lg:ml-[280px]">
        <section id="hero">
          <Hero />
        </section>
        <div className="section-divider" />
        <section id="about">
          <About />
        </section>
        <div className="section-divider" />
        <section id="projects">
          <Projects />
        </section>
        <div className="section-divider" />
        <section id="experience">
          <Experience />
        </section>
        <div className="section-divider" />
        <section id="skills">
          <Skills />
        </section>
        <div className="section-divider" />
        <section id="press">
          <Press />
        </section>
        <div className="section-divider" />
        <section id="awards">
          <Awards />
        </section>
        <div className="section-divider" />
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
