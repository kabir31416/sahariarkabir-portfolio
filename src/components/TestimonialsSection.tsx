import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  
  {
    name: "Verified Client",
    role: "WordPress Project",
    text: "Excellent communication and timely delivery. The website was built exactly according to our requirements.",
    rating: 5
  },
  {
    name: "Verified Client",
    role: "Android App Project",
    text: "Very satisfied with the app development work. Features were implemented smoothly and professionally.",
    rating: 5
  },
  {
    name: "Verified Client",
    role: "Firebase Integration",
    text: "Solved complex Firebase issues and improved our app performance significantly.",
    rating: 5
  },
  {
    name: "Verified Client",
    role: "Bug Fixing",
    text: "Quickly identified and fixed critical bugs in our existing project.",
    rating: 5
  },
  {
    name: "Verified Client",
    role: "Freelance Project",
    text: "Reliable developer, easy to communicate with, and delivered quality work on time.",
    rating: 5
  }

];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 10);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    checkScroll();

    const timer = setInterval(() => {
      if (!el) return;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 340, behavior: "smooth" });
      }
    }, 4000);

    return () => { el.removeEventListener("scroll", checkScroll); clearInterval(timer); };
  }, []);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Warm gradient + concentric rings */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 to-background" />
        <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] rounded-full bg-accent/5 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 50% 50%, transparent 0px, transparent 40px, hsl(var(--accent) / 0.15) 40px, hsl(var(--accent) / 0.15) 41px)",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <AnimatedSection>
          <p className="text-primary font-mono font-medium text-sm tracking-widest mb-2 text-center">
            // client_reviews
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card p-6 min-w-[300px] max-w-[340px] flex-shrink-0 snap-center">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-5 italic leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm font-mono">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-6">
            <button onClick={() => scroll(-1)} disabled={!canLeft} className="w-9 h-9 rounded-full glass flex items-center justify-center disabled:opacity-30 transition-opacity">
              <ChevronLeft size={16} />
            </button>
            <button onClick={() => scroll(1)} disabled={!canRight} className="w-9 h-9 rounded-full glass flex items-center justify-center disabled:opacity-30 transition-opacity">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
