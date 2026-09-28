import React from 'react';
import { cpStatsData } from '../../data/content';
import { StatCard } from '../ui/StatCard';
import { motion } from 'framer-motion';

export const CPStatsSection: React.FC = () => {
  return (
    <section id="cp" className="py-24 relative bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Huge Bold Centered Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold font-heading tracking-tight text-white uppercase leading-none">
            Competitive Programming
          </h2>
        </div>

        {/* 3 Stat Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cpStatsData.map((stat) => (
            <motion.div
              key={stat.platform}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <StatCard stat={stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
