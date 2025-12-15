import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Quote } from "lucide-react";

const clients = [
  { name: "TechStart Inc.", logo: "TS" },
  { name: "GrowthLab", logo: "GL" },
  { name: "Velocity Ventures", logo: "VV" },
  { name: "Nexus Digital", logo: "NX" },
  { name: "Horizon Tech", logo: "HT" },
  { name: "Pinnacle AI", logo: "PA" },
  { name: "Summit Labs", logo: "SL" },
  { name: "Forge Studio", logo: "FS" },
];

const testimonials = [
  {
    quote: "Buildoholics transformed our online presence completely. Their team understood our vision and delivered beyond expectations.",
    author: "Sarah Chen",
    role: "Founder, TechStart Inc.",
  },
  {
    quote: "The speed and quality of execution was impressive. We launched in half the time we expected, and the results speak for themselves.",
    author: "Marcus Rodriguez",
    role: "CEO, GrowthLab",
  },
  {
    quote: "Having one team handle everything from website to marketing made scaling so much easier. Highly recommend for any startup.",
    author: "Emily Watson",
    role: "Co-founder, Velocity Ventures",
  },
];

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
              title="Trusted by Ambitious Companies"
              description="We've partnered with startups and growing businesses across industries to bring their digital visions to life."
            />
          </div>
        </section>

        {/* Client Logos */}
        <section className="relative py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="aspect-[2/1] rounded-xl border border-border bg-card/30 flex items-center justify-center hover:border-primary/30 hover:bg-card/50 transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-4xl font-bold text-muted-foreground/40 group-hover:text-primary/60 transition-colors">
                      {client.logo}
                    </span>
                    <span className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      {client.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Testimonials"
              title="What Our Clients Say"
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlassCard className="h-full p-8">
                    <Quote className="w-10 h-10 text-primary/30 mb-6" />
                    <p className="text-foreground leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </p>
                    <div className="pt-6 border-t border-border">
                      <p className="font-semibold text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Clients;
