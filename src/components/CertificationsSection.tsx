import AnimatedSection from "./AnimatedSection";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Python (Basic) Certificate",
    issuer: "HackerRank",
    date: "2025",
    credentialId: "f813e379e112",
    color: "from-orange-500/20 to-yellow-500/20",
    link: "https://www.hackerrank.com/certificates/f813e379e112",
  },
  {
    title: "Mern Stack Developer",
    issuer: "Programming Hero",
    date: "2026",
    credentialId: "WEB13-0181",
    color: "from-blue-500/20 to-cyan-500/20",
    link: "https://www.programming-hero.com/",
  },
];

const CertificationsSection = () => (
  <section id="certifications" className="section-padding relative overflow-hidden">
    {/* Terminal-inspired scanline background */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.03] to-background" />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--primary) / 0.3) 2px, hsl(var(--primary) / 0.3) 4px)",
        }}
      />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />
    </div>

    <div className="container mx-auto relative z-10">
      <AnimatedSection>
        <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2 text-center font-mono">
          // certifications
        </p>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          My <span className="gradient-text">Credentials</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {certifications.map((cert, i) => (
          <AnimatedSection key={cert.title} delay={i * 0.1}>
            <div className="glass-card p-6 hover:translate-y-[-2px] transition-transform duration-300 group">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0`}>
                  <Award className="text-foreground" size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold font-heading text-sm mb-1">{cert.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-primary/60 tracking-wider">
                      ID: {cert.credentialId}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-mono">{cert.date}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-border/50">
                <a
                  href={cert.link}
                  target="_blank"
                  className="text-xs text-primary/70 hover:text-primary flex items-center gap-1 font-mono transition-colors"
                >
                  <ExternalLink size={11} /> verify_credential()
                </a>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
