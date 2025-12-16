import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { LetsTalkButton } from "@/components/ui/GradientButton";
import {
  Globe,
  Layout,
  Camera,
  Video,
  Palette,
  Megaphone,
  Calendar,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom, responsive websites built with modern technologies. Fast, secure, and optimized for conversions.",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads and drive action from your campaigns.",
  },
  {
    icon: Camera,
    title: "Social Media Creatives",
    description: "Eye-catching graphics and carousels that stop the scroll and boost engagement across platforms.",
  },
  {
    icon: Video,
    title: "Short-form Video Editing",
    description: "Professional video editing for Reels, TikToks, and YouTube Shorts that captivate audiences.",
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Complete brand identity packages including logos, color palettes, typography, and brand guidelines.",
  },
  {
    icon: Megaphone,
    title: "Ads & Marketing",
    description: "Strategic paid advertising campaigns across Google, Meta, and LinkedIn that deliver ROI.",
  },
  {
    icon: Calendar,
    title: "Monthly Management",
    description: "Ongoing website maintenance and social media management to keep your digital presence fresh.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Our Services"
              title="Everything You Need to Grow Online"
              description="From websites to marketing campaigns, we offer comprehensive digital solutions tailored for startups and growing businesses."
            />
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlassCard className="h-full p-8 group">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Plan CTA */}
        <section className="relative py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-12 text-center"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Need a custom plan?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Every business is unique. Let's discuss your specific needs and create a tailored solution that fits your goals and budget.
              </p>
              <Link to="/contact">
                <LetsTalkButton />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
