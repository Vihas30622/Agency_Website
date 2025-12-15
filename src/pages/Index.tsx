import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ServicesOverview />
        <WhyUs />
        <Process />
        <ClientsSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
