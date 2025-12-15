import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Clients", path: "/clients" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const mouseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isScrollingUpRef = useRef(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Show navbar when scrolling up, hide when scrolling down
          if (currentScrollY < lastScrollY && currentScrollY > 10) {
            // Scrolling up
            setIsVisible(true);
            isScrollingUpRef.current = true;
          } else if (currentScrollY > lastScrollY && currentScrollY > 10) {
            // Scrolling down
            setIsVisible(false);
            isScrollingUpRef.current = false;
          } else if (currentScrollY <= 10) {
            // At the top, always show
            setIsVisible(true);
            isScrollingUpRef.current = false;
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseMove = () => {
      // Clear existing timeout
      if (mouseTimeoutRef.current) {
        clearTimeout(mouseTimeoutRef.current);
      }

      // Show navbar on mouse movement
      if (window.scrollY > 10) {
        setIsVisible(true);
      }

      // Set timeout to hide navbar after cursor inactivity (2 seconds)
      mouseTimeoutRef.current = setTimeout(() => {
        if (window.scrollY > 10 && !isScrollingUpRef.current) {
          setIsVisible(false);
        }
      }, 2000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (mouseTimeoutRef.current) {
        clearTimeout(mouseTimeoutRef.current);
      }
    };
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 w-full bg-gray-900"
    >
      <nav className="w-full px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">B</span>
            </div>
            <span className="text-2xl font-bold text-foreground">
              Buildoholics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-6 py-3 rounded-lg text-base font-medium transition-all duration-300",
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-white hover:bg-glass/10"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild variant="glow" size="lg" className="px-6 py-3 text-base">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-glass/50 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pt-4 border-t border-glass-border"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-6 py-4 rounded-lg text-base font-medium transition-all duration-300",
                      location.pathname === link.path
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-white hover:bg-glass/10"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button asChild variant="glow" className="mt-2">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
