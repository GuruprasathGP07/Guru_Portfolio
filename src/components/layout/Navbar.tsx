import React, { useState } from 'react';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, Github, Sparkles, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Tech Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'cp', label: 'CP Stats' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(navItems.map((item) => item.id), 120);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Name in Bold White */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="text-lg md:text-xl font-bold font-heading text-white tracking-tight hover:text-cyan-400 transition-colors"
        >
          Guru Prasath C
        </a>

        {/* Right Action Items */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* a) Theme Toggle */}
          <ThemeToggle />

          {/* b) Clean GitHub Profile Link */}
          <a
            href="https://github.com/GuruprasathGP07"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors"
          >
            <Github className="w-3.5 h-3.5 text-white" />
            <span>GitHub</span>
          </a>

          {/* c) Menu Button + Hamburger Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-white text-xs font-semibold font-mono transition-colors flex items-center gap-2 shadow-md"
            aria-label="Toggle Navigation Menu"
          >
            <span>Menu</span>
            {mobileMenuOpen ? <X className="w-4 h-4 text-cyan-400" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Full Slide-In Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-card border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2 max-w-md mx-auto font-mono">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-cyan-400" />}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <a
                  href="/resume.pdf"
                  download="Guru_Prasath_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-slate-950 font-semibold text-sm shadow-md hover:bg-slate-200 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
