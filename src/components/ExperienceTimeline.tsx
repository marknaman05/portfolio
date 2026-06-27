import { motion } from "motion/react";
import { experiences } from "../data/resume";
import { Timeline, type TimelineEntry } from "./ui/Timeline";

function BulletList({ bullets, delay = 0 }: { bullets: string[]; delay?: number }) {
  return (
    <ul className="flex flex-col gap-3">
      {bullets.map((bullet, idx) => (
        <motion.li
          key={idx}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: delay + idx * 0.08 }}
          className="font-sans text-sm text-slate-400 leading-relaxed flex items-start gap-3"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 shrink-0" />
          {bullet}
        </motion.li>
      ))}
    </ul>
  );
}

export function ExperienceTimeline() {
  const timelineData: TimelineEntry[] = experiences.map((exp) => ({
    id: exp.id,
    title: exp.role,
    subtitle: exp.company,
    period: exp.period,
    location: exp.location,
    theme: exp.theme,
    content: <BulletList bullets={exp.bullets} />,
  }));

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20"
        >
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-blue-400/70 mb-3 block">
            Experience
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Where I&apos;ve built
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-400 max-w-xl">
            From AI agent orchestration at BlackRock to streaming platforms at
            Disney+ Hotstar — a scroll through production systems shipped at scale.
          </p>
        </motion.div>

        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
