import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Github } from "lucide-react";
import { useState, useRef } from "react";

const projects = [
  { title: "SaaS Dashboard", desc: "Analytics dashboard with real-time data visualization, user management, and subscription billing.", tech: ["React", "Node.js", "MongoDB", "Stripe"], color: "from-purple-500/20 to-blue-500/20" },
  { title: "E-commerce MERN", desc: "Full-featured online store with cart, payments, admin panel, and order tracking.", tech: ["React", "Express", "MongoDB", "Redux"], color: "from-blue-500/20 to-cyan-500/20" },
  { title: "Realtime Chat App", desc: "WebSocket-powered messaging app with rooms, typing indicators, and file sharing.", tech: ["React", "Socket.io", "Node.js", "MongoDB"], color: "from-green-500/20 to-emerald-500/20" },
  { title: "Admin Panel", desc: "Comprehensive admin panel with RBAC, data tables, charts, and CRUD operations.", tech: ["Next.js", "Tailwind", "PostgreSQL", "JWT"], color: "from-orange-500/20 to-yellow-500/20" },
  { title: "AI Web App", desc: "AI-powered content generator with OpenAI integration, templates, and history.", tech: ["Next.js", "OpenAI", "MongoDB", "Tailwind"], color: "from-pink-500/20 to-rose-500/20" },
  { title: "REST API Platform", desc: "Scalable API platform with auth, rate limiting, documentation, and monitoring.", tech: ["Node.js", "Express", "MongoDB", "Docker"], color: "from-indigo-500/20 to-violet-500/20" },
];

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setTransform("")}
      style={{ transform, transition: "transform 0.2s ease-out" }}
      className={className}
    >
      {children}
    </div>
  );
};

const ProjectsSection = () => (
  <section id="projects" className="section-padding relative">
    <div className="blob w-72 h-72 bg-secondary/10 bottom-20 -left-20" style={{ animationDelay: "2s" }} />
    <div className="container mx-auto relative z-10">
      <AnimatedSection>
        <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2 text-center">Portfolio</p>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          Featured <span className="gradient-text">Projects</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1}>
            <TiltCard className="glass-card overflow-hidden group">
              <div className={`h-44 bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-3xl font-bold font-heading text-foreground/20 group-hover:text-foreground/40 transition-colors duration-300">
                  {p.title}
                </span>
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-bold font-heading text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-badge text-[11px]">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="btn-outline-glow text-xs py-2 px-4 flex items-center gap-1.5">
                    <Github size={14} /> Code
                  </button>
                  <button className="btn-primary text-xs py-2 px-4 flex items-center gap-1.5">
                    <ExternalLink size={14} /> Demo
                  </button>
                </div>
              </div>
            </TiltCard>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
