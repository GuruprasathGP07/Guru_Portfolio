import React from 'react';
import { achievementsData } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { Card3D } from '../ui/Card3D';
import { Badge } from '../ui/Badge';
import { Trophy, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Honors & Awards"
          title="Achievements & Recognition"
          subtitle="National hackathon finalist titles, coding competition ranks, and academic honors."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <Card3D
                depth={25}
                className={`h-full flex flex-col justify-between space-y-4 ${
                  item.highlight
                    ? 'border-brand-500/40 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 shadow-xl shadow-cyan-500/5'
                    : 'bg-slate-900/90 border-slate-800'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <Badge variant={item.highlight ? 'brand' : 'slate'} size="sm">
                      {item.year}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-text-primary mb-2 flex items-center gap-2">
                    <span>{item.title}</span>
                    {item.highlight && <Sparkles className="w-4 h-4 text-amber-400 shrink-0 inline" />}
                  </h3>

                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.badge && (
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-text-muted">Status:</span>
                    <Badge variant="accent" size="sm" icon={<Star className="w-3 h-3 text-indigo-400" />}>
                      {item.badge}
                    </Badge>
                  </div>
                )}
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
