import React from "react";
import { motion } from "motion/react";
import { MapPin } from "@phosphor-icons/react";
import { contact } from "../data/resume";
import avatarPixel from "../assets/avatar-pixel.png";
import { PixelCat, PixelGear, PixelHeart, PixelSunglasses } from "./PixelStickers";

// White Hoodie SVG Mockup Card
const HoodieCard: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: -50, rotate: -8 }}
    animate={{ opacity: 1, x: 0, rotate: -8 }}
    transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
    whileHover={{ rotate: -4, scale: 1.05, y: -5 }}
    className="retro-card bg-white p-5 rounded-2xl w-48 shadow-[4px_4px_0px_0px_#121212] select-none hidden lg:flex flex-col items-center gap-4 cursor-pointer"
  >
    <svg viewBox="0 0 100 100" className="w-24 h-24 fill-[#f1f5f9] stroke-retro-border" strokeWidth="2.5">
      {/* Hoodie Body Outline */}
      <path d="M20 90h60V60l-8-25-6-15h-32l-6 15-8 25z" />
      {/* Sleeves */}
      <path d="M20 60l-12 18v8l12-4zM80 60l12 18v8l-12-4z" />
      {/* Hood */}
      <path d="M35 20c0-10 8-12 15-12s15 2 15 12-8 15-15 15-15-5-15-15z" fill="#cbd5e1" />
      <path d="M45 20c0-8 2-10 5-10s5 2 5 10-2 8-5 8-5-2-5-8z" fill="#94a3b8" />
      {/* Pocket */}
      <path d="M35 70h30l-4 12H39z" fill="#cbd5e1" />
    </svg>
    <div className="text-center font-mono font-bold text-[10px] tracking-wide text-retro-border leading-tight">
      <p className="text-retro-blue">CODE IS</p>
      <p>MY THERAPY</p>
      <div className="w-8 h-0.5 bg-retro-blue mx-auto mt-1.5" />
    </div>
  </motion.div>
);

// White Coffee Mug SVG Mockup Card
const MugCard: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: 50, rotate: 8 }}
    animate={{ opacity: 1, x: 0, rotate: 8 }}
    transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
    whileHover={{ rotate: 4, scale: 1.05, y: -5 }}
    className="retro-card bg-white p-5 rounded-2xl w-48 shadow-[4px_4px_0px_0px_#121212] select-none hidden lg:flex flex-col items-center gap-4 cursor-pointer"
  >
    <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-retro-border" strokeWidth="2.5" fill="none">
      {/* Mug Body */}
      <rect x="25" y="25" width="42" height="55" rx="6" fill="#f8fafc" />
      {/* Mug Handle */}
      <path d="M67 35h15v30H67" strokeWidth="3" />
      {/* Coffee Shadow inside */}
      <ellipse cx="46" cy="25" rx="21" ry="5" fill="#e2e8f0" />
      {/* Monogram graphic */}
      <path d="M38 52h16M38 60h10" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
    <div className="text-center font-mono font-bold text-[10px] tracking-wide text-retro-border leading-tight">
      <p className="text-retro-blue">COFFEE FUELS</p>
      <p>MY CHAOS</p>
      <div className="w-8 h-0.5 bg-retro-blue mx-auto mt-1.5" />
    </div>
  </motion.div>
);

export const RetroHero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[100dvh] pt-32 pb-20 px-4 md:px-8 flex flex-col items-center relative overflow-hidden bg-dot-grid-light">
      
      {/* Floating Cat Sticker above Title */}
      <div className="absolute top-12 left-1/4 hidden md:block z-10 rotate-[-12deg] pointer-events-none select-none">
        <PixelCat />
      </div>

      {/* Main Title Banner "P [gear] R T F O L I O" */}
      <div className="relative flex flex-col items-center select-none mb-12">
        
        {/* Floating circular avatar with heart badge */}
        <div className="absolute -top-16 left-6 md:-left-12 z-20">
          <div className="relative">
            <div className="w-20 h-20 rounded-full border-2.5 border-retro-border bg-white overflow-hidden p-0.5 shadow-[3px_3px_0px_0px_#121212]">
              <img
                src={avatarPixel}
                alt="Naman Pixel Avatar"
                className="w-full h-full rounded-full object-cover"
                onError={(e) => {
                  // Fallback if avatar isn't copied yet
                  e.currentTarget.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80";
                }}
              />
            </div>
            {/* Heart sticker badge overlay */}
            <div className="absolute -bottom-2 -left-2 z-30 rotate-[-10deg]">
              <PixelHeart className="w-8 h-8 filter drop-shadow-sm" />
            </div>
          </div>
        </div>

        {/* Massive Styled Header */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-retro-border flex items-center gap-1 sm:gap-2 leading-none uppercase">
          P
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="inline-block"
          >
            <PixelGear className="w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
          </motion.span>
          RTFOLIO
        </h1>
      </div>

      {/* Hero Sub-cards grid */}
      <div className="flex items-center justify-center gap-12 w-full max-w-5xl z-10">
        
        {/* Left Hoodie mockup */}
        <HoodieCard />

        {/* Center Bio Card */}
        <div className="retro-card bg-white w-full max-w-xl rounded-3xl p-6 md:p-8 flex flex-col gap-6 relative">
          {/* Decorative Tag */}
          <div className="absolute -top-3.5 left-8 px-4 py-1.5 bg-retro-border text-white border-2 border-retro-border rounded-lg font-mono text-[9px] font-bold tracking-widest uppercase shadow-sm">
            AI AGENT BUILDER™
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center mt-3">
            {/* Coder Portrait Frame */}
            <div className="w-32 h-32 shrink-0 border-[2.5px] border-retro-border rounded-2xl overflow-hidden p-1 bg-[#fafafa] shadow-[3px_3px_0px_0px_#121212]">
              <img
                src={avatarPixel}
                alt="Naman Portrait"
                className="w-full h-full rounded-xl object-cover object-center"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80";
                }}
              />
            </div>

            {/* Monospace Bio Text */}
            <div className="flex-1 text-center sm:text-left">
              <p className="font-mono text-xs md:text-sm font-bold text-retro-border leading-relaxed italic">
                I'M NAMAN &mdash; A SOFTWARE ENGINEER CREATING PLAYFUL AND ROBUST DIGITAL SYSTEMS
                THAT TRANSCEND COGNITION, INCUBATING AUTONOMOUS AI AGENTS & DYNAMIC INTERFACES.
              </p>
              
              {/* Location Badge */}
              <div className="flex items-center justify-center sm:justify-start gap-1 mt-3 text-retro-gray font-mono text-[10px] font-bold">
                <MapPin size={14} weight="bold" className="text-retro-blue" />
                <span>{contact.location.toUpperCase()}</span>
              </div>
            </div>
          </div>

          {/* Brands / Experience Bar */}
          <div className="border-t-2 border-retro-border/10 pt-5 flex flex-col gap-3">
            <span className="font-mono text-[9px] font-bold text-retro-gray uppercase tracking-wider text-center sm:text-left">
              Key Involvements
            </span>
            
            <div className="flex flex-wrap justify-center sm:justify-between items-center gap-3">
              <div className="border border-retro-border/20 px-3 py-1 bg-retro-bg font-mono text-[10px] font-bold tracking-wider rounded text-retro-border">
                BLACKROCK
              </div>
              <div className="border border-retro-border/20 px-3 py-1 bg-retro-bg font-mono text-[10px] font-bold tracking-wider rounded text-retro-border">
                DISNEY+ HOTSTAR
              </div>
              <div className="border border-retro-border/20 px-3 py-1 bg-retro-bg font-mono text-[10px] font-bold tracking-wider rounded text-retro-border">
                BITS PILANI CS
              </div>
            </div>
          </div>

          {/* Floating stickers attached to the Bio Card */}
          <div className="absolute -bottom-6 -left-6 z-20 rotate-[-15deg] hidden sm:block">
            <PixelSunglasses className="w-10 h-10 filter drop-shadow-sm animate-wobble" />
          </div>
          <div className="absolute -bottom-8 -right-6 z-20 rotate-[10deg] hidden sm:block">
            <PixelHeart className="w-9 h-9 filter drop-shadow-sm animate-float" />
          </div>
        </div>

        {/* Right Mug mockup */}
        <MugCard />

      </div>

    </section>
  );
};
