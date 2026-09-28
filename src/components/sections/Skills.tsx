import React from 'react';
import { skillsCategories } from '../../data/content';
import { TechChip } from '../ui/TechChip';
import { IsometricKeycapGrid, KeycapItem } from '../3d/IsometricKeycapGrid';
import { useKeyPress } from '../../hooks/useKeyPress';
import { Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const wittyCallouts: Record<string, string> = {
  J: 'JavaScript / Java — Turning coffee into clean async promises & robust bytecode!',
  P: 'Python — Writing NLP models, BERT embeddings & data pipelines in 5 lines!',
  R: 'React — Stateful component re-renders faster than your morning coffee!',
  C: 'C / C++ — Pure pointer memory control & raw competitive algorithm speed!',
  M: 'MongoDB / MySQL — Resilient data schemas & lightning-fast database queries!',
  G: 'Git / GitHub — Clean zero-conflict commits & seamless team collaboration!',
  T: 'Tailwind CSS — Utility-first styling without ever leaving your JSX!',
  H: 'HTML5 — Semantic DOM structures built for maximum web accessibility!',
  D: 'DSA — Data Structures & Algorithms optimized for sub-millisecond execution!',
};

export const SkillsSection: React.FC = () => {
  const { pressedKey, setPressedKey } = useKeyPress();

  const activeCallout = pressedKey ? wittyCallouts[pressedKey] || null : null;

  return (
    <section id="skills" className="py-24 relative bg-slate-950 border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Huge Bold Centered Headline */}
        <div className="text-center mb-6">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold font-heading tracking-tight text-white uppercase leading-none">
            Tech Stack
          </h2>
          <p className="mt-3 text-sm md:text-base font-mono text-slate-400">
            (hint: press a key)
          </p>
        </div>

        {/* 3D Keycap Grid & Witty Callout Container */}
        <div className="relative flex flex-col items-center justify-center my-12">
          {/* Diagonal Rotated Text Callout on Keypress */}
          <AnimatePresence>
            {activeCallout && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -6, y: 10 }}
                animate={{ opacity: 1, scale: 1, rotate: -4, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: -6, y: -10 }}
                className="mb-6 px-6 py-3 rounded-2xl bg-amber-400 text-slate-950 font-mono text-xs md:text-sm font-bold shadow-2xl border-2 border-white text-center max-w-xl shadow-amber-400/40"
              >
                <div className="flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>{activeCallout}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Interactive 3D Isometric Keycap Grid */}
          <IsometricKeycapGrid
            activeKey={pressedKey}
            onKeyClick={(k: KeycapItem) => setPressedKey(k.keyLetter)}
          />
        </div>

        {/* Categorized Flat Skill Chips */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {skillsCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 border border-white/10 space-y-4"
            >
              <h3 className="text-lg font-bold font-heading text-white pb-3 border-b border-white/10">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => {
                  const isMatch =
                    pressedKey !== null && skill.toUpperCase().startsWith(pressedKey);
                  return <TechChip key={skill} name={skill} highlighted={isMatch} />;
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
