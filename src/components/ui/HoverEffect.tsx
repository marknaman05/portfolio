import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";

interface HoverEffectItem {
  title: string;
  description: string;
  icon?: ReactNode;
  details?: string;
}

interface HoverEffectProps {
  items: HoverEffectItem[];
  className?: string;
}

export function HoverEffect({ items, className = "" }: HoverEffectProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-quantum-cyan/[0.08] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <div className="relative z-20 rounded-2xl h-full w-full overflow-hidden bg-zinc-900/60 border border-zinc-800/80 p-6 group-hover:border-zinc-700/80 transition-colors duration-300">
            {/* Icon */}
            {item.icon && (
              <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-quantum-cyan mb-4 group-hover:border-quantum-cyan/30 transition-colors">
                {item.icon}
              </div>
            )}

            {/* Title */}
            <h3 className="font-display text-lg font-bold text-zinc-100 mb-2 group-hover:text-white transition-colors">
              {item.title}
            </h3>

            {/* Description */}
            <p className="font-sans text-sm text-zinc-400 leading-relaxed mb-4">
              {item.description}
            </p>

            {/* Details Tag */}
            {item.details && (
              <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 bg-zinc-950/80 px-3 py-1 rounded border border-zinc-800/60">
                {item.details}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
