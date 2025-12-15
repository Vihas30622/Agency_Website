import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const projects = [
    {
        id: 1,
        title: "FutureKart",
        description: "A comprehensive inventory management and sales dashboard designed to streamline business operations and analytics.",
        tags: ["React", "Dashboard", "Analytics"],
        image: "/assets/futurekart_dashboard.png",
        link: "https://drive.google.com/file/d/164AyyLKP5EHBYfzBCYuvzhIDXaT4PGvC/view?usp=sharing",
    },
    {
        id: 2,
        title: "Thatha Ruchulu",
        description: "A culinary platform celebrating traditional authentic flavors and recipes, bringing heritage to the digital table.",
        tags: ["React", "Web", "Culinary"],
        image: "/assets/thatha_ruchulu_real.png",
        link: "https://drive.google.com/file/d/1Bw5TT8thc_6OFdjKxuWZV6XoVgSMh9Y8/view?usp=sharing",
    },
];

const Products = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-32 pb-20">
                {/* Hero / Header Section - Matching Services.tsx style */}
                <section className="relative mb-16">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
                    </div>
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <SectionHeading
                            badge="Our Work"
                            title="Innovative Solutions & Projects"
                            description="Explore our portfolio of digital engineering excellence. From AI dashboards to authentic culinary platforms, we build software that matters."
                        />
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="relative">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <GlassCard className="h-full overflow-hidden p-0 group border-border/50 bg-card/40 hover:bg-card/60 transition-colors">
                                        {/* Image Area */}
                                        <div className="aspect-video overflow-hidden relative border-b border-border/50 bg-black/50">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
                                            />
                                            {/* Subtle Overlay */}
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                        </div>

                                        {/* Content Area */}
                                        <div className="p-8">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                                {project.description}
                                            </p>

                                            <div className="pt-4 border-t border-border/50">
                                                <Button className="gap-2 w-full sm:w-auto" variant="glow" asChild>
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink size={16} />
                                                        View Project
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Optional CTA matching Services */}
                <section className="relative py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass-card p-12 text-center"
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                                Have a project in mind?
                            </h2>
                            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                                Let's collaborate to bring your vision to life with our expert engineering team.
                            </p>
                            <Button asChild variant="glow" size="lg">
                                <a href="/contact">
                                    Start a Project
                                    <ArrowRight size={20} />
                                </a>
                            </Button>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Products;
