import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { ReactNode } from "react";

export interface TimelineEntry {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  location: string;
  theme: "corporate" | "streaming" | "startup";
  content: ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
}

const themeStyles = {
  corporate: {
    badge: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    glow: "from-blue-500/10",
    dot: "bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.5)]",
  },
  streaming: {
    badge: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
    glow: "from-indigo-500/10",
    dot: "bg-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.5)]",
  },
  startup: {
    badge: "text-violet-400 border-violet-500/30 bg-violet-500/10",
    glow: "from-violet-500/10",
    dot: "bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.5)]",
  },
};

export function Timeline({ data }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-full">
      {data.map((item, index) => {
        const styles = themeStyles[item.theme];
        return (
          <div key={item.id} className="flex justify-start pt-10 md:pt-16 md:gap-10">
            <div className="sticky top-32 z-40 flex flex-col md:flex-row items-center self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className={`h-10 w-10 absolute left-3 md:left-3 rounded-full flex items-center justify-center ${styles.dot}`}
              >
                <div className="h-3 w-3 rounded-full bg-white/90" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-2xl font-display font-bold text-slate-200">
                {item.subtitle}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-xl mb-3 font-display font-bold text-slate-200">
                {item.subtitle}
              </h3>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative rounded-2xl border border-white/[0.08] bg-slate-900/50 backdrop-blur-sm p-6 md:p-8 overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${styles.glow} via-transparent to-transparent pointer-events-none`}
                />

                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className={`font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border ${styles.badge}`}
                    >
                      {item.period}
                    </span>
                    <span className="font-mono text-[10px] text-slate-500 tracking-wide">
                      {item.location}
                    </span>
                  </div>

                  <h4 className="font-display text-lg md:text-xl font-bold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="font-sans text-sm text-slate-400 mb-5 hidden md:block">
                    {item.subtitle}
                  </p>

                  {item.content}
                </div>
              </motion.div>
            </div>
          </div>
        );
      })}

      <div className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] h-full bg-gradient-to-b from-transparent via-slate-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
        <motion.div
          style={{
            height: heightTransform,
            opacity: opacityTransform,
          }}
          className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-blue-500 via-indigo-500 to-violet-500"
        />
      </div>
    </div>
  );
}
