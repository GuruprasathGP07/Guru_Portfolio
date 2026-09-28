import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'brand' | 'accent' | 'outline' | 'slate' | 'success';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'brand',
  size = 'sm',
  className,
  icon,
}) => {
  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-xs gap-1',
    md: 'px-3.5 py-1 text-xs font-semibold gap-1.5',
  };

  const variantStyles = {
    brand:
      'bg-brand-500/10 text-cyan-400 dark:text-cyan-300 border border-brand-500/30 shadow-sm',
    accent:
      'bg-indigo-500/10 text-indigo-400 dark:text-indigo-300 border border-indigo-500/30',
    slate:
      'bg-slate-500/10 text-text-secondary border border-slate-500/20 dark:bg-slate-800/60 dark:text-slate-300',
    outline:
      'bg-transparent text-text-secondary border border-border-subtle hover:border-brand-500/50',
    success:
      'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium tracking-wide transition-colors',
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="inline-block">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
