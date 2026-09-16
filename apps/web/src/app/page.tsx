import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Products } from "@/components/site/Products";
import { Platform } from "@/components/site/Platform";
import { Flow } from "@/components/site/Flow";
import { TeamSection } from "@/components/site/TeamSection";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Platform />
      <Flow />
      <TeamSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
