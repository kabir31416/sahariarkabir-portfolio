import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const techs = ["MongoDB", "Express", "React", "Node.js", "Next.js", "Firebase"];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-32">
    {/* Blobs */}
    <div className="blob w-72 h-72 bg-primary/40 top-20 -left-20" style={{ animationDelay: "0s" }} />
    <div className="blob w-96 h-96 bg-secondary/30 bottom-20 -right-20" style={{ animationDelay: "2s" }} />
    <div className="blob w-64 h-64 bg-accent/20 top-1/2 left-1/3" style={{ animationDelay: "4s" }} />

    <div className="container mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-primary font-medium mb-4 tracking-widest uppercase text-sm">
          Welcome to my portfolio
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
          MERN Stack
          <br />
          <span className="gradient-text">Developer</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          I build scalable full-stack applications with modern technologies,
          clean code, and pixel-perfect designs.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
      >
        <a href="#projects" className="btn-primary">View Projects</a>
        <a href="#contact" className="btn-outline-glow">Hire Me</a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-3"
      >
        {techs.map((t) => (
          <span key={t} className="tech-badge">{t}</span>
        ))}
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-16"
      >
        <ArrowDown className="mx-auto text-muted-foreground" size={24} />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
