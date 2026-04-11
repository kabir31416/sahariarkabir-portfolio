import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Redux", level: 85 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Express", level: 90 },
      { name: "REST API", level: 93 },
      { name: "JWT Auth", level: 88 },
      { name: "Socket.io", level: 82 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "Firebase", level: 85 },
      { name: "PostgreSQL", level: 80 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 78 },
      { name: "Vercel", level: 88 },
      { name: "AWS", level: 72 },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto">
      <AnimatedSection>
        <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2 text-center">My Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          Tech <span className="gradient-text">Arsenal</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((cat, ci) => (
          <AnimatedSection key={cat.title} delay={ci * 0.1}>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold font-heading gradient-text mb-5">{cat.title}</h3>
              <div className="space-y-4">
                {cat.skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full"
                        style={{ background: "var(--gradient-primary)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
