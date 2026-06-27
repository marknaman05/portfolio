import React, { useState } from "react";
import { Code, Cpu, FolderOpen } from "@phosphor-icons/react";

interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  bullets: string[];
  color: string;
  mockupType: "agent" | "matrix" | "metadata";
}

const projects: Project[] = [
  {
    id: "private-markets-agent",
    title: "PRIVATE MARKETS AI AGENT",
    category: "AI & ORCHESTRATION",
    tags: ["Google ADK", "LangGraph", "Python", "React"],
    description: "An autonomous AI Agent system with access controls, validation layers, and monitored execution workflows. Adopted by 1000+ internal users at BlackRock.",
    bullets: [
      "Built production-grade agent orchestration framework with tool routing",
      "Human-in-the-loop validation checkpoints and persistent sessions",
      "Robust gRPC interfaces for financial calculations"
    ],
    color: "bg-retro-blue",
    mockupType: "agent",
  },
  {
    id: "aladdin-explore",
    title: "ALADDIN EXPLORE GRID",
    category: "FINANCIAL INFRASTRUCTURE",
    tags: ["Angular", "Spring Boot", "MSSQL", "Sybase"],
    description: "Dynamic frontend components and toolbars applying Waterfall allocation logic and dynamic grid correlation analytics for Aladdin clients.",
    bullets: [
      "Dynamic matrix correlation and contribution data grid views",
      "Remediated 400+ DAO classes during massive Sybase-to-MSSQL database migration",
      "Engineered automated script-driven verification suites"
    ],
    color: "bg-[#059669]", // Emerald
    mockupType: "matrix",
  },
];

export const PortfolioCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(projects[0].id);
  const activeProject = projects.find((p) => p.id === activeTab) || projects[0];

  return (
    <section id="portfolio" className="py-20 px-4 md:px-8 max-w-6xl mx-auto relative">
      {/* Decorative Glasses Sticker (Top-Left of Section) */}
      <div className="absolute top-8 left-16 hidden lg:block rotate-[-12deg] z-20 pointer-events-none select-none">
        <svg width="90" height="30" viewBox="0 0 90 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Left Lens Frame */}
          <rect x="2" y="2" width="32" height="26" rx="13" stroke="#121212" strokeWidth="3" fill="#ffffff" />
          <rect x="7" y="7" width="22" height="16" rx="8" fill="#121212" opacity="0.1" />
          <line x1="8" y1="8" x2="20" y2="20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          {/* Right Lens Frame */}
          <rect x="56" y="2" width="32" height="26" rx="13" stroke="#121212" strokeWidth="3" fill="#ffffff" />
          <rect x="61" y="7" width="22" height="16" rx="8" fill="#121212" opacity="0.1" />
          <line x1="62" y1="8" x2="74" y2="20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          {/* Bridge */}
          <path d="M34 12 C 40 8, 50 8, 56 12" stroke="#121212" strokeWidth="3" fill="none" />
          {/* Left Temples */}
          <path d="M2 15 C -2 15, -4 10, -5 5" stroke="#121212" strokeWidth="2.5" fill="none" />
          {/* Right Temples */}
          <path d="M88 15 C 92 15, 94 10, 95 5" stroke="#121212" strokeWidth="2.5" fill="none" />
        </svg>
      </div>

      <div className="text-center mb-12">
        <span className="font-mono text-xs uppercase tracking-[0.2em] bg-retro-pink/10 text-retro-pink px-3 py-1 rounded-full border border-retro-pink/20">
          My Works
        </span>
        <h2 className="font-display text-4xl md:text-5xl mt-3 font-bold">
          Creative Portfolio
        </h2>
      </div>

      {/* Main Folder Container */}
      <div className="w-full max-w-4xl mx-auto">
        {/* Folder Tabs Header */}
        <div className="flex items-end pl-4 md:pl-8">
          {projects.map((project) => {
            const isActive = activeTab === project.id;
            return (
              <button
                key={project.id}
                onClick={() => setActiveTab(project.id)}
                className={`relative px-6 py-3 border-t-2.5 border-x-2.5 border-retro-border font-mono text-xs md:text-sm font-bold rounded-t-xl transition-all duration-150 cursor-pointer -mr-1 z-10 ${
                  isActive
                    ? "bg-white text-retro-border pb-4 -translate-y-px z-20"
                    : "bg-retro-bg text-retro-gray border-b-2.5 hover:bg-white/50"
                }`}
              >
                <span className="flex items-center gap-2">
                  <FolderOpen size={16} weight={isActive ? "fill" : "regular"} />
                  {project.id === "private-markets-agent" ? "AI_AGENT.config" : "ALADDIN_GRID.sys"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Folder Body */}
        <div className="retro-card bg-white w-full rounded-2xl md:rounded-3xl overflow-hidden z-10 relative">
          {/* Running Tape Marquee */}
          <div className="bg-retro-border text-white py-2 overflow-hidden flex whitespace-nowrap text-xs font-mono font-semibold select-none border-b-[2px] border-retro-border">
            <div className="animate-pulse-slow flex gap-8 px-4 w-full justify-around shrink-0">
              <span>✦ BUILDER OF AI SYSTEM</span>
              <span>✦ AN ANALYST AT BLACKROCK</span>
              <span>✦ MINIMALIST CODER</span>
              <span>✦ PHYSICS & CS THINKER</span>
            </div>
          </div>

          <div className="p-6 md:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Project Details */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <span className="text-xs font-mono font-bold text-retro-pink tracking-wider uppercase">
                  {activeProject.category}
                </span>
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mt-1 text-retro-border">
                  {activeProject.title}
                </h3>
              </div>

              <p className="font-sans text-sm md:text-base text-retro-border/80 leading-relaxed">
                {activeProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border-2 border-retro-border px-3 py-1 text-[11px] font-mono font-bold bg-retro-yellow rounded-md shadow-[2px_2px_0px_0px_#121212]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bullet Points */}
              <ul className="flex flex-col gap-3 font-mono text-xs md:text-sm text-retro-border/80">
                {activeProject.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-retro-blue font-bold mt-0.5">⚡</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Mockup Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className={`w-full max-w-[280px] aspect-[9/16] border-[3px] border-retro-border rounded-[32px] p-3 shadow-[6px_6px_0px_0px_#121212] bg-[#f8fafc] relative overflow-hidden flex flex-col justify-between`}>
                {/* Speaker & Camera Bar */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-retro-border rounded-full z-20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#334155] mr-2" />
                  <div className="w-8 h-1 rounded-full bg-[#334155]" />
                </div>

                {/* Inner Screen Mockup */}
                <div className="w-full h-full rounded-[22px] bg-[#0f172a] border-[1.5px] border-retro-border overflow-hidden p-4 pt-6 flex flex-col justify-between text-slate-100 font-sans">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[8px] font-mono text-slate-400">
                    <span>9:41</span>
                    <div className="flex gap-1 items-center">
                      <span>5G</span>
                      <div className="w-3 h-1.5 border border-slate-400 rounded-sm" />
                    </div>
                  </div>

                  {activeProject.mockupType === "agent" ? (
                    // Agent Chat Interface
                    <div className="flex-1 flex flex-col justify-between mt-3 text-[10px]">
                      <div className="flex items-center gap-1.5 bg-slate-800/80 p-2 rounded-lg border border-white/5">
                        <Cpu size={12} className="text-blue-400" />
                        <span className="font-mono text-slate-300 font-semibold uppercase tracking-wider text-[8px]">ADK_AGENT_v1.0</span>
                      </div>
                      
                      <div className="flex-1 flex flex-col gap-2 justify-end my-3">
                        <div className="bg-slate-800 p-2 rounded-xl rounded-bl-none max-w-[85%] self-start text-[8.5px]">
                          Please calculate the net IRR for private market assets in portfolio X.
                        </div>
                        <div className="bg-blue-600/90 text-white p-2 rounded-xl rounded-br-none max-w-[85%] self-end text-[8.5px]">
                          IRR Calculated: <strong className="text-emerald-300">14.6%</strong> (Confidence: High)
                        </div>
                      </div>

                      <div className="flex items-center gap-1 bg-slate-800/50 border border-white/5 p-1.5 rounded-full">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-1" />
                        <span className="text-slate-400 text-[8px]">Agent listening...</span>
                      </div>
                    </div>
                  ) : (
                    // Matrix / Analytics Interface
                    <div className="flex-1 flex flex-col justify-between mt-3 text-[10px]">
                      <div className="flex items-center gap-1.5 bg-slate-800/80 p-2 rounded-lg border border-white/5">
                        <Code size={12} className="text-emerald-400" />
                        <span className="font-mono text-slate-300 font-semibold uppercase tracking-wider text-[8px]">ALADDIN EXPLORE</span>
                      </div>

                      <div className="flex-1 flex flex-col gap-2 justify-center my-3">
                        <span className="text-[8px] text-slate-400 uppercase tracking-wider">Correlation Matrix</span>
                        <div className="grid grid-cols-3 gap-1 bg-slate-800/40 p-1.5 rounded-lg border border-white/5">
                          <div className="bg-emerald-500/20 text-emerald-400 p-1 text-center rounded text-[8px] font-mono">1.0</div>
                          <div className="bg-slate-700/50 text-slate-300 p-1 text-center rounded text-[8px] font-mono">0.45</div>
                          <div className="bg-slate-700/50 text-slate-300 p-1 text-center rounded text-[8px] font-mono">-0.12</div>
                          <div className="bg-slate-700/50 text-slate-300 p-1 text-center rounded text-[8px] font-mono">0.45</div>
                          <div className="bg-emerald-500/20 text-emerald-400 p-1 text-center rounded text-[8px] font-mono">1.0</div>
                          <div className="bg-slate-700/50 text-slate-300 p-1 text-center rounded text-[8px] font-mono">0.08</div>
                          <div className="bg-slate-700/50 text-slate-300 p-1 text-center rounded text-[8px] font-mono">-0.12</div>
                          <div className="bg-slate-700/50 text-slate-300 p-1 text-center rounded text-[8px] font-mono">0.08</div>
                          <div className="bg-emerald-500/20 text-emerald-400 p-1 text-center rounded text-[8px] font-mono">1.0</div>
                        </div>
                      </div>

                      <div className="bg-emerald-600 text-center text-white py-1 rounded-lg text-[8px] font-semibold uppercase tracking-wider">
                        Apply Waterfall Logic
                      </div>
                    </div>
                  )}

                  {/* Home Indicator */}
                  <div className="w-16 h-1 bg-slate-600 rounded-full mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
