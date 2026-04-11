import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Developer Portfolio. Built with <Heart size={12} className="inline text-primary" /> and React.
      </p>
      <div className="flex gap-4">
        {[Github, Linkedin, Twitter].map((Icon, i) => (
          <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
