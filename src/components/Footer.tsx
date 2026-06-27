import { GithubLogo, LinkedinLogo, YoutubeLogo, Article, EnvelopeSimple } from "@phosphor-icons/react";
import { BackgroundBeams } from "./ui/BackgroundBeams";

export function Footer() {
  const socials = [
    {
      name: "LinkedIn",
      icon: LinkedinLogo,
      href: "https://www.linkedin.com/in/namanmarkhedkar/",
    },
    {
      name: "GitHub",
      icon: GithubLogo,
      href: "https://github.com/marknaman05",
    },
    {
      name: "YouTube",
      icon: YoutubeLogo,
      href: "https://youtube.com/@namanmarkhedkar",
    },
    {
      name: "Medium",
      icon: Article,
      href: "https://medium.com/@marknaman05",
    },
    {
      name: "Email",
      icon: EnvelopeSimple,
      href: "mailto:marknaman05@gmail.com",
    },
  ];

  return (
    <footer className="relative z-10 border-t border-slate-700/60 overflow-hidden">
      <BackgroundBeams className="py-20">
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10">
          
          {/* CTA Section */}
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
              Let's build something together.
            </h3>
            <p className="font-sans text-sm text-slate-400 max-w-md mx-auto">
              Open to conversations about AI systems, financial infrastructure, and engineering at scale.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-10">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-900/60 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:shadow-[0_0_12px_rgba(96,165,250,0.15)] transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon size={18} weight="regular" />
                </a>
              );
            })}
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-700/40">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-sm tracking-widest text-white">
                NAMAN AJAY MARKHEDKAR
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-blue-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-700">
                v3.0.0
              </span>
            </div>
            <p className="font-sans text-[11px] text-slate-500">
              © {new Date().getFullYear()} Naman Ajay Markhedkar. All rights reserved.
            </p>
          </div>

        </div>
      </BackgroundBeams>
    </footer>
  );
}
