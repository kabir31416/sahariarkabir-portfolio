import AnimatedSection from "./AnimatedSection";
import { Globe, Layers, Server, LayoutDashboard, Bug } from "lucide-react";

const services = [
  { icon: Globe, title: "Full Stack Web App", desc: "End-to-end development with React, Node.js, and MongoDB." },
  { icon: Layers, title: "SaaS Development", desc: "Multi-tenant SaaS platforms with billing and analytics." },
  { icon: Server, title: "API Development", desc: "RESTful APIs with authentication, rate limiting, and docs." },
  { icon: LayoutDashboard, title: "Dashboard UI", desc: "Data-rich admin dashboards with charts and real-time updates." },
  { icon: Bug, title: "Bug Fixing", desc: "Debug, optimize, and refactor existing codebases." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container mx-auto">
      <AnimatedSection>
        <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2 text-center">What I Offer</p>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          My <span className="gradient-text">Services</span>
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <div className="glass-card p-6 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
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
