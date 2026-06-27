import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Heart } from "@phosphor-icons/react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  avatarSvg: React.ReactNode;
}

const PixelAvatar1 = () => (
  <svg viewBox="0 0 16 16" className="w-24 h-24 fill-retro-border" style={{ imageRendering: "pixelated" }}>
    {/* Skin */}
    <rect x="3" y="3" width="10" height="10" fill="#fbcfe8" />
    {/* Hair (blonde) */}
    <path d="M3 3h10v3H3V3z" fill="#facc15" />
    <rect x="2" y="4" width="2" height="6" fill="#facc15" />
    {/* Eyes */}
    <rect x="5" y="7" width="2" height="1" fill="#121212" />
    <rect x="9" y="7" width="2" height="1" fill="#121212" />
    {/* Shirt */}
    <rect x="2" y="12" width="12" height="4" fill="#a855f7" />
    {/* Border */}
    <path d="M3 2h10v1H3V2z" />
    <path d="M2 3h1v10H2V3zm12 0h1v10h-1V3z" />
  </svg>
);

const PixelAvatar2 = () => (
  <svg viewBox="0 0 16 16" className="w-24 h-24 fill-retro-border" style={{ imageRendering: "pixelated" }}>
    {/* Skin */}
    <rect x="3" y="3" width="10" height="10" fill="#fde047" />
    {/* Hair (black/brown) */}
    <path d="M3 3h10v4H3V3z" fill="#78350f" />
    <rect x="12" y="4" width="2" height="6" fill="#78350f" />
    {/* Eyes */}
    <rect x="5" y="8" width="1" height="1" fill="#121212" />
    <rect x="9" y="8" width="1" height="1" fill="#121212" />
    {/* Shirt */}
    <rect x="2" y="12" width="12" height="4" fill="#2563eb" />
    {/* Border */}
    <path d="M3 2h10v1H3V2z" />
    <path d="M2 3h1v10H2V3zm12 0h1v10h-1V3z" />
  </svg>
);

const PixelAvatar3 = () => (
  <svg viewBox="0 0 16 16" className="w-24 h-24 fill-retro-border" style={{ imageRendering: "pixelated" }}>
    {/* Skin */}
    <rect x="3" y="3" width="10" height="10" fill="#fed7aa" />
    {/* Hair (green) */}
    <path d="M3 3h10v3H3V3z" fill="#059669" />
    <rect x="3" y="5" width="10" height="2" fill="#059669" />
    {/* Eyes */}
    <rect x="5" y="7" width="2" height="1" fill="#121212" />
    <rect x="9" y="7" width="2" height="1" fill="#121212" />
    {/* Shirt */}
    <rect x="2" y="12" width="12" height="4" fill="#ef4444" />
    {/* Border */}
    <path d="M3 2h10v1H3V2z" />
    <path d="M2 3h1v10H2V3zm12 0h1v10h-1V3z" />
  </svg>
);

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Siddharth Sharma",
    role: "Senior Engineering Manager",
    company: "BlackRock",
    rating: 5,
    text: "NAMAN HAS AN AMAZING ABILITY TO TRACE SYSTEM ANOMALIES AND SHAPE THEM INTO ROBUST CODE. HIS AI AGENT WORKFLOW HAS BECOME INDISPENSABLE FOR OUR TEAMS.",
    avatarSvg: <PixelAvatar1 />,
  },
  {
    id: 2,
    name: "Vikram Sen",
    role: "Lead Software Architect",
    company: "Disney+ Hotstar",
    rating: 4,
    text: "HE DELIVERED HIGH-PERFORMANCE WORKSTATIONS FOR OUR METADATA REVIEW SYSTEM. HIS WORKPLACE DISCIPLINE AND CORE WEB VITALS SHAPING WENT FAR BEYOND EXPECTATIONS.",
    avatarSvg: <PixelAvatar2 />,
  },
  {
    id: 3,
    name: "Aditya Nair",
    role: "Co-Founder",
    company: "Mazo Solutions",
    rating: 5,
    text: "NAMAN BUILT OUR AUTOMATED BOT INTERVIEW FLOW WITH WEBRTC IN A MATTER OF WEEKS. HR WORKLOAD DROPPED BY HALF. HE IS EXTREMELY RESOURCEFUL.",
    avatarSvg: <PixelAvatar3 />,
  },
];

export const FeedbackCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section id="feedback" className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="font-mono text-xs uppercase tracking-[0.2em] bg-retro-blue/10 text-retro-blue px-3 py-1 rounded-full border border-retro-blue/20">
          Endorsements
        </span>
        <h2 className="font-display text-4xl md:text-5xl mt-3 font-bold">
          People Feedback
        </h2>
      </div>

      {/* Main Review Card */}
      <div className="retro-card bg-white rounded-3xl p-6 md:p-10 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
        {/* Left Side: Pixel Art Avatar */}
        <div className="shrink-0 border-[3px] border-retro-border rounded-2xl overflow-hidden p-1 bg-[#fafafa]">
          {testimonial.avatarSvg}
        </div>

        {/* Right Side: Rating & Quote */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Blue Hearts Rating */}
          <div className="flex gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                size={18}
                weight="fill"
                className={i < testimonial.rating ? "text-retro-blue" : "text-gray-300"}
              />
            ))}
          </div>

          <blockquote className="font-mono text-sm md:text-base lg:text-lg font-bold text-retro-border leading-relaxed">
            "{testimonial.text}"
          </blockquote>

          <div className="mt-2 border-t-[1.5px] border-retro-border/10 pt-3">
            <h4 className="font-display text-lg font-bold text-retro-border">
              {testimonial.name}
            </h4>
            <p className="font-mono text-xs text-retro-gray uppercase mt-0.5">
              {testimonial.role} &mdash; {testimonial.company}
            </p>
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="absolute bottom-6 left-6 md:left-auto md:right-10 flex gap-3">
          <button
            onClick={handlePrev}
            className="w-10 h-10 border-2 border-retro-border rounded-full flex items-center justify-center bg-white hover:bg-retro-bg active:translate-y-px transition-all cursor-pointer shadow-[2px_2px_0px_0px_#121212]"
          >
            <ArrowLeft size={16} weight="bold" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 border-2 border-retro-border rounded-full flex items-center justify-center bg-white hover:bg-retro-bg active:translate-y-px transition-all cursor-pointer shadow-[2px_2px_0px_0px_#121212]"
          >
            <ArrowRight size={16} weight="bold" />
          </button>
        </div>
      </div>
    </section>
  );
};
