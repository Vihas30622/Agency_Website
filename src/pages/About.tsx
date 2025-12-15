import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Users, Target, Handshake } from "lucide-react";

const differentiators = [
  {
    icon: Users,
    title: "Not Just Designers",
    description: "We combine creative vision with technical execution. Our team thinks in user journeys and conversion funnels.",
  },
  {
    icon: Target,
    title: "Not Just Developers",
    description: "Code is just a tool. We focus on business outcomes, growth metrics, and tangible results for your startup.",
  },
  {
    icon: Handshake,
    title: "Your Extended Team",
    description: "We integrate seamlessly with your workflow. Think of us as your dedicated digital department.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
                About Us
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
                A creative and tech agency{" "}
                <span className="gradient-text">built for startups</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Buildoholics is more than an agency — we're a team-driven partner that delivers 
                end-to-end digital solutions. Websites, content, marketing — all under one roof, 
                with the focus and speed that startups need.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="relative py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-12 lg:p-16 max-w-4xl mx-auto text-center"
            >
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Our Mission
              </h2>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-snug">
                "Our mission is to help businesses build a{" "}
                <span className="gradient-text">strong online presence</span> and convert 
                attention into <span className="gradient-text">growth</span>."
              </p>
            </motion.div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="relative py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="What Makes Us Different"
              title="We're Built Different"
              description="A unique blend of creativity, technology, and business acumen."
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlassCard className="h-full p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
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

export default About;
