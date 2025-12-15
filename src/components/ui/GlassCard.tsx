import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = false, ...props }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-card p-6 transition-all duration-500",
        hover && "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10",
        className
      )}
      whileHover={hover ? { y: -4, scale: 1.02 } : undefined}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
