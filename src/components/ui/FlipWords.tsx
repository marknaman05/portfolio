import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
}

export function FlipWords({ words, duration = 3000, className = "" }: FlipWordsProps) {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    const currentIndex = words.indexOf(currentWord);
    const nextIndex = (currentIndex + 1) % words.length;
    setCurrentWord(words[nextIndex]);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating) {
      const timeout = setTimeout(startAnimation, duration);
      return () => clearTimeout(timeout);
    }
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.span
        key={currentWord}
        initial={{
          opacity: 0,
          y: 10,
          filter: "blur(8px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        exit={{
          opacity: 0,
          y: -20,
          filter: "blur(8px)",
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        className={`inline-block ${className}`}
      >
        {currentWord}
      </motion.span>
    </AnimatePresence>
  );
}
