import { motion } from "framer-motion";
import {
  Globe,
  Palette,
  Megaphone,
  HeartHandshake,
  Video
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Globe,
    title: "Website & App Development",
    description: "Modern, fast, and conversion-optimized websites built to scale.",
  },
  {
    icon: Video,
    title: "Social Media Content & Creatives",
    description: "Scroll-stopping content that engages and converts your audience.",
  },
  {
    icon: Palette,
    title: "Branding & Visual Identity",
    description: "Memorable brand identities that stand out in crowded markets.",
  },
  {
    icon: Megaphone,
    title: "Marketing & Ads",
    description: "Strategic campaigns that drive growth and maximize ROI.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support & Management",
    description: "Continuous optimization and dedicated support for your success.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ServicesOverview() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="What We Do"
          title="End-to-End Solutions for Growing Businesses"
          description="From concept to launch and beyond, we handle every aspect of your digital presence."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants}>
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
        </motion.div>
      </div>
    </section>
  );
}
