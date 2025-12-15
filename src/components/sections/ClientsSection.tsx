import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const clients = [
  { name: "TechStart", logo: "TS" },
  { name: "GrowthLab", logo: "GL" },
  { name: "Velocity", logo: "VL" },
  { name: "Nexus", logo: "NX" },
  { name: "Horizon", logo: "HZ" },
  { name: "Pinnacle", logo: "PN" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function ClientsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Trusted by Startups and Growing Businesses"
          description="We've helped companies of all sizes achieve their digital goals."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              variants={itemVariants}
              className="aspect-[3/2] rounded-xl border border-border bg-card/30 flex items-center justify-center hover:border-primary/30 hover:bg-card/50 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-3xl font-bold text-muted-foreground/50 group-hover:text-primary/70 transition-colors">
                  {client.logo}
                </span>
                <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
