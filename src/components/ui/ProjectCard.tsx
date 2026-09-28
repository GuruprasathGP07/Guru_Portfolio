import React from 'react';
import { Project } from '../../types';
import { Card3D } from './Card3D';
import { Badge } from './Badge';
import { ExternalLink, Github, Sparkles, ArrowRight, Bot, BookOpen, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

const getProjectIcon = (id: string) => {
  switch (id) {
    case 'votemithra':
      return <Bot className="w-5 h-5 text-cyan-400 animate-pulse" />;
    case 'digital-bookstore':
      return <BookOpen className="w-5 h-5 text-emerald-400" />;
    default:
      return <Code2 className="w-5 h-5 text-indigo-400" />;
  }
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <Card3D
      depth={35}
      onClick={() => onSelect(project)}
      className={`group cursor-pointer flex flex-col justify-between overflow-hidden relative ${
        project.featured
          ? 'md:col-span-2 border-cyan-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-2xl shadow-cyan-500/10 hover:border-cyan-400/80'
          : 'bg-slate-900/90 border-slate-800 hover:border-cyan-500/40'
      }`}
    >
      {/* Top Animated Neon Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

      <div>
        {/* Image Container with Hover Zoom & Overlays */}
        <div className="relative h-60 sm:h-72 rounded-xl overflow-hidden mb-6 bg-slate-900 shadow-xl border border-white/5">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            width={800}
            height={450}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

          {/* Top Left: Animated Glowing Category Icon Badge */}
          <div className="absolute top-3 left-3 z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-2.5 px-3 rounded-2xl bg-slate-950/80 border border-white/15 backdrop-blur-md shadow-2xl flex items-center gap-2 group-hover:border-cyan-400/60 transition-colors"
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute -inset-1 rounded-full bg-cyan-400/30 blur-sm animate-ping" />
                {getProjectIcon(project.id)}
              </div>
              <span className="text-[11px] font-bold font-mono text-slate-200 tracking-wider uppercase">
                {project.category}
              </span>
            </motion.div>
          </div>

          {/* Top Right: Animated Action Buttons (Live Demo + GitHub) */}
          <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
            {project.liveUrl && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-3 py-1.5 rounded-full bg-slate-950/90 hover:bg-emerald-400 text-emerald-400 hover:text-slate-950 font-mono text-xs font-bold border border-emerald-500/50 hover:border-emerald-400 transition-all flex items-center gap-1.5 shadow-xl backdrop-blur-md group/live"
                title="Launch Live Demo Application"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>LIVE DEMO</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 transition-transform" />
              </motion.a>
            )}

            {project.githubUrl && (
              <motion.a
                whileHover={{ scale: 1.08, rotate: 8 }}
                whileTap={{ scale: 0.92 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-full bg-slate-950/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/15 hover:border-cyan-400/50 transition-all backdrop-blur-md shadow-xl"
                title="View GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </motion.a>
            )}
          </div>

          {/* Featured Badge Overlay if featured */}
          {project.featured && (
            <div className="absolute bottom-3 left-3 z-10">
              <Badge variant="brand" size="sm" icon={<Sparkles className="w-3.5 h-3.5 text-cyan-400" />}>
                Featured Flagship
              </Badge>
            </div>
          )}
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-1 mb-3">
          <h3 className="text-xl md:text-2xl font-extrabold text-white group-hover:text-cyan-400 transition-colors font-heading tracking-tight flex items-center justify-between">
            <span>{project.title}</span>
          </h3>
          {project.subtitle && (
            <p className="text-xs font-mono text-cyan-400 font-semibold">{project.subtitle}</p>
          )}
        </div>

        {/* Short Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3 font-sans">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="slate" size="sm">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Interactive Animated Footer CTA */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono font-bold text-slate-400 group-hover:text-cyan-400 transition-colors">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>Click to View 3D Modal & Architecture</span>
        </span>
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="inline-flex items-center gap-1 text-cyan-400 font-bold"
        >
          Explore <ArrowRight className="w-4 h-4" />
        </motion.span>
      </div>
    </Card3D>
  );
};
