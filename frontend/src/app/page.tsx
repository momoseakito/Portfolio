import ContactSection from "@/components/ContactSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortgolioSection";
import SkilsSection from "@/components/SkilsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <PortfolioSection />
      <SkilsSection />
      <ContactSection />
    </div>
  );
}
