import React from 'react';
import { Experience } from '../../types';
import { Badge } from './Badge';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export interface TimelineProps {
  items: Experience[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-10 py-2">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="relative pl-8 md:pl-10 group"
        >
          {/* Node Icon */}
          <div className="absolute -left-[17px] top-1.5 p-2 rounded-full bg-slate-900 border-2 border-brand-500 text-cyan-400 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-slate-950 transition-all duration-300 shadow-lg shadow-cyan-500/20">
            <Briefcase className="w-4 h-4" />
          </div>

          {/* Timeline Card */}
          <div className="glass-card rounded-2xl p-6 border-border-subtle group-hover:border-border-highlight transition-all">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 className="text-xl font-bold text-text-primary group-hover:text-cyan-400 transition-colors">
                {item.role}
              </h3>
              <Badge variant="brand" size="sm" icon={<Calendar className="w-3 h-3" />}>
                {item.period}
              </Badge>
            </div>

            <div className="flex items-center gap-4 text-sm font-semibold text-indigo-400 mb-4">
              <span>{item.company}</span>
              {item.location && (
                <span className="flex items-center gap-1 text-xs text-text-muted">
                  <MapPin className="w-3 h-3" />
                  {item.location}
                </span>
              )}
            </div>

            <ul className="space-y-2 mb-4">
              {item.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {item.tech && item.tech.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-subtle">
                {item.tech.map((t) => (
                  <Badge key={t} variant="slate" size="sm">
                    {t}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
