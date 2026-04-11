import AnimatedSection from "./AnimatedSection";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Alex Johnson", role: "Startup Founder", text: "Incredible work on our SaaS platform. Delivered on time with exceptional code quality.", rating: 5 },
  { name: "Sarah Chen", role: "Product Manager", text: "The best developer I've worked with. Turned our complex requirements into a beautiful, functional app.", rating: 5 },
  { name: "Michael Ross", role: "CTO, TechCorp", text: "Reliable, skilled, and great at communication. Built our entire backend API architecture.", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <AnimatedSection>
        <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2 text-center">Reviews</p>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          Client <span className="gradient-text">Testimonials</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.1}>
            <div className="glass-card p-6">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
