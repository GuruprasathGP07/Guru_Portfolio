import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/animations';
import { Badge } from './Badge';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <div className="mb-3 inline-block">
          <Badge variant="brand" size="md">
            {eyebrow}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-text-primary via-slate-200 to-brand-500">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-20 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  );
};
