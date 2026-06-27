import { ArrowDown, EnvelopeSimple, LinkedinLogo, MapPin } from "@phosphor-icons/react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { contact } from "../data/resume";
import { VelocityScroll } from "./ui/VelocityScroll";

export function ResumeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const cardScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.88]);
  const cardY = useTransform(scrollYProgress, [0, 0.6], [0, -40]);
  const cardOpacity = useTransform(scrollYProgress, [0.4, 0.85], [1, 0.15]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["24px", "16px"]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center px-4 md:px-8 pt-24 pb-16 overflow-hidden"
    >
      <VelocityScroll
        text="SOFTWARE ENGINEER // AI AGENT ORCHESTRATION // PRIVATE MARKETS // LANGGRAPH"
        className="absolute top-28 left-0 right-0 z-0"
      />

      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_50%,transparent_100%)] opacity-30 pointer-events-none" />

      <motion.div
        style={{
          scale: cardScale,
          y: cardY,
          opacity: cardOpacity,
          borderRadius,
        }}
        className="relative z-10 w-full max-w-4xl"
      >
        <div className="relative rounded-3xl border border-white/[0.1] bg-slate-900/70 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

          <div className="p-8 md:p-14 lg:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-blue-400/80 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5">
                  Resume
                </span>
                <span className="font-mono text-[10px] tracking-wider text-slate-500 flex items-center gap-1.5">
                  <MapPin size={12} />
                  {contact.location}
                </span>
              </div>

              <div>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-3">
                  {contact.name}
                </h1>
                <p className="font-sans text-lg md:text-xl text-slate-400 font-medium">
                  {contact.title}
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-slate-700 via-slate-600 to-transparent" />

              <div className="flex flex-wrap gap-4 md:gap-6">
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 font-sans text-sm text-slate-300 hover:text-blue-400 transition-colors group"
                >
                  <EnvelopeSimple
                    size={16}
                    className="text-slate-500 group-hover:text-blue-400 transition-colors"
                  />
                  {contact.email}
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm text-slate-300 hover:text-blue-400 transition-colors group"
                >
                  <LinkedinLogo
                    size={16}
                    className="text-slate-500 group-hover:text-blue-400 transition-colors"
                  />
                  linkedin.com/in/namanmarkhedkar
                </a>
              </div>

              <p className="font-sans text-sm md:text-base text-slate-400 max-w-2xl leading-relaxed pt-2">
                Software engineer building production AI agent systems, financial
                infrastructure, and high-scale web platforms at BlackRock and beyond.
              </p>
            </motion.div>
          </div>

          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none" />
        </div>
      </motion.div>

      <motion.a
        href="#experience"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group z-20"
      >
        <span className="font-mono text-[9px] tracking-[0.3em] text-slate-500 group-hover:text-blue-400 transition-colors uppercase">
          Scroll to Explore
        </span>
        <ArrowDown
          size={14}
          className="text-slate-500 group-hover:text-blue-400 transition-colors"
        />
      </motion.a>
    </section>
  );
}
