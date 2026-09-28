import React from 'react';
import { motion } from 'framer-motion';

export interface KeycapItem {
  name: string;
  keyLetter: string;
  iconClass: string;
  color: string;
}

export const keycapsData: KeycapItem[] = [
  { name: 'JavaScript', keyLetter: 'J', iconClass: 'devicon-javascript-plain colored', color: '#f7df1e' },
  { name: 'React', keyLetter: 'R', iconClass: 'devicon-react-original colored', color: '#61dafb' },
  { name: 'Node.js', keyLetter: 'N', iconClass: 'devicon-nodejs-plain colored', color: '#339933' },
  { name: 'MongoDB', keyLetter: 'M', iconClass: 'devicon-mongodb-plain colored', color: '#47a248' },
  { name: 'Python', keyLetter: 'P', iconClass: 'devicon-python-plain colored', color: '#3776ab' },
  { name: 'Java', keyLetter: 'J', iconClass: 'devicon-java-plain colored', color: '#007396' },
  { name: 'C++', keyLetter: 'C', iconClass: 'devicon-cplusplus-plain colored', color: '#00599c' },
  { name: 'C', keyLetter: 'C', iconClass: 'devicon-c-plain colored', color: '#a8b9cc' },
  { name: 'Git', keyLetter: 'G', iconClass: 'devicon-git-plain colored', color: '#f05032' },
  { name: 'GitHub', keyLetter: 'G', iconClass: 'devicon-github-original', color: '#ffffff' },
  { name: 'MySQL', keyLetter: 'M', iconClass: 'devicon-mysql-plain colored', color: '#4479a1' },
  { name: 'Tailwind CSS', keyLetter: 'T', iconClass: 'devicon-tailwindcss-plain colored', color: '#06b6d4' },
  { name: 'HTML5', keyLetter: 'H', iconClass: 'devicon-html5-plain colored', color: '#e34f26' },
  { name: 'CSS3', keyLetter: 'C', iconClass: 'devicon-css3-plain colored', color: '#1572b6' },
  { name: 'DSA', keyLetter: 'D', iconClass: 'devicon-networkx-plain colored', color: '#a855f7' },
];

export interface IsometricKeycapGridProps {
  activeKey?: string | null;
  interactive?: boolean;
  peekingMode?: boolean;
  onKeyClick?: (keycap: KeycapItem) => void;
}

export const IsometricKeycapGrid: React.FC<IsometricKeycapGridProps> = ({
  activeKey,
  peekingMode = false,
  onKeyClick,
}) => {
  return (
    <div
      className={`relative flex items-center justify-center transition-all duration-500 ${
        peekingMode ? 'scale-75 opacity-25 pointer-events-none' : 'scale-90 md:scale-100'
      }`}
      style={{ perspective: 1200 }}
    >
      {/* Tilted 3D Isometric Keycap Grid */}
      <div
        style={{
          transform: 'rotateX(52deg) rotateZ(-28deg) translateZ(0)',
          transformStyle: 'preserve-3d',
        }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-4 md:gap-5 p-6 rounded-3xl bg-slate-900/60 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] backdrop-blur-md"
      >
        {keycapsData.map((keycap, idx) => {
          const isActive =
            activeKey &&
            (activeKey.toUpperCase() === keycap.keyLetter ||
              keycap.name.toUpperCase().startsWith(activeKey.toUpperCase()));

          return (
            <motion.div
              key={idx}
              whileHover={{
                translateZ: 22,
                scale: 1.08,
                transition: { duration: 0.15 },
              }}
              animate={
                isActive
                  ? {
                      translateZ: 30,
                      scale: 1.15,
                      boxShadow: `0 0 25px ${keycap.color}`,
                    }
                  : { translateZ: 0, scale: 1 }
              }
              onClick={() => onKeyClick && onKeyClick(keycap)}
              style={{
                transformStyle: 'preserve-3d',
                boxShadow: isActive
                  ? `0 15px 30px ${keycap.color}80, inset 0 2px 4px rgba(255,255,255,0.4)`
                  : '0 10px 20px rgba(0,0,0,0.6), inset 0 1px 2px rgba(255,255,255,0.15)',
              }}
              className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-2xl flex flex-col items-center justify-center p-2 cursor-pointer select-none transition-all border ${
                isActive
                  ? 'bg-slate-800 border-white text-white'
                  : 'bg-slate-900/90 hover:bg-slate-800/90 border-white/10 text-slate-300'
              }`}
            >
              {/* Keycap Top Letter Badge */}
              <span className="absolute top-1.5 left-2 text-[10px] font-mono font-bold text-slate-400 opacity-70">
                {keycap.keyLetter}
              </span>

              {/* Devicon Logo Icon */}
              <i className={`${keycap.iconClass} text-2xl sm:text-3xl my-auto`} />

              {/* Tech Name Label */}
              <span className="text-[10px] font-mono font-semibold truncate max-w-full text-center text-slate-300 mt-1">
                {keycap.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
