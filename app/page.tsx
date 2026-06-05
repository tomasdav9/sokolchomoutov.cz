import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { LeadershipSection } from "./components/LeadershipSection";
import { SponsorsSection } from "./components/SponsorsSection";
import { VenueSection } from "./components/VenueSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <LeadershipSection />
      <SponsorsSection />
      <VenueSection />
      <ContactSection />
      <Footer />
    </>
  );
}
