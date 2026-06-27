import { useEffect, useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from "motion/react";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export function Spotlight({ className = "", fill = "white" }: SpotlightProps) {
  const [isMounted, setIsMounted] = useState(false);
  const spotlightRef = useRef<SVGSVGElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacity = useMotionValue(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Animate the spotlight beam path
    const animateX = animate(x, [0, -200, 200, 0], {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    });

    const animateY = animate(y, [0, -100, 50, 0], {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    });

    const animateOpacity = animate(opacity, [0, 1], {
      duration: 1.5,
      ease: "easeOut",
    });

    return () => {
      animateX.stop();
      animateY.stop();
      animateOpacity.stop();
    };
  }, [isMounted, x, y, opacity]);

  const transform = useMotionTemplate`translate(${x}px, ${y}px)`;

  return (
    <motion.svg
      ref={spotlightRef}
      className={`pointer-events-none absolute z-[1] ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
      style={{ opacity, transform }}
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill}
          fillOpacity="0.21"
        />
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8" />
        </filter>
      </defs>
    </motion.svg>
  );
}
