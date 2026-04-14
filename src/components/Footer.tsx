import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => (
  <footer className="relative pt-px pb-0">
    {/* Animated gradient line */}
    <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    <div className="py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-mono">
          <span className="text-primary">$</span> echo "© {new Date().getFullYear()} Developer Portfolio. Built with{" "}
          <Heart size={12} className="inline text-primary" /> and React."
        </p>
        <div className="flex gap-4">
          {[Github, Linkedin, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
