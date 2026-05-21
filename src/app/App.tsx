import React, { useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { ParticleField } from "./components/ParticleField";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { CertificationsSection } from "./components/sections/CertificationsSection";
import { ContactSection } from "./components/sections/ContactSection";

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{
        backgroundColor: "#0a0a0f",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* Background particles */}
      <ParticleField />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="relative z-10">
        <div id="hero">
          <HeroSection />
        </div>

        <div id="about">
          <AboutSection />
        </div>

        <div id="skills">
          <SkillsSection />
        </div>

        <div id="projects">
          <ProjectsSection />
        </div>

        <div id="experience">
          <ExperienceSection />
        </div>

        <div id="certifications">
          <CertificationsSection />
        </div>

        <div id="contact">
          <ContactSection />
        </div>
      </main>

      {/* Background gradient overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(77, 208, 225, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(100, 255, 218, 0.03) 0%, transparent 50%)
          `,
          zIndex: 0,
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(77, 208, 225, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(77, 208, 225, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
          zIndex: 0,
        }}
      />
    </div>
  );
}