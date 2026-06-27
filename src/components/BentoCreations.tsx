import { Microphone, GithubLogo, HardDrives, YoutubeLogo, ArrowSquareOut } from "@phosphor-icons/react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

export function BentoCreations() {
  const githubProjects = [
    { name: "cf-whatsapp-bot", desc: "Python WhatsApp bot", lang: "Python" },
    { name: "LinkedIn-Cleaner", desc: "JavaScript automation", lang: "JS" },
    { name: "Short-Url", desc: "URL shortening tool", lang: "JS" },
  ];

  return (
    <section id="creations" className="py-24 border-t border-zinc-800/60 relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-radial-gradient(circle_at_bottom_right,rgba(0,229,255,0.015)_0%,transparent_50%) pointer-events-none" />

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-2xl text-left mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Selected Creations
          </h2>
          <p className="font-sans text-sm text-zinc-400">
            A gallery of side projects, creative experiments, and media productions built outside of office hours.
          </p>
        </div>

        {/* Aceternity BentoGrid */}
        <BentoGrid className="md:grid-cols-12 auto-rows-[240px]">
          
          {/* Card 1: Podcast — spans 8 cols */}
          <BentoGridItem
            className="md:col-span-8"
            icon={<Microphone size={20} className="text-quantum-cyan" />}
            title={`"Know these Firsties" Podcast`}
            description="Created and hosted an interview series featuring students in the BITS Pilani community, exploring academic journeys and campus cultures."
          >
            {/* Animated Wave Indicator */}
            <div className="absolute right-8 top-8 flex items-end gap-1.5 h-16 pointer-events-none opacity-30">
              {[0.4, 0.8, 0.5, 0.9, 0.3, 0.7, 0.5, 0.8, 0.4].map((h, i) => (
                <span
                  key={i}
                  className="w-1 bg-quantum-cyan rounded-full animate-wave"
                  style={{
                    height: `${h * 100}%`,
                    animationDelay: `${i * 0.15}s`,
                    animationDuration: "1.8s",
                  }}
                />
              ))}
            </div>
            <div className="flex items-center gap-2 mt-4 text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
              <span>PODCAST HOST</span>
              <span>•</span>
              <span>10+ EPISODES</span>
            </div>
          </BentoGridItem>

          {/* Card 2: GitHub — spans 4 cols */}
          <BentoGridItem
            className="md:col-span-4"
            icon={
              <div className="flex items-center justify-between w-full">
                <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-300">
                  <GithubLogo size={20} />
                </div>
                <a
                  href="https://github.com/marknaman05"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-500 hover:text-quantum-cyan transition-colors relative z-20"
                >
                  <ArrowSquareOut size={16} />
                </a>
              </div>
            }
            title="GitHub Repositories"
          >
            {/* Stack items */}
            <div className="flex flex-col gap-2 mt-3">
              {githubProjects.map((p) => (
                <div
                  key={p.name}
                  className="p-2.5 rounded-lg bg-zinc-950/60 border border-zinc-800/60 flex items-center justify-between hover:border-quantum-cyan/20 transition-all duration-300 relative z-20"
                >
                  <div className="text-left">
                    <h4 className="font-mono text-xs font-semibold text-zinc-200">{p.name}</h4>
                    <p className="font-sans text-[10px] text-zinc-500">{p.desc}</p>
                  </div>
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                    {p.lang}
                  </span>
                </div>
              ))}
            </div>
            <div className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase mt-3">
              ACTIVE OPEN SOURCE
            </div>
          </BentoGridItem>

          {/* Card 3: Personal Cloud NAS — spans 5 cols */}
          <BentoGridItem
            className="md:col-span-5"
            icon={<HardDrives size={20} className="text-zinc-300" />}
            title="Home NAS / Cloud Server"
            description="Tinkered with old PC hardware to construct a custom Network-Attached Storage system, hosting containerized local servers."
          >
            <div className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase mt-4">
              HARDWARE & LINUX
            </div>
          </BentoGridItem>

          {/* Card 4: YouTube — spans 7 cols */}
          <BentoGridItem
            className="md:col-span-7"
            icon={<YoutubeLogo size={20} weight="fill" className="text-red-500" />}
            title="College Life Vlogs (Goa)"
            description="Shot, edited, and published video blogs documenting undergraduate student life and travels around Goa, exploring digital storytelling methods."
          >
            <div className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase mt-4">
              CREATIVE VIDEO EDITING
            </div>
          </BentoGridItem>

        </BentoGrid>
      </div>
    </section>
  );
}
