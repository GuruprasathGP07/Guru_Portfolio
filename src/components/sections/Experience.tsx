import React from 'react';
import { experienceData } from '../../data/content';
import { TechChip } from '../ui/TechChip';
import { Badge } from '../ui/Badge';
import { IsometricKeycapGrid } from '../3d/IsometricKeycapGrid';
import { Calendar, CheckCircle, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Decorative 3D Keycap Grid Peeking Behind Cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <IsometricKeycapGrid peekingMode />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Huge Bold Centered Headline */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold font-heading tracking-tight text-white uppercase leading-none">
            Experience
          </h2>
        </div>

        {/* Vertical Stack of Dark Rounded-2xl Cards */}
        <div className="space-y-8">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card rounded-2xl p-6 md:p-8 border border-white/10 space-y-6 shadow-2xl bg-slate-900/90 backdrop-blur-xl"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-white">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-3 text-sm font-semibold text-cyan-400 mt-1 font-mono">
                    <span>{exp.company}</span>
                    {exp.location && (
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>
                <Badge variant="brand" size="md" icon={<Calendar className="w-3.5 h-3.5" />}>
                  {exp.period}
                </Badge>
              </div>

              <ul className="space-y-3">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed font-sans">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Chips */}
              {exp.tech && exp.tech.length > 0 && (
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <TechChip key={t} name={t} />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
