import { useState } from "react";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import confetti from "canvas-confetti";
import { FloatingNavbar } from "./ui/FloatingNavbar";
import { ConnectModal } from "./ConnectModal";

export function Navbar() {
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#2563eb", "#ffffff", "#ff6b8b"],
    });
  };

  const navItems = [
    { name: "Portfolio", link: "#portfolio" },
    { name: "Workflow", link: "#workflow" },
    { name: "Feedback", link: "#feedback" },
  ];

  return (
    <>
      <FloatingNavbar navItems={navItems}>
        <button
          onClick={() => {
            setIsConnectOpen(true);
            triggerConfetti();
          }}
          className="relative inline-flex items-center gap-2 px-4 py-2 border-2 border-retro-border rounded-xl bg-retro-blue text-white text-xs font-mono font-bold tracking-wider hover:bg-blue-600 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#121212] transition-all cursor-pointer shadow-[3px_3px_0px_0px_#121212]"
        >
          <PaperPlaneTilt size={13} weight="bold" />
          CONNECT
        </button>
      </FloatingNavbar>

      <ConnectModal isOpen={isConnectOpen} onClose={() => setIsConnectOpen(false)} />
    </>
  );
}
