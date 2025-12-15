import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card/50 backdrop-blur-xl p-12 lg:p-20"
        >
          {/* Background Effects */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" 
          />
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" 
          />
          
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 opacity-50" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Ready to build and grow
              <br />
              <span className="gradient-text">your business?</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
            >
              Let's discuss how we can help you launch faster, look premium, and scale your online presence.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button asChild variant="glow" size="lg">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
