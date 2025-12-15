import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function SectionHeading({
  badge,
  title,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <motion.span
          variants={itemVariants}
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-white/10 text-white border border-white/10 mb-6 backdrop-blur-md"
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        variants={itemVariants}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
