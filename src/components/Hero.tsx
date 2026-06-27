import { ArrowDown } from "@phosphor-icons/react";
import { motion } from "motion/react";
import profileImg from "../assets/profile.png";
import { Spotlight } from "./ui/Spotlight";
import { FlipWords } from "./ui/FlipWords";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export function Hero() {
  const flipWords = ["Quantitative", "Systems", "Financial", "Physics-Driven"];

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Aceternity Spotlight Beams */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 h-[180%] w-[180%]" fill="#00e5ff" />
      <Spotlight className="-top-20 right-0 h-[160%] w-[120%]" fill="#0099cc" />

      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typography Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-quantum-cyan animate-pulse-slow" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-400 uppercase">
                NAMAN MARKHEDKAR
              </span>
            </motion.div>

            {/* Headline with FlipWords */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold leading-[1.05] tracking-tight text-white mb-6"
            >
              <FlipWords words={flipWords} duration={2500} className="text-transparent bg-clip-text bg-gradient-to-r from-quantum-cyan to-white" />
              <br />
              <span className="text-white">
                Engineer.
              </span>
            </motion.h1>

            {/* Subtext with TextGenerateEffect */}
            <TextGenerateEffect
              words="Software Engineer at BlackRock. CS & Physics alumnus of BITS Pilani. Modeling financial systems and engineering high-scale computing architectures through a mathematical lens."
              className="font-sans text-base md:text-lg text-zinc-400 max-w-[50ch] leading-relaxed mb-8"
              duration={0.4}
            />

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <a
                href="#creations"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-quantum-cyan text-black font-sans text-xs uppercase tracking-wider font-semibold hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0.2)]"
              >
                EXPLORE CREATIONS
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-sans text-xs uppercase tracking-wider font-medium hover:border-zinc-500 hover:text-white active:scale-[0.98] transition-all duration-300"
              >
                READ EXPERIENCE
              </a>
            </motion.div>
          </div>

          {/* Right Column: Profile Picture & Physics Orbitals */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-80 h-80 flex items-center justify-center"
            >
              {/* Glowing backdrops */}
              <div className="absolute inset-0 rounded-full bg-quantum-cyan/5 blur-2xl pointer-events-none" />
              
              {/* Spinning orbital rings */}
              <div className="absolute inset-[-20px] rounded-full border border-dashed border-zinc-800/80 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-[-10px] rounded-full border border-zinc-700/30 animate-[spin_25s_linear_infinite_reverse]" />
              <div className="absolute inset-2 rounded-full border border-dashed border-quantum-cyan/20 animate-[spin_15s_linear_infinite]" />
              <div className="absolute inset-10 rounded-full border border-zinc-800/60 animate-[spin_10s_linear_infinite_reverse]" />

              {/* Profile Photo Frame */}
              <div className="relative w-56 h-56 rounded-full p-[2px] bg-gradient-to-tr from-quantum-cyan via-zinc-800 to-zinc-900 shadow-[0_0_40px_rgba(0,229,255,0.1)] overflow-hidden group">
                <div className="w-full h-full rounded-full bg-[#09090b] overflow-hidden relative">
                  <img
                    src={profileImg}
                    alt="Naman Markhedkar"
                    className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:scale-105 transition-all duration-500"
                  />
                  {/* Shimmer Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-quantum-cyan/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </div>

              {/* Floating Physical/Financial Constant Badges */}
              <div 
                className="absolute -top-4 -right-2 px-3 py-1.5 rounded-md bg-zinc-950/80 border border-zinc-800 font-mono text-[9px] text-quantum-cyan tracking-wider shadow-lg hover:border-quantum-cyan/40 transition-colors"
                title="Schrödinger Equation (Quantum Physics)"
              >
                Ĥ|ψ⟩ = E|ψ⟩
              </div>
              <div 
                className="absolute -bottom-2 -left-6 px-3 py-1.5 rounded-md bg-zinc-950/80 border border-zinc-800 font-mono text-[9px] text-zinc-300 tracking-wider shadow-lg hover:border-quantum-cyan/40 transition-colors"
                title="Geometric Brownian Motion (Quantitative Finance)"
              >
                dS = μS dt + σS dW
              </div>
              <div 
                className="absolute top-2/3 -right-8 px-3 py-1.5 rounded-md bg-zinc-950/80 border border-zinc-800 font-mono text-[9px] text-zinc-400 tracking-wider shadow-lg hover:border-quantum-cyan/40 transition-colors"
                title="Entropy Formulation (Thermodynamics)"
              >
                dS ≥ 0
              </div>

              {/* Micro Particles */}
              <div className="absolute top-6 left-12 w-2 h-2 rounded-full bg-quantum-cyan/70 blur-[1px] animate-[ping_4s_ease-in-out_infinite]" />
              <div className="absolute bottom-16 right-6 w-1.5 h-1.5 rounded-full bg-white/60 animate-[pulse_2s_ease-in-out_infinite]" />
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <motion.a
            href="#nature"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            <span className="font-mono text-[9px] tracking-[0.25em] text-zinc-500 group-hover:text-quantum-cyan transition-colors uppercase">
              SCROLL DOWN
            </span>
            <ArrowDown size={14} className="text-zinc-500 group-hover:text-quantum-cyan transition-colors" />
          </motion.a>
        </div>

      </div>
    </section>
  );
}
