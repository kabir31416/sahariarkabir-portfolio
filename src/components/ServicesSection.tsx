import AnimatedSection from "./AnimatedSection";
import { Globe, Layers, Server, LayoutDashboard, Bug, Smartphone, Database, Code } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Android App Development",
    desc: "Custom Android applications using Java and Firebase with real-time features and clean UI."
  },
  {
    icon: Globe,
    title: "WordPress Development",
    desc: "Professional business websites, e-commerce stores, and custom WordPress solutions."
  },
  {
    icon: Database,
    title: "Firebase Integration",
    desc: "Authentication, Firestore, Realtime Database, cloud storage, and push notifications."
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard Development",
    desc: "Interactive dashboards with data management, analytics, and user-friendly interfaces."
  },
  {
    icon: Code,
    title: "MERN Stack Learning",
    desc: "Currently building full-stack web applications with MongoDB, Express.js, React, and Node.js."
  },
  {
    icon: Bug,
    title: "Bug Fixing & Optimization",
    desc: "Debugging, performance improvements, and maintaining existing web and mobile applications."
  }

];

const ServicesSection = () => (
  <section id="services" className="section-padding relative overflow-hidden">
    {/* Gradient mesh + diagonal scanlines */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/6 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-secondary/6 blur-[120px]" />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, hsl(var(--primary) / 0.2) 10px, hsl(var(--primary) / 0.2) 11px)",
        }}
      />
    </div>

    <div className="container mx-auto relative z-10">
      <AnimatedSection>
        <p className="text-primary font-mono font-medium text-sm tracking-widest mb-2 text-center">
          {'>'} services.render()
        </p>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          My <span className="gradient-text">Services</span>
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <div className="glass-card p-6 hover:translate-y-[-2px] transition-transform duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-bold font-heading mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
