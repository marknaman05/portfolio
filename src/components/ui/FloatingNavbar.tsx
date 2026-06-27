import { useState, type ReactNode } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";

interface NavItem {
  name: string;
  link: string;
  icon?: ReactNode;
}

interface FloatingNavbarProps {
  navItems: NavItem[];
  className?: string;
  children?: ReactNode;
}

export function FloatingNavbar({ navItems, className = "", children }: FloatingNavbarProps) {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    const direction = current - lastScrollY;

    if (current < 100) {
      setVisible(true);
    } else if (direction < 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }

    setLastScrollY(current);
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ opacity: 1, y: -100 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={`fixed top-6 inset-x-0 mx-auto z-50 flex max-w-fit items-center justify-center gap-1 rounded-2xl border-[2.5px] border-retro-border bg-white px-3 py-2 shadow-[4px_4px_0px_0px_#121212] ${className}`}
      >
        {navItems.map((navItem) => (
          <a
            key={navItem.name}
            href={navItem.link}
            className="relative flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase text-retro-border hover:text-retro-blue transition-colors duration-200"
          >
            {navItem.icon && <span className="text-sm">{navItem.icon}</span>}
            <span>{navItem.name}</span>
          </a>
        ))}
        {children}
      </motion.nav>
    </AnimatePresence>
  );
}
