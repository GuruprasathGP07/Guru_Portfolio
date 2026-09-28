import React from 'react';
import { CPStat } from '../../types';
import { Card3D } from './Card3D';
import { Badge } from './Badge';
import { AnimatedCounter } from './AnimatedCounter';
import { Code2, Code, Award, ExternalLink, Trophy, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

export interface StatCardProps {
  stat: CPStat;
}

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6 text-cyan-400" />,
  Code: <Code className="w-6 h-6 text-amber-400" />,
  Award: <Award className="w-6 h-6 text-emerald-400" />,
};

export const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  return (
    <Card3D
      depth={30}
      className="flex flex-col justify-between h-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-slate-800 shadow-xl"
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/50 shadow-inner">
              {iconMap[stat.iconName] || <Code className="w-6 h-6 text-brand-500" />}
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-primary">{stat.platform}</h3>
              <p className="text-xs font-mono text-text-muted">@{stat.handle}</p>
            </div>
          </div>
          <Badge variant="brand" size="sm">
            {stat.maxLabel}
          </Badge>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 shadow-inner">
            <div className="flex items-center gap-1.5 text-xs text-text-muted mb-1">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>Contest Rating</span>
            </div>
            <div className="text-2xl md:text-3xl font-extrabold text-cyan-400 font-mono">
              <AnimatedCounter value={stat.rating} />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 shadow-inner">
            <div className="flex items-center gap-1.5 text-xs text-text-muted mb-1">
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              <span>Problems Solved</span>
            </div>
            <div className="text-2xl md:text-3xl font-extrabold text-indigo-400 font-mono">
              <AnimatedCounter value={stat.solved} suffix="+" />
            </div>
          </div>
        </div>

        {stat.extra && (
          <p className="text-xs text-text-secondary bg-slate-800/40 px-3 py-2 rounded-lg border border-slate-800/60 mb-6 flex items-center justify-between">
            <span>Special Milestone:</span>
            <span className="font-semibold text-emerald-400">{stat.extra}</span>
          </p>
        )}
      </div>

      {/* Profile Button */}
      <a
        href={stat.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-brand-500/20 text-brand-500 hover:text-cyan-300 border border-slate-700/60 transition-all flex items-center justify-center gap-2 shadow-md"
        >
          <span>View Profile</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </motion.button>
      </a>
    </Card3D>
  );
};
