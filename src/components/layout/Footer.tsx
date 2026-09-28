import React from 'react';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-white/10 py-10 relative z-10 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© Guru Prasath C. All rights reserved.</p>

        <div className="flex items-center gap-6">
          <a href="#hero" onClick={scrollToTop} className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-900 border border-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
