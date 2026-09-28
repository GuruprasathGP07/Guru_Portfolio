import React, { useState, useEffect } from 'react';
import { StarfieldCanvas } from './components/3d/StarfieldCanvas';
import { LoadingCounter } from './components/layout/LoadingCounter';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Currently } from './components/sections/Currently';
import { ExperienceSection } from './components/sections/Experience';
import { ProjectsSection } from './components/sections/Projects';
import { CPStatsSection } from './components/sections/CPStats';
import { SkillsSection } from './components/sections/Skills';
import { AchievementsSection } from './components/sections/Achievements';
import { CertificationsSection } from './components/sections/Certifications';
import { ContactSection } from './components/sections/Contact';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable browser automatic scroll restoration & scroll to top homepage
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  };

  return (
    <div className="relative min-h-screen bg-[#0a0e17] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 transition-colors duration-300">
      {/* 0 -> 100% Animated Loading Counter */}
      {isLoading && <LoadingCounter onComplete={handleLoadingComplete} />}

      {/* Near-Black Drifting Starfield Background Canvas */}
      <StarfieldCanvas />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Currently />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CPStatsSection />
        <AchievementsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Understated Footer */}
      <Footer />
    </div>
  );
};

export default App;
