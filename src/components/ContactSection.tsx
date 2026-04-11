import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const socials = [
  { icon: Mail, label: "hello@developer.com", href: "mailto:hello@developer.com" },
  { icon: Github, label: "github.com/developer", href: "#" },
  { icon: Linkedin, label: "linkedin.com/in/developer", href: "#" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="blob w-64 h-64 bg-primary/15 bottom-0 left-0" style={{ animationDelay: "3s" }} />
      <div className="container mx-auto max-w-4xl relative z-10">
        <AnimatedSection>
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2 text-center">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
            Contact <span className="gradient-text">Me</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="space-y-4">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="glass-card p-4 flex items-center gap-4 group block">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <s.icon size={18} className="text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{s.label}</span>
                </a>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground transition-shadow"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground transition-shadow"
              />
              <textarea
                placeholder="Your Message"
                required
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground resize-none transition-shadow"
              />
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 group">
                <Send size={16} className="group-hover:translate-x-0.5 transition-transform" /> Send Message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
