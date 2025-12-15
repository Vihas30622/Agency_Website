import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Rocket,
  TrendingUp
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    description: "We dive deep into your business, goals, and audience to craft the perfect strategy.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design & Build",
    description: "Our team creates stunning designs and develops robust, scalable solutions.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Market",
    description: "We launch your product and execute marketing campaigns that drive results.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Support & Scale",
    description: "Ongoing optimization and support to help you scale and grow continuously.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.5,
    },
  },
};

export function Process() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Process"
          title="Simple, Transparent, Effective"
          description="A proven 4-step process that takes you from idea to growth."
        />

        <div className="mt-16 relative">
          {/* Connection Line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 -translate-y-1/2 origin-left"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="relative"
              >
                <div className="text-center">
                  {/* Step Number */}
                  <div className="relative z-10 mx-auto w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center mb-6 group-hover:border-primary/50 transition-colors">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10" />
                    <step.icon className="w-8 h-8 text-primary relative z-10" />
                  </div>


                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
