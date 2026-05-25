import AnimatedSection from "./AnimatedSection";
import { Briefcase } from "lucide-react";

const timeline = [
  {
    year: "2026 - Present",
    title: "Learning MERN Stack Development",
    desc: "Currently focused on mastering MongoDB, Express.js, React, and Node.js by building modern full-stack web applications.",
    current: true
  },
  {
    year: "2023 - Present",
    title: "Android App Development",
    desc: "Developed Android applications using Java and Firebase, including quiz apps, parcel delivery systems, and payment integrations.",
    current: false
  },
  {
    year: "2022 - Present",
    title: "WordPress Development",
    desc: "Built and customized WordPress websites for clients, including business sites, e-commerce stores, and custom functionality.",
    current: false
  },
  {
    year: "2021 - 2025",
    title: "Freelance & Client Work",
    desc: "Started freelancing and delivered web and mobile solutions for individuals and small businesses.",
    current: false
  }

];

const ExperienceSection = () => (
  <section id="experience" className="section-padding relative overflow-hidden">
    {/* Circuit-board inspired background */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
    </div>

    <div className="container mx-auto max-w-3xl relative z-10">
      <AnimatedSection>
        <p className="text-primary font-mono font-medium text-sm tracking-widest mb-2 text-center">
          // experience.timeline()
        </p>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          My <span className="gradient-text">Experience</span>
        </h2>
      </AnimatedSection>

      <div className="relative">
        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border" />

        {timeline.map((item, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className="hidden md:block md:w-1/2" />
              <div className={`absolute left-5 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                item.current
                  ? "bg-primary/20 border-2 border-primary"
                  : "bg-muted border-2 border-primary"
              }`}>
                <Briefcase size={16} className="text-primary" />
              </div>
              <div className="ml-16 md:ml-0 md:w-1/2 glass-card p-5">
                <span className="text-xs text-primary font-mono">{item.year}</span>
                <h3 className="font-bold font-heading mt-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
