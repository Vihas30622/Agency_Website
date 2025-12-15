import { motion } from "framer-motion";
import { 
  Rocket, 
  Clock, 
  Users, 
  Zap 
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: Rocket,
    title: "Startup-Focused Execution",
    description: "We understand the pace and challenges of startups. Our processes are built for speed without sacrificing quality.",
  },
  {
    icon: Zap,
    title: "End-to-End Delivery",
    description: "From strategy to design to development to marketing — everything under one roof, one team, one vision.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Launch in weeks, not months. Our streamlined workflows get you to market faster than traditional agencies.",
  },
  {
    icon: Users,
    title: "Dedicated Support Team",
    description: "You get a dedicated team that knows your business inside out. We're an extension of your startup.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function WhyUs() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Buildoholics"
          title="Built Different. Built for Startups."
          description="We're not just another agency. We're your growth partner from day one."
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="flex gap-6 p-6 rounded-2xl border border-border bg-card/30 hover:bg-card/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
