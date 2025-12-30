import PublicHeader from "../components/PublicHeader";
import HeroSection from "../components/HeroSection";
import PhilosophySection from "../components/PhilosophySection";
import FeaturesSection from "../components/FeaturesSection";
import PricingTeaser from "../components/PricingTeaser";
import Footer from "../components/Footer";
import PageBackground from "../components/PageBackground";
import HeroGlow from "../components/HeroGlow";
import FreeVsPremium from "../components/FreeVsPremium";
import HeroBackground from "../components/HeroBackground";

export default function LandingPage() {
  return (
    <>
      <PublicHeader />

      <main className="relative overflow-hidden">
        <PageBackground />
        <HeroSection />
        <PhilosophySection />
        <FeaturesSection />
        <FreeVsPremium />
        <PricingTeaser />
        </main>

      <Footer />
    </>
  );
}