import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { LeadershipSection } from "./components/LeadershipSection";
import { MatchesSection } from "./components/MatchesSection";
import { SponsorsSection } from "./components/SponsorsSection";
import { VenueSection } from "./components/VenueSection";

export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <MatchesSection />
      <LeadershipSection />
      <SponsorsSection />
      <VenueSection />
      <ContactSection />
      <Footer />
    </>
  );
}
