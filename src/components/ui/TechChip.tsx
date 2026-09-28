import React from 'react';
import { cn } from '../../lib/utils';

export interface TechChipProps {
  name: string;
  highlighted?: boolean;
  className?: string;
}

const iconClassMap: Record<string, string> = {
  React: 'devicon-react-original colored',
  'React.js': 'devicon-react-original colored',
  'Node.js': 'devicon-nodejs-plain colored',
  MongoDB: 'devicon-mongodb-plain colored',
  Express: 'devicon-express-original',
  'Express.js': 'devicon-express-original',
  Git: 'devicon-git-plain colored',
  GitHub: 'devicon-github-original',
  Python: 'devicon-python-plain colored',
  C: 'devicon-c-plain colored',
  'C++': 'devicon-cplusplus-plain colored',
  Java: 'devicon-java-plain colored',
  JavaScript: 'devicon-javascript-plain colored',
  TypeScript: 'devicon-typescript-plain colored',
  HTML: 'devicon-html5-plain colored',
  HTML5: 'devicon-html5-plain colored',
  CSS: 'devicon-css3-plain colored',
  CSS3: 'devicon-css3-plain colored',
  'Tailwind CSS': 'devicon-tailwindcss-plain colored',
  MySQL: 'devicon-mysql-plain colored',
  Firebase: 'devicon-firebase-plain colored',
  Docker: 'devicon-docker-plain colored',
  'Google Cloud Run': 'devicon-googlecloud-plain colored',
  SAP: 'devicon-devicon-plain',
  DSA: 'devicon-networkx-plain colored',
};

export const TechChip: React.FC<TechChipProps> = ({ name, highlighted = false, className }) => {
  const iconClass = iconClassMap[name];

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium transition-all duration-300 border cursor-default select-none',
        highlighted
          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-md shadow-cyan-500/20 scale-105 font-bold'
          : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white',
        className
      )}
    >
      {iconClass ? (
        <i className={`${iconClass} text-sm shrink-0`} />
      ) : (
        <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
      )}
      <span>{name}</span>
    </div>
  );
};
