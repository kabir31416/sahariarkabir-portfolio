import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { GitBranch, Star, GitFork } from "lucide-react";

const stats = [
  { icon: GitBranch, label: "Repositories", value: "50+" },
  { icon: Star, label: "Stars Earned", value: "200+" },
  { icon: GitFork, label: "Forks", value: "80+" },
];

const languages = [
  { name: "JavaScript", pct: 40, color: "bg-yellow-400" },
  { name: "TypeScript", pct: 30, color: "bg-blue-500" },
  { name: "HTML/CSS", pct: 15, color: "bg-orange-500" },
  { name: "Python", pct: 10, color: "bg-green-500" },
  { name: "Other", pct: 5, color: "bg-gray-500" },
];

const contributions = Array.from({ length: 52 }, () =>
  Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
);

const contribColor = (v: number) => {
  if (v === 0) return "bg-muted";
  if (v === 1) return "bg-primary/20";
  if (v === 2) return "bg-primary/40";
  if (v === 3) return "bg-primary/60";
  return "bg-primary/80";
};

const GitHubSection = () => (
  <section className="section-padding relative overflow-hidden">
    {/* Matrix-style falling lines background */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/8 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-secondary/6 blur-[140px]" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 20px, hsl(var(--secondary) / 0.3) 20px, hsl(var(--secondary) / 0.3) 21px)",
        }}
      />
    </div>

    <div className="container mx-auto relative z-10">
      <AnimatedSection>
        <p className="text-primary font-mono font-medium text-sm tracking-widest mb-2 text-center">
          $ git log --oneline
        </p>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          GitHub <span className="gradient-text">Activity</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {stats.map((s, i) => (
          <AnimatedSection key={s.label} delay={i * 0.1}>
            <div className="glass-card p-6 text-center">
              <s.icon className="mx-auto mb-3 text-primary" size={28} />
              <p className="text-2xl font-bold font-heading">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <div className="glass-card p-6 overflow-x-auto mb-6">
          <h3 className="text-sm font-mono font-medium mb-4 text-muted-foreground">contribution_graph</h3>
          <div className="flex gap-[3px] min-w-[700px]">
            {contributions.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((day, di) => (
                  <div key={di} className={`w-[10px] h-[10px] rounded-sm ${contribColor(day)}`} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="glass-card p-6">
          <h3 className="text-sm font-mono font-medium mb-4 text-muted-foreground">top_languages</h3>
          <div className="flex rounded-full overflow-hidden h-3 mb-4">
            {languages.map((l) => (
              <motion.div
                key={l.name}
                initial={{ width: 0 }}
                whileInView={{ width: `${l.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className={`${l.color}`}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {languages.map((l) => (
              <div key={l.name} className="flex items-center gap-2 text-sm">
                <span className={`w-2.5 h-2.5 rounded-full ${l.color}`} />
                <span className="text-muted-foreground">{l.name}</span>
                <span className="font-medium font-mono text-xs">{l.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default GitHubSection;
