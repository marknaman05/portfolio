import { motion, useAnimationFrame, useMotionValue, useTransform } from "motion/react";

interface VelocityScrollProps {
  text: string;
  defaultVelocity?: number;
  className?: string;
}

export function VelocityScroll({
  text,
  defaultVelocity = 2,
  className = "",
}: VelocityScrollProps) {
  const baseX = useMotionValue(0);

  const x = useTransform(baseX, (v) => `${v % 50}%`);

  useAnimationFrame((_, delta) => {
    const moveBy = defaultVelocity * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  const repeated = Array(4).fill(text).join("  //  ");

  return (
    <div
      className={`overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}
      aria-hidden="true"
    >
      <motion.div style={{ x }} className="inline-flex">
        <span className="font-mono text-[11px] md:text-xs tracking-[0.35em] uppercase text-white/[0.06]">
          {repeated}
        </span>
        <span className="font-mono text-[11px] md:text-xs tracking-[0.35em] uppercase text-white/[0.06]">
          {repeated}
        </span>
      </motion.div>
    </div>
  );
}
