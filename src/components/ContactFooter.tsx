import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, EnvelopeSimple } from "@phosphor-icons/react";
import { PixelHeart } from "./PixelStickers";
import { ConnectModal } from "./ConnectModal";

// Flapping Bat SVG Component using CSS Animation
const RetroBat: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 48 24"
    className={`w-14 h-8 fill-retro-border ${className}`}
    style={{ imageRendering: "pixelated" }}
  >
    {/* Outline & Wings */}
    <path
      strokeWidth="1"
      stroke="#121212"
      className="animate-flap origin-center"
      d="M24 10l3-5 5 2 8-5 1 4-6 5 4 4-7-1-4-5-4 1zm0 0l-3-5-5 2-8-5-1 4 6 5-4 4 7-1 4-5 4 1z"
    />
    {/* Body */}
    <rect x="22" y="7" width="4" height="8" rx="2" fill="#121212" />
    {/* Head & Ears */}
    <path d="M21 4h1v3h-1V4zm5 0h1v3h-1V4z" fill="#121212" />
  </svg>
);

export const ContactFooter: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer id="contact" className="py-20 px-4 md:px-8 max-w-6xl mx-auto border-t-2.5 border-retro-border mt-12 bg-dot-grid-light">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        
        {/* Left Side: Retro 404 Error Card */}
        <div className="retro-card bg-white rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between items-center text-center group">
          {/* Top Label */}
          <div className="w-full flex justify-between items-center mb-6 border-b-[1.5px] border-retro-border/10 pb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-retro-gray flex items-center gap-1.5">
              <span>👾</span> SYSTEM_STATUS
            </span>
            <span className="text-xs font-mono text-retro-gray">404.config</span>
          </div>

          {/* Floating Bat (Animate on hover) */}
          <div className="absolute top-12 right-12 group-hover:translate-y-[-6px] transition-transform duration-300">
            <RetroBat />
          </div>
          <div className="absolute bottom-16 left-12 rotate-[-15deg] opacity-40 group-hover:translate-y-[4px] transition-transform duration-300">
            <RetroBat className="w-10 h-6" />
          </div>

          <div className="my-auto flex flex-col items-center">
            <h1 className="font-display text-7xl md:text-8xl font-bold tracking-tighter text-retro-border">
              404
            </h1>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-retro-pink mt-2">
              THIS PAGE DOESN'T EXIST
            </p>
            <p className="font-handwritten text-2xl text-retro-gray mt-4 max-w-xs">
              But you found a cool hidden retro bat cave!
            </p>
          </div>

          {/* Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-8 border-2 border-retro-border px-5 py-2.5 font-mono text-xs font-bold rounded-xl bg-white hover:bg-retro-bg active:translate-y-px transition-all cursor-pointer shadow-[3px_3px_0px_0px_#121212] flex items-center gap-2"
          >
            Back To Homepage <ArrowRight size={14} weight="bold" />
          </button>
        </div>

        {/* Right Side: Let's Work Together Card */}
        <div className="retro-card bg-white rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between items-center text-center group">
          
          {/* Sticky Post-it note attached dynamically */}
          <motion.div
            initial={{ rotate: 4, y: 10 }}
            whileHover={{ rotate: 1, y: -4 }}
            className="absolute top-4 right-4 w-40 p-3 bg-retro-yellow border-2 border-retro-border shadow-[3px_3px_0px_0px_#121212] z-20 hidden sm:block pointer-events-none select-none"
          >
            {/* Pushpin SVG */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-retro-pink rounded-full border border-retro-border shadow-sm flex items-center justify-center">
              <div className="w-1 h-1 bg-white rounded-full" />
            </div>
            <p className="font-handwritten text-lg font-bold text-retro-border leading-none pt-1">
              YOUR AGENT CALLED. IT WANTS BETTER PROMPTS.
            </p>
          </motion.div>

          <div className="w-full flex justify-between items-center mb-6 border-b-[1.5px] border-retro-border/10 pb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-retro-gray">
              💼 COLLABORATION
            </span>
            <span className="text-xs font-mono text-retro-gray">let_work.sys</span>
          </div>

          <div className="my-auto flex flex-col items-center">
            <h3 className="font-display text-xl md:text-2xl font-bold text-retro-gray uppercase tracking-wider">
              LET'S WORK TOGETHER
            </h3>
            
            {/* Large VIBES GOOD lockup */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
              <span className="font-display text-5xl md:text-6xl font-bold tracking-tight text-retro-border">
                VIBES
              </span>
              <PixelHeart className="w-12 h-12 fill-retro-pink animate-float stroke-retro-border stroke-[1.5px]" />
              <span className="font-display text-5xl md:text-6xl font-bold tracking-tight text-retro-border">
                GOOD
              </span>
            </div>
            
            <p className="font-mono text-xs text-retro-gray mt-6 max-w-sm leading-relaxed">
              Have an idea, redesign, startup project, or want to integrate an autonomous LLM workflow? Drop a line.
            </p>
          </div>

          {/* Active Call To Action Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-8 border-2 border-retro-border px-6 py-3 font-mono text-xs font-bold rounded-full bg-retro-blue text-white hover:bg-blue-600 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#121212] transition-all cursor-pointer shadow-[3px_3px_0px_0px_#121212] flex items-center gap-2 uppercase tracking-wider"
          >
            <EnvelopeSimple size={16} weight="bold" />
            Send Good Ideas Here
          </button>
        </div>

      </div>

      <div className="mt-16 pt-8 border-t-[1.5px] border-retro-border/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-retro-gray">
        <p>&copy; {new Date().getFullYear()} NAMAN AJAY MARKHEDKAR. ALL RIGHTS RESERVED.</p>
        <p className="flex items-center gap-1.5">
          BUILT WITH ☕ &amp; 🤖 &mdash; RETRO NEO-BRUTALISM EDITION
        </p>
      </div>

      <ConnectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  );
};
