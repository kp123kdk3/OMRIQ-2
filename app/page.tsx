import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DemoSection from "@/components/DemoSection";
import WhatWeDo from "@/components/WhatWeDo";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ProductMockups from "@/components/ProductMockups";
import MarketSection from "@/components/MarketSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import InvestorMeeting from "@/components/InvestorMeeting";
import TeamSection from "@/components/TeamSection";
import RoadmapSection from "@/components/RoadmapSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <ProblemSection />
      <SolutionSection />
      <ProductMockups />
      <DemoSection />
      <MarketSection />
      <AdvantagesSection />
      <TeamSection />
      <RoadmapSection />
      <InvestorMeeting />
      <FinalCTA />
      <Footer />
    </main>
  );
}

