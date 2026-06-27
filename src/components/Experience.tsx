import { Briefcase, GraduationCap } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { TracingBeam } from "./ui/TracingBeam";

export function Experience() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "BlackRock",
      period: "2025 - Present",
      type: "work",
      bullets: [
        "Developing high-throughput financial infrastructure, risk-analytics platforms, and portfolio modeling engines.",
        "Optimizing data ingestion pipelines and mathematical calculations for latency reduction and system reliability.",
        "Engineering internal SDK tools that streamline distributed microservice communications across core engineering teams.",
      ],
    },
    {
      role: "Software Engineering Intern",
      company: "Disney+ Hotstar",
      period: "2024 - 2025",
      type: "work",
      bullets: [
        "Engineered reactive web components and modular dashboard architecture for high-traffic internal CMS platforms.",
        "Optimized client-side state management and data density layouts, reducing operator screen load latency by 25%.",
        "Streamlined media metadata workflows by integrating telemetry charts and custom search indices.",
      ],
    },
    {
      role: "B.E. Computer Science + M.Sc. Physics",
      company: "BITS Pilani, Goa Campus",
      period: "2020 - 2025",
      type: "education",
      bullets: [
        "Completed a five-year integrated dual degree program combining Computer Science and Theoretical Physics.",
        "Acquired deep grounding in Computational Physics, Statistical Mechanics, Quantum Mechanics, and Numerical Analysis.",
        "Researched IoT-based grid systems, created student-centric podcasts, and led digital media projects.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 border-t border-zinc-800/60 relative overflow-hidden">
      {/* Background Details */}
      <div className="absolute inset-0 bg-radial-gradient(circle_at_top_right,rgba(0,229,255,0.02)_0%,transparent_50%) pointer-events-none" />

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-2xl text-left mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Professional Timeline
          </h2>
          <p className="font-sans text-sm text-zinc-400">
            A journey bridging core computer science with physical science, taking engineering from research labs to production scale.
          </p>
        </div>

        {/* Aceternity TracingBeam wrapping timeline */}
        <TracingBeam>
          <div className="flex flex-col gap-16">
            {experiences.map((exp, index) => {
              const Icon = exp.type === "work" ? Briefcase : GraduationCap;

              return (
                <motion.div
                  key={`${exp.company}-${exp.role}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Icon badge */}
                  <div className="absolute -left-[52px] md:-left-[72px] top-0 w-9 h-9 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center z-10 group hover:border-quantum-cyan transition-colors">
                    <Icon
                      size={18}
                      className="text-zinc-500 group-hover:text-quantum-cyan transition-colors"
                      weight="regular"
                    />
                  </div>

                  {/* Card content */}
                  <div className="rounded-2xl bg-zinc-900/40 border border-zinc-800/80 p-6 hover:border-zinc-700/80 hover:shadow-[0_0_20px_rgba(0,229,255,0.04)] transition-all duration-300">
                    <span className="font-mono text-xs text-quantum-cyan tracking-wider">
                      {exp.period}
                    </span>
                    <h3 className="font-display text-lg font-bold text-white mt-1">
                      {exp.role}
                    </h3>
                    <h4 className="font-sans text-sm text-zinc-300 font-medium mb-4">
                      {exp.company}
                    </h4>

                    <ul className="flex flex-col gap-2">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="font-sans text-xs text-zinc-400 leading-relaxed flex items-start gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-quantum-cyan/50 mt-1.5 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}
