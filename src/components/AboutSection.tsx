import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Code2, Shield, Radio, LayoutDashboard, Server } from "lucide-react";

const focuses = [
  { icon: Code2, label: "Full Stack Development" },
  { icon: Server, label: "REST API" },
  { icon: Shield, label: "Authentication" },
  { icon: Radio, label: "Realtime Apps" },
  { icon: LayoutDashboard, label: "SaaS Dashboards" },
];

const counters = [
  { label: "Projects Completed", target: 50 },
  { label: "Years Experience", target: 4 },
  { label: "Happy Clients", target: 30 },
];

const AnimatedCounter = ({ target }: { target: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const triggered = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          let start = 0;
          const step = Math.max(1, Math.ceil(target / 40));
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(start);
          }, 40);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref} className="text-3xl md:text-4xl font-bold font-heading gradient-text">{count}+</span>;
};

const AboutSection = () => (
  <section id="about" className="section-padding relative overflow-hidden">
    {/* Soft blurred gradient mesh background */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px]" />
    </div>

    <div className="container mx-auto relative z-10">
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

      <div className="grid grid-cols-3 gap-4 mb-12">
        {counters.map((c) => (
          <AnimatedSection key={c.label}>
            <div className="glass-card p-6 text-center">
              <AnimatedCounter target={c.target} />
              <p className="text-xs md:text-sm text-muted-foreground mt-2">{c.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

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
