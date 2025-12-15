import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Clients", path: "/clients" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "Website Development", path: "/services" },
    { name: "Social Media", path: "/services" },
    { name: "Branding", path: "/services" },
    { name: "Marketing", path: "/services" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Email", icon: Mail, href: "mailto:hello@buildoholics.com" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-glass-border bg-background/80 backdrop-blur-xl">
      {/* Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                Buildoholics
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Building websites, content, and growth systems for startups and growing businesses.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="h-10 w-10 rounded-lg bg-glass/50 border border-glass-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@buildoholics.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  hello@buildoholics.com
                </a>
              </li>
              <li>
                <p className="text-sm text-muted-foreground">
                  Ready to build something amazing?
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-glass-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Buildoholics. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
