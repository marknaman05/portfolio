export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  theme: "corporate" | "streaming" | "startup";
  bullets: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const contact = {
  name: "Naman Ajay Markhedkar",
  title: "Software Engineer - 1",
  email: "marknaman05@gmail.com",
  linkedin: "https://linkedin.com/in/namanmarkhedkar",
  phone: "(+91) 7289990540",
  location: "Gurugram, Haryana",
};

export const experiences: ExperienceEntry[] = [
  {
    id: "blackrock-analyst",
    role: "Software Developer - Analyst",
    company: "BlackRock",
    period: "July 2025 — Present",
    location: "Gurugram, Haryana",
    theme: "corporate",
    bullets: [
      "Created and deployed a Private Markets AI Agent using Google ADK with access controls, validation layers, and monitored execution workflows — adopted by 1000+ internal users.",
      "Built a production-grade agent orchestration framework supporting tool routing, callbacks, session persistence, and human-in-the-loop workflows.",
      "Designed protobuf definitions for RPC-based Internal Rate of Return Calculator APIs capable of handling large payloads.",
      "Implemented Liquidity Score Settings module with Spring Boot REST services and AngularJS dynamic UI components.",
    ],
  },
  {
    id: "blackrock-intern",
    role: "Software Engineering Intern",
    company: "BlackRock",
    period: "Jan 2025 — June 2025",
    location: "Gurugram, Haryana",
    theme: "corporate",
    bullets: [
      "Created dynamic frontend components and toolbars for Aladdin Explore client applying Waterfall logic.",
      "Integrated dynamic Angular grid components for Matrix Correlation and Matrix Contribution analytics.",
      "Contributed to Sybase-to-MSSQL migration, remediating nearly 400 DAO classes.",
      "Created 242 AI-driven integration tests across 10+ repositories to reduce manual resolution.",
    ],
  },
  {
    id: "hotstar",
    role: "Software Developer Intern",
    company: "Disney+ Hotstar",
    period: "June 2024 — Dec 2024",
    location: "Remote",
    theme: "streaming",
    bullets: [
      "Developed a Metadata Review Tool for CMS with dynamic comparison of metadata changes and their impacts.",
      "Designed a tab-based UI with JSON object comparison for detailed change analysis.",
      "Improved web performance via tree shaking, code splitting, and Webpack bundling — enhancing Core Web Vitals.",
      "Built scalable frontend workflows using ReactJS class components, Flux architecture, and CSS preprocessors.",
    ],
  },
  {
    id: "mazo",
    role: "Full Stack Developer",
    company: "Mazo Solutions",
    period: "June 2022 — July 2022",
    location: "Chennai, Tamil Nadu",
    theme: "startup",
    bullets: [
      "Developed a bot-based interview system using WebRTC, MediaRecorder API, Node.js, and Angular.",
      "Automated the interview process, reducing HR workload by 50% and saving up to 20 hours per week.",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Java", "Python", "TypeScript", "SQL", "C++"],
  },
  {
    title: "Frameworks & Backend",
    skills: [
      "Spring Boot",
      "Angular",
      "ReactJS",
      "REST APIs",
      "RPC",
      "gRPC",
      "LangGraph",
      "Google ADK",
    ],
  },
  {
    title: "Databases & Tools",
    skills: ["MSSQL", "Sybase", "Git", "Webpack", "Flux", "Linux"],
  },
  {
    title: "AI / Systems",
    skills: [
      "LLM Agents",
      "RAG",
      "Tool Routing",
      "Human-in-the-Loop",
      "Telemetry",
      "Session Management",
    ],
  },
];

export const achievements = [
  {
    title: "APAC BlackRock Hackathon 2026 Winner",
    description:
      "Developed an AI agentic workflow that streamlined recurring Aladdin client issue resolution.",
    highlight: true,
  },
  {
    title: "Competitive Programming",
    description:
      "Solved 1000+ algorithmic problems across LeetCode and Codeforces.",
    highlight: false,
  },
];

export const education = {
  degree: "B.E. Computer Science + M.Sc. Physics",
  institution: "BITS Pilani, Goa Campus",
  period: "Aug 2025",
};
