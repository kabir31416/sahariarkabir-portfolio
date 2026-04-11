import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  { title: "SaaS Dashboard", desc: "Analytics dashboard with real-time data visualization, user management, and subscription billing.", tech: ["React", "Node.js", "MongoDB", "Stripe"], color: "from-purple-500/20 to-blue-500/20" },
  { title: "E-commerce MERN", desc: "Full-featured online store with cart, payments, admin panel, and order tracking.", tech: ["React", "Express", "MongoDB", "Redux"], color: "from-blue-500/20 to-cyan-500/20" },
  { title: "Realtime Chat App", desc: "WebSocket-powered messaging app with rooms, typing indicators, and file sharing.", tech: ["React", "Socket.io", "Node.js", "MongoDB"], color: "from-green-500/20 to-emerald-500/20" },
  { title: "Admin Panel", desc: "Comprehensive admin panel with RBAC, data tables, charts, and CRUD operations.", tech: ["Next.js", "Tailwind", "PostgreSQL", "JWT"], color: "from-orange-500/20 to-yellow-500/20" },
  { title: "AI Web App", desc: "AI-powered content generator with OpenAI integration, templates, and history.", tech: ["Next.js", "OpenAI", "MongoDB", "Tailwind"], color: "from-pink-500/20 to-rose-500/20" },
  { title: "REST API Platform", desc: "Scalable API platform with auth, rate limiting, documentation, and monitoring.", tech: ["Node.js", "Express", "MongoDB", "Docker"], color: "from-indigo-500/20 to-violet-500/20" },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding relative overflow-hidden">
    {/* Subtle animated mesh gradient */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-secondary/6 blur-[140px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/6 blur-[120px]" />
    </div>

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
            <div className="glass-card overflow-hidden hover:translate-y-[-2px] transition-transform duration-300">
              <div className={`h-44 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                <span className="text-3xl font-bold font-heading text-foreground/20">
                  {p.title}
                </span>
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
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
