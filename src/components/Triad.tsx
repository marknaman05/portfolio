import { Atom, Code, Waves } from "@phosphor-icons/react";
import { HoverEffect } from "./ui/HoverEffect";

export function Triad() {
  const pillars = [
    {
      title: "Particle (Physics)",
      icon: <Atom size={24} weight="regular" />,
      description:
        "Trained in theoretical physics at BITS Pilani. Applying mathematical modeling, statistical mechanics, and stochastic calculus to solve complex financial and computing problems.",
      details: "Statistical Mechanics • Quantum Logic • Numerical Analysis",
    },
    {
      title: "Pixel (Software)",
      icon: <Code size={24} weight="regular" />,
      description:
        "Software Engineer at BlackRock building resilient fintech systems and high-throughput investment pipelines. Specialized in optimizing processing performance and low-latency rendering.",
      details: "Distributed Systems • React / TS • Performance Tuning",
    },
    {
      title: "Wave (Media)",
      icon: <Waves size={24} weight="regular" />,
      description:
        "Creator and host of the 'Know these Firsties' podcast and tech vlogger. Synthesizing audio and visual stories to bridge theoretical research with creative engineering communities.",
      details: "Audio Synthesis • Video Production • Communication",
    },
  ];

  return (
    <section id="nature" className="py-24 border-t border-zinc-800/60 relative overflow-hidden">
      {/* Subtle Background Mesh */}
      <div className="absolute inset-0 bg-radial-gradient(circle_at_bottom_left,rgba(0,229,255,0.02)_0%,transparent_50%) pointer-events-none" />

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            The Dual Nature
          </h2>
          <p className="font-sans text-sm leading-relaxed text-zinc-400 max-w-[50ch]">
            Viewing software engineering not just as code execution, but as an interplay between analytical physics and creative storytelling.
          </p>
        </div>

        {/* Aceternity HoverEffect Cards */}
        <HoverEffect items={pillars} className="lg:grid-cols-3" />
      </div>
    </section>
  );
}
