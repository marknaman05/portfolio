import React from "react";
import { motion } from "motion/react";
import { PixelBeerMug } from "./PixelStickers";

interface StickyNoteProps {
  day: string;
  task: string;
  rotation: number;
  colorClass: string;
  delay: number;
  children?: React.ReactNode;
}

const StickyNote: React.FC<StickyNoteProps> = ({
  day,
  task,
  rotation,
  colorClass,
  delay,
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: rotation - 5 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, type: "spring", stiffness: 100 }}
      whileHover={{ 
        rotate: rotation > 0 ? rotation + 2 : rotation - 2, 
        y: -8, 
        scale: 1.05,
        transition: { duration: 0.2 } 
      }}
      className={`relative w-44 h-44 p-4 border-[2.5px] border-retro-border shadow-[4px_4px_0px_0px_#121212] flex flex-col justify-between cursor-pointer select-none ${colorClass}`}
    >
      {/* Tape Effect */}
      <div className="absolute -top-3 left-12 right-12 h-6 bg-[#ffffff]/60 border-x-[1.5px] border-y-[1px] border-retro-border/30 rotate-1 transform shadow-sm" />
      
      <div>
        <h4 className="font-handwritten text-2xl font-bold tracking-wide text-retro-border/70 border-b-[1.5px] border-retro-border/20 pb-1">
          {day}
        </h4>
        <p className="font-handwritten text-xl font-medium text-retro-blue leading-tight mt-3">
          {task}
        </p>
      </div>

      {children && <div className="self-end">{children}</div>}
    </motion.div>
  );
};

export const WorkflowSticky: React.FC = () => {
  return (
    <section id="workflow" className="py-20 px-4 md:px-8 max-w-6xl mx-auto flex flex-col items-center">
      <div className="text-center mb-12">
        <span className="font-mono text-xs uppercase tracking-[0.2em] bg-retro-blue/10 text-retro-blue px-3 py-1 rounded-full border border-retro-blue/20">
          My Routine
        </span>
        <h2 className="font-display text-4xl md:text-5xl mt-3 font-bold">
          Weekly Workflow
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-6">
        <StickyNote
          day="Wednesday"
          task="FIXING RUNTIME BUGS & PERSISTENCE"
          rotation={-2}
          colorClass="bg-[#fef08a]" // Yellow
          delay={0.1}
        />
        <StickyNote
          day="Thursday"
          task="PROMPTING AGENTS & RE-ROUTING TOOLS"
          rotation={3}
          colorClass="bg-[#bbf7d0]" // Green
          delay={0.2}
        />
        <StickyNote
          day="Friday"
          task="SHIPPING DYNAMIC FRONTEND COMPONENTS"
          rotation={-1.5}
          colorClass="bg-[#bfdbfe]" // Blue
          delay={0.3}
        />
        <StickyNote
          day="Saturday"
          task="WEEKEND BUILD & CHILL"
          rotation={4}
          colorClass="bg-[#fbcfe8]" // Pink
          delay={0.4}
        >
          <PixelBeerMug className="w-8 h-8 animate-float" />
        </StickyNote>
      </div>
    </section>
  );
};
