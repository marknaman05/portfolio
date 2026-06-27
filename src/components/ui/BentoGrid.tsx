import { motion } from "motion/react";
import type { ReactNode } from "react";

interface BentoGridProps {
  className?: string;
  children: ReactNode;
}

export function BentoGrid({ className = "", children }: BentoGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[18rem] ${className}`}>
      {children}
    </div>
  );
}

interface BentoGridItemProps {
  className?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
  children?: ReactNode;
}

export function BentoGridItem({
  className = "",
  title,
  description,
  header,
  icon,
  children,
}: BentoGridItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden rounded-2xl group/bento
        bg-slate-900/40 border border-slate-700/60
        hover:border-slate-600/80 hover:shadow-[0_0_30px_rgba(96,165,250,0.06)]
        transition-all duration-300
        flex flex-col justify-between p-6
        ${className}`}
    >
      {/* Header / Visual area */}
      {header && <div className="mb-4">{header}</div>}

      {/* Content */}
      <div className="relative z-10">
        {icon && (
          <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-700 flex items-center justify-center mb-3 group-hover/bento:border-blue-500/30 transition-colors">
            {icon}
          </div>
        )}
        {title && (
          <div className="font-display text-lg font-bold text-white mb-1 group-hover/bento:text-white transition-colors">
            {title}
          </div>
        )}
        {description && (
          <div className="font-sans text-xs text-slate-400 leading-relaxed">
            {description}
          </div>
        )}
        {children}
      </div>

      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}
