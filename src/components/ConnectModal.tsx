import { useState, useEffect } from "react";
import { X, Copy, Check, EnvelopeSimple, LinkedinLogo, GithubLogo, YoutubeLogo, Article, PaperPlaneTilt } from "@phosphor-icons/react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConnectModal({ isOpen, onClose }: ConnectModalProps) {
  const [copied, setCopied] = useState(false);
  const emailAddress = "marknaman05@gmail.com";

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      
      // Trigger a confetti burst on success!
      confetti({
        particleCount: 60,
        spread: 50,
        origin: { y: 0.6 },
        colors: ["#2563eb", "#ff6b8b", "#fdf082", "#ffffff"],
      });

      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-[#121212]/50 backdrop-blur-sm"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="w-full max-w-md bg-white border-[3px] border-retro-border rounded-3xl p-8 relative overflow-hidden shadow-[8px_8px_0px_0px_#121212] z-10 text-left text-retro-border"
      >
        {/* Decorative Tape Style Accent */}
        <div className="absolute top-0 inset-x-0 h-4 bg-retro-blue border-b-2.5 border-retro-border" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-6 w-8 h-8 border-2 border-retro-border rounded-full flex items-center justify-center bg-white hover:bg-retro-bg active:translate-y-px transition-all cursor-pointer shadow-[2px_2px_0px_0px_#121212]"
          aria-label="Close modal"
        >
          <X size={14} weight="bold" />
        </button>

        {/* Title & Info */}
        <div className="mb-6 mt-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-retro-yellow border-2 border-retro-border shadow-[2px_2px_0px_0px_#121212] mb-5">
            <span className="w-2 h-2 rounded-full bg-retro-blue" />
            <span className="font-mono text-[9px] font-bold tracking-[0.1em] text-retro-border uppercase">
              ESTABLISH_CONNECTION
            </span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-retro-border mb-2">
            Say Hello!
          </h2>
          <p className="font-sans text-xs text-retro-gray font-medium leading-relaxed">
            Let's discuss quantitative modeling, distributed software infrastructure, AI agent orchestration, or physics. Choose your channel below:
          </p>
        </div>

        {/* Action Items */}
        <div className="flex flex-col gap-4">
          
          {/* Email Copy Card */}
          <div className="p-4 rounded-xl bg-white border-2 border-retro-border flex items-center justify-between transition-all hover:bg-retro-bg/30">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-retro-blue/10 border-2 border-retro-border flex items-center justify-center text-retro-blue">
                <EnvelopeSimple size={18} weight="bold" />
              </div>
              <div className="text-left">
                <p className="font-mono text-[9px] text-retro-gray font-bold uppercase tracking-wider">EMAIL ID</p>
                <p className="font-mono text-xs text-retro-border font-bold mt-0.5 select-all">{emailAddress}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`mailto:${emailAddress}`}
                className="w-8 h-8 border-2 border-retro-border rounded-lg bg-white hover:bg-retro-bg flex items-center justify-center text-retro-border transition-colors cursor-pointer"
                title="Send direct email"
              >
                <PaperPlaneTilt size={14} weight="bold" />
              </a>
              <button
                onClick={handleCopyEmail}
                className="w-8 h-8 border-2 border-retro-border rounded-lg bg-white hover:bg-retro-bg flex items-center justify-center text-retro-border transition-colors cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? <Check size={14} className="text-retro-blue" weight="bold" /> : <Copy size={14} weight="bold" />}
              </button>
            </div>
          </div>

          {/* Social Links List */}
          <div className="grid grid-cols-4 gap-2">
            
            {/* Medium Card */}
            <a
              href="https://medium.com/@marknaman05"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center p-2 rounded-xl border-2 border-retro-border bg-white hover:bg-[#fbcfe8]/20 transition-all text-center group cursor-pointer"
            >
              <Article size={20} className="text-retro-border mb-1" />
              <span className="font-mono text-[8px] font-bold text-retro-border uppercase tracking-wide">Medium</span>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/namanmarkhedkar/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center p-2 rounded-xl border-2 border-retro-border bg-white hover:bg-[#bfdbfe]/20 transition-all text-center group cursor-pointer"
            >
              <LinkedinLogo size={20} className="text-retro-border mb-1" />
              <span className="font-mono text-[8px] font-bold text-retro-border uppercase tracking-wide">LinkedIn</span>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/marknaman05"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center p-2 rounded-xl border-2 border-retro-border bg-white hover:bg-[#bbf7d0]/20 transition-all text-center group cursor-pointer"
            >
              <GithubLogo size={20} className="text-retro-border mb-1" />
              <span className="font-mono text-[8px] font-bold text-retro-border uppercase tracking-wide">GitHub</span>
            </a>

            {/* YouTube Card */}
            <a
              href="https://youtube.com/@namanmarkhedkar"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center p-2 rounded-xl border-2 border-retro-border bg-white hover:bg-[#fee2e2]/30 transition-all text-center group cursor-pointer"
            >
              <YoutubeLogo size={20} className="text-retro-border mb-1" />
              <span className="font-mono text-[8px] font-bold text-retro-border uppercase tracking-wide">YouTube</span>
            </a>

          </div>

        </div>

        {/* Copied Success Message Toast Overlay */}
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-retro-blue text-white border-2 border-retro-border font-mono text-[9px] font-bold tracking-widest px-4 py-1.5 rounded-full uppercase shadow-[2px_2px_0px_0px_#121212]"
          >
            Copied to Clipboard!
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
