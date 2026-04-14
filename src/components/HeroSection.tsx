import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import devImg from "@/assets/developer-hero.jpg";

const techs = ["MongoDB", "Express", "React", "Node.js", "Next.js", "Firebase"];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden section-padding pt-28">
    {/* Background grid */}
    <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--muted)/0.15)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--muted)/0.15)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,black_40%,transparent_100%)]" />

    {/* Blobs */}
    <div className="blob w-80 h-80 bg-primary/30 top-16 -left-24" style={{ animationDelay: "0s" }} />
    <div className="blob w-[28rem] h-[28rem] bg-secondary/20 bottom-16 -right-24" style={{ animationDelay: "2s" }} />
    <div className="blob w-64 h-64 bg-accent/15 top-1/2 left-1/4" style={{ animationDelay: "4s" }} />

    <div className="container mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-mono font-medium mb-3 tracking-widest text-xs">
            {'>'} welcome_to_portfolio()
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading mb-4 leading-[1.1]">
            MERN Stack
            <br />
            <span className="gradient-text">Developer</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-3 font-medium">
            Full Stack Developer — React + Node.js
          </p>
          <p className="text-sm md:text-base text-muted-foreground/80 max-w-lg mb-8">
            Building scalable, modern web applications with clean code,
            pixel-perfect designs, and production-grade architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a href="#projects" className="btn-primary flex items-center justify-center gap-2">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-outline-glow text-center">Contact Me</a>
          </div>

          <div className="flex flex-wrap gap-2">
            {techs.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="tech-badge"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Right — Developer image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="glass-card p-2 rounded-2xl">
            <img
              src={devImg}
              alt="Developer"
              width={640}
              height={768}
              className="rounded-xl w-full max-w-[380px] lg:max-w-[420px] object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-muted-foreground" size={22} />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
