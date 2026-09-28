import React from 'react';
import { currentlyData } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { Card3D } from '../ui/Card3D';
import { Badge } from '../ui/Badge';
import { BrainCircuit, Target, Trophy, Flame, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/animations';

export const Currently: React.FC = () => {
  return (
    <section id="currently" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Continuous Learning & Scouting"
          title="What I'm Focused On Right Now"
          subtitle="Deepening agentic AI systems knowledge and scouting upcoming 2026 hackathons."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Learning Focus */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <Card3D depth={25} className="h-full space-y-4 border-cyan-500/30 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <Badge variant="brand" size="sm">
                    Active Study
                  </Badge>
                  <h3 className="text-lg font-bold text-text-primary mt-1">Agentic AI & RAG</h3>
                </div>
              </div>

              <p className="text-xs text-text-muted">Mastering cutting-edge LLM frameworks and autonomous multi-agent pipelines:</p>

              <ul className="space-y-2">
                {currentlyData.topics.map((topic, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </Card3D>
          </motion.div>

          {/* Card 2: Internship Target */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1 }}
          >
            <Card3D depth={25} className="h-full space-y-4 border-indigo-500/30 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <Badge variant="accent" size="sm">
                    Career Target
                  </Badge>
                  <h3 className="text-lg font-bold text-text-primary mt-1">Summer 2026 Internships</h3>
                </div>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed pt-2">
                {currentlyData.targetInternships}
              </p>

              <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300">
                🚀 Ideal Roles: Full-Stack MERN Developer, AI Engineering Intern, Software Development Intern.
              </div>
            </Card3D>
          </motion.div>

          {/* Card 3: Upcoming Hackathons */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2 }}
          >
            <Card3D depth={25} className="h-full space-y-4 border-amber-500/30 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <Badge variant="brand" size="sm">
                    2026 Scouting
                  </Badge>
                  <h3 className="text-lg font-bold text-text-primary mt-1">Target Hackathons</h3>
                </div>
              </div>

              <p className="text-xs text-text-muted">Actively building teams and prototypes for upcoming national competitions:</p>

              <ul className="space-y-2.5">
                {currentlyData.upcomingHackathons.map((hackathon, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-text-primary p-2 rounded-lg bg-slate-800/50 border border-slate-800">
                    <Flame className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>{hackathon}</span>
                  </li>
                ))}
              </ul>
            </Card3D>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
