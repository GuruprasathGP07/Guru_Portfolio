import React from 'react';
import { contactInfo } from '../../data/content';
import { IsometricKeycapGrid } from '../3d/IsometricKeycapGrid';
import { FileText, ArrowRight, Github, Linkedin, ChevronDown, Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-28 pb-16 overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm font-mono uppercase tracking-widest text-slate-400 font-semibold"
            >
              Hi, I am
            </motion.p>

            {/* Stacked HUGE Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-0"
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold font-heading tracking-tighter text-white uppercase leading-none">
                Guru
              </h1>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold font-heading tracking-tighter text-slate-300 uppercase leading-none">
                Prasath
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-400 max-w-lg font-sans leading-relaxed"
            >
              A MERN Stack Developer & Competitive Programmer
            </motion.p>

            {/* Button Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4 pt-2"
            >
              {/* Primary Resume Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a href="/resume.pdf" download="Guru_Prasath_Resume.pdf">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3.5 rounded-2xl bg-white text-slate-950 font-semibold text-sm shadow-xl hover:bg-slate-200 transition-colors inline-flex items-center gap-2"
                  >
                    <Download className="w-4 h-4 text-slate-950" />
                    <span>Download Resume</span>
                  </motion.button>
                </a>

                {contactInfo.resumeUrl && (
                  <a
                    href={contactInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 rounded-2xl bg-slate-900 border border-white/20 hover:border-cyan-400/50 text-slate-200 hover:text-white transition-colors inline-flex items-center gap-2 text-sm font-semibold"
                  >
                    <FileText className="w-4 h-4 text-cyan-400" />
                    <span>View Drive Resume</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                )}
              </div>

              {/* Secondary Row: Hire Me + Square Social Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleScrollTo('contact')}
                  className="px-6 py-3 rounded-2xl bg-slate-900 border border-white/20 text-white font-semibold text-sm hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
                >
                  <span>Hire Me</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </button>

                {/* Social Icons */}
                <a
                  href={contactInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-slate-900 border border-white/10 hover:border-white/40 text-slate-300 hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={contactInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-slate-900 border border-white/10 hover:border-white/40 text-slate-300 hover:text-white transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={contactInfo.codolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2.5 rounded-2xl bg-slate-900 border border-white/10 hover:border-white/40 text-slate-300 hover:text-white transition-all text-xs font-mono font-bold"
                  aria-label="Codolio"
                >
                  Codolio
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Isometric Keycap Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex justify-center"
          >
            <IsometricKeycapGrid onKeyClick={() => handleScrollTo('skills')} />
          </motion.div>
        </div>
      </div>

      {/* Floating Pill-Shaped Scroll Indicator */}
      <div className="relative z-10 flex justify-center pt-6">
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => handleScrollTo('skills')}
          className="px-4 py-2 rounded-full border border-white/20 bg-slate-900/80 text-xs font-mono text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 shadow-md backdrop-blur-md"
        >
          <span>scroll down</span>
          <ChevronDown className="w-3.5 h-3.5 text-cyan-400" />
        </motion.button>
      </div>
    </section>
  );
};
