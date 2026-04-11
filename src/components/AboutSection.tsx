import AnimatedSection from "./AnimatedSection";
import { Code2, Shield, Radio, LayoutDashboard, Server } from "lucide-react";

const focuses = [
  { icon: Code2, label: "Full Stack Development" },
  { icon: Server, label: "REST API" },
  { icon: Shield, label: "Authentication" },
  { icon: Radio, label: "Realtime Apps" },
  { icon: LayoutDashboard, label: "SaaS Dashboards" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <AnimatedSection>
        <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2 text-center">About Me</p>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-6">
          Passionate <span className="gradient-text">Developer</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          With 4+ years of experience building production-ready web applications,
          I specialize in the MERN stack and love turning complex problems into
          elegant, scalable solutions.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {focuses.map((f, i) => (
          <AnimatedSection key={f.label} delay={i * 0.1}>
            <div className="glass-card p-5 text-center">
              <f.icon className="mx-auto mb-3 text-primary" size={28} />
              <p className="text-sm font-medium">{f.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
