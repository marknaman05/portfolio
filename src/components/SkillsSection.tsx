import { Trophy, Code, Brain, GraduationCap, Database } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { achievements, education, skillCategories } from "../data/resume";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

function SkillChips({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {skills.map((skill, idx) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: idx * 0.03 }}
          className="font-mono text-[11px] px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-700/60 text-slate-300 hover:border-emerald-500/30 hover:text-emerald-300 transition-colors cursor-default"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  );
}

const categoryIcons = [Code, Database, Database, Brain];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_30%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-emerald-400/70 mb-3 block">
            Technical Arsenal
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Skills &amp; Achievements
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-400 max-w-xl">
            Languages, frameworks, and systems — plus the milestones that shaped how I
            build.
          </p>
        </motion.div>

        <BentoGrid className="md:grid-cols-12 auto-rows-auto gap-4">
          {achievements.map((achievement, idx) => (
            <BentoGridItem
              key={achievement.title}
              className={`${idx === 0 ? "md:col-span-7" : "md:col-span-5"} min-h-[200px]`}
              icon={
                <Trophy
                  size={20}
                  className={achievement.highlight ? "text-amber-400" : "text-emerald-400"}
                  weight={achievement.highlight ? "fill" : "regular"}
                />
              }
              title={achievement.title}
              description={achievement.description}
            >
              {achievement.highlight && (
                <div className="mt-4 font-mono text-[10px] tracking-widest text-amber-400/60 uppercase">
                  APAC Hackathon 2026
                </div>
              )}
            </BentoGridItem>
          ))}

          {skillCategories.map((category, idx) => {
            const Icon = categoryIcons[idx] ?? Code;
            const colSpan =
              idx === 0 ? "md:col-span-6" : idx === 1 ? "md:col-span-6" : idx === 2 ? "md:col-span-5" : "md:col-span-7";

            return (
              <BentoGridItem
                key={category.title}
                className={`${colSpan} min-h-[220px]`}
                icon={<Icon size={20} className="text-emerald-400" />}
                title={category.title}
              >
                <SkillChips skills={category.skills} />
              </BentoGridItem>
            );
          })}

          <BentoGridItem
            className="md:col-span-12 min-h-[180px]"
            icon={<GraduationCap size={20} className="text-slate-300" />}
            title={education.degree}
            description={`${education.institution} · ${education.period}`}
          >
            <p className="font-sans text-xs text-slate-500 mt-3 max-w-lg">
              Five-year integrated dual degree combining computational methods with
              theoretical physics — a foundation for building rigorous systems.
            </p>
          </BentoGridItem>
        </BentoGrid>
      </div>
    </section>
  );
}
