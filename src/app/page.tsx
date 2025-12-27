import PublicHeader from "../components/PublicHeader";
import HeroSection from "../components/HeroSection";
import PhilosophySection from "../components/PhilosophySection";
import FeaturesSection from "../components/FeaturesSection";
import PricingTeaser from "../components/PricingTeaser";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <PublicHeader />
      <HeroSection />
      <PhilosophySection />
      <FeaturesSection />
      <PricingTeaser />
      <FinalCTA />
      <Footer />
    </>
  );
}