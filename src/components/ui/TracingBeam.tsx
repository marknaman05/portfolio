import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import type { ReactNode } from "react";

interface TracingBeamProps {
  children: ReactNode;
  className?: string;
}

export function TracingBeam({ children, className = "" }: TracingBeamProps) {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const svgHeight = useRef(0);

  useEffect(() => {
    if (contentRef.current) {
      svgHeight.current = contentRef.current.offsetHeight;
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight.current || 800]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight.current || 800]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <motion.div ref={ref} className={`relative w-full max-w-4xl mx-auto ${className}`}>
      <div className="absolute left-4 md:left-8 top-3">
        <svg
          viewBox={`0 0 20 ${svgHeight.current || 800}`}
          width="20"
          height={svgHeight.current || 800}
          className="block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight.current || 800} l -18 24V ${svgHeight.current || 800}`}
            fill="none"
            stroke="#27272a"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            transition={{
              duration: 10,
            }}
          />
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight.current || 800} l -18 24V ${svgHeight.current || 800}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.5"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          />
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#00e5ff" stopOpacity="0" />
              <stop stopColor="#00e5ff" />
              <stop offset="0.325" stopColor="#00b0ff" />
              <stop offset="1" stopColor="#00e5ff" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>

        {/* Animated dot at the tracing head */}
        <motion.div
          style={{
            top: y1,
          }}
          className="absolute left-[1px] w-3 h-3 rounded-full border border-quantum-cyan/40 bg-zinc-950 shadow-[0_0_8px_rgba(0,229,255,0.4)]"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-quantum-cyan m-auto mt-[3px]" />
        </motion.div>
      </div>

      <div ref={contentRef} className="pl-14 md:pl-20">
        {children}
      </div>
    </motion.div>
  );
}
