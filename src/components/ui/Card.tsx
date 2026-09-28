import React from 'react';
import { cn } from '../../lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glass?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = true,
  glass = true,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : undefined}
      className={cn(
        'rounded-2xl p-6 transition-all duration-300 relative overflow-hidden',
        glass ? 'glass-card' : 'bg-bg-secondary border border-border-subtle',
        hoverEffect && 'hover:border-border-highlight hover:shadow-xl hover:shadow-brand-500/10',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
