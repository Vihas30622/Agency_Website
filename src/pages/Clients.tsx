import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Clients = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Our Clients"
              title="Join Our Journey"
              description="We are just getting started, and we'd love for you to be a part of our story."
            />
          </div>
        </section>

        {/* Empty State / Call to Action */}
        <section className="relative py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rx-auto max-w-3xl mx-auto rounded-3xl border border-glass-border bg-glass/30 backdrop-blur-md p-12 text-center overflow-hidden relative"
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 p-8 opacity-20">
                <Sparkles className="w-24 h-24 text-primary" />
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Be Glad to Be Our First Customer
                </h3>

                <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-lg leading-relaxed">
                  We bring the same level of dedication and expertise to our first client as we will to our hundredth. Experience personalized attention and premium quality service.
                </p>

                <Button asChild size="lg" variant="glow" className="gap-2">
                  <a href="/contact">
                    Start Your Project
                    <ArrowRight size={18} />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Clients;
