import { useRef, useState } from "react";
import type { MouseEvent, ReactNode } from "react";
import { motion } from "motion/react";

interface CardSpotlightProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function CardSpotlight({ children, className = "", delay = 0 }: CardSpotlightProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className={`relative rounded-2xl bg-zinc-900/40 border border-zinc-800/80 overflow-hidden interactive-card flex flex-col justify-between p-8 group ${className}`}
    >
      {/* Spotlight Radial Glow overlay */}
      {hovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-100"
          style={{
            background: `radial-gradient(320px circle at ${coords.x}px ${coords.y}px, rgba(0, 229, 255, 0.08), transparent 80%)`,
          }}
        />
      )}
      
      {/* Card contents */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
}
