import { Navbar } from "./components/Navbar";
import { RetroHero } from "./components/RetroHero";
import { PortfolioCard } from "./components/PortfolioCard";
import { WorkflowSticky } from "./components/WorkflowSticky";
import { FeedbackCarousel } from "./components/FeedbackCarousel";
import { ContactFooter } from "./components/ContactFooter";

function App() {
  return (
    <div className="relative min-h-[100dvh] bg-retro-bg text-retro-border font-sans overflow-x-hidden selection:bg-retro-blue/20 selection:text-retro-blue">
      <Navbar />

      <main className="relative z-10">
        <RetroHero />
        <PortfolioCard />
        <WorkflowSticky />
        <FeedbackCarousel />
        <ContactFooter />
      </main>
    </div>
  );
}

export default App;
