import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Mail, Github, Linkedin, Send,} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const socials = [
  { icon: Mail, label: "sahariarkabir1519@gmail.com", href: "mailto:sahariarkabir1519@gmail.com" },
  { icon: Github, label: "github.com/kabir31416/", href: "https://github.com/kabir31416/" },
  { icon: Linkedin, label: "linkedin.com/in/kabir31416", href: "https://linkedin.com/in/kabir31416" },
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
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Deep glow center + radial rings */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/4 blur-[140px]" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03]"
          style={{
            border: "1px solid hsl(var(--primary))",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.02]"
          style={{
            border: "1px solid hsl(var(--primary))",
          }}
        />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <AnimatedSection>
          <p className="text-primary font-mono font-medium text-sm tracking-widest mb-2 text-center">
            {'>'} contact.init()
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
            Contact <span className="gradient-text">Me</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="space-y-4">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="glass-card p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <s.icon size={18} className="text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">{s.label}</span>
                </a>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
              <input
                type="text"
                placeholder="your_name"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground transition-shadow"
              />
              <input
                type="email"
                placeholder="your_email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground transition-shadow"
              />
              <textarea
                placeholder="your_message"
                required
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground resize-none transition-shadow"
              />
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send size={16} /> send_message()
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
