import { useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "IdeaVault",
    desc: "A platform to store and manage ideas with secure authentication.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    live: "https://ph-assignment-nine.vercel.app/",
    github: "https://github.com/kabir31416/ph-assignment-nine",
    challenges:
      "Implementing secure authentication and designing scalable database structure.",
    future: "Add AI-powered idea suggestions and collaboration features.",
    color: "from-purple-500/20 to-blue-500/20",
  },
  {
    title: "TilesGallery",
    desc: "Modern gallery app with dynamic layouts and filtering.",
    tech: ["React", "Next.js", "Tailwind"],
    live: "https://ph-assignment-eight.vercel.app/",
    github: "https://github.com/kabir31416/ph-assignment-eight",
    challenges:
      "Handling responsive layout and optimizing image performance.",
    future: "Add drag-and-drop customization and personal collections.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "DevRef",
    desc:
      "Developer reference platform with tools and resources for multiple programming languages.",
    tech: ["React", "Firebase"],
    live: "http://devref.atherin.cc/",
    github: "#",
    challenges:
      "Managing structured data and building fast search functionality.",
    future: "Add bookmarking, offline mode, and advanced filtering.",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Bipul Photo",
    desc: "A professional photography portfolio showcasing creative works and visual storytelling.",
    tech: ["WordPress", "mysql", "Elementor", " PHP"],
    live: "https://bipulphoto.com",
    github: "#",
    challenges:
      "Optimizing high-quality image loading and creating smooth gallery transitions.",
    future:
      "Add AI-based photo tagging and client booking system.",
    color: "from-pink-500/20 to-orange-500/20",
  },

  {
    title: "Photo Tour Bangla",
    desc: "A travel photography and tour showcase platform highlighting scenic destinations of Bangladesh.",
   tech: ["WordPress", "mysql", "Elementor", " PHP"],
    live: "https://phototourbangla.com",
    github: "#",
    challenges:
      "Managing large media content and optimizing SEO for travel-based content.",
    future:
      "Add tour booking system and interactive travel map.",
    color: "from-green-500/20 to-blue-500/20",
  },

  {
    title: "Sonar Bangla Tour",
    desc: "A tourism platform promoting travel packages, destinations, and tour guides across Bangladesh.",
     tech: ["WordPress", "mysql", "Elementor", " PHP"],
    live: "https://sonarbanglatour.com",
    github: "#",
    challenges:
      "Implementing dynamic tour package filtering and responsive UI for mobile users.",
    future:
      "Add online booking, payment integration, and user reviews.",
    color: "from-yellow-500/20 to-red-500/20",
  },

  {
    title: "Agrani Sangbad",
    desc: "A modern news portal delivering latest national and international news updates.",
     tech: ["WordPress", "mysql", "Elementor", " PHP"],
    live: "https://agranisangbad.net",
    github: "#",
    challenges:
      "Handling real-time news updates and category-based filtering system.",
    future:
      "Add push notifications and AI-based news summarization.",
    color: "from-blue-500/20 to-indigo-500/20",
  },

  {
    title: "Srabon Photo",
    desc: "A creative photography portfolio website focusing on aesthetic visuals and client showcase.",
     tech: ["WordPress", "mysql", "Elementor", " PHP"],
    live: "https://srabonphoto.com",
    github: "#",
    challenges:
      "Creating smooth animations without affecting performance.",
    future:
      "Add client dashboard and print order system.",
    color: "from-purple-500/20 to-pink-500/20",
  },

  {
    title: "Neuron",
    desc: "An educational and tech-based platform focused on nursinhg admission students and professionals.",
     tech: ["WordPress", "mysql", "Elementor", " PHP"],
    live: "https://neuron.com.bd",
    github: "#",
    challenges:
      "Structuring scalable content modules and authentication system.",
    future:
      "Add online courses and AI-based learning assistant.",
    color: "from-cyan-500/20 to-blue-500/20",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const modalRef = useRef<HTMLDialogElement>(null);

  // OPEN MODAL
  const openModal = (project: any) => {
    setSelectedProject(project);
    modalRef.current?.showModal();
  };

  // CLOSE MODAL
  const closeModal = () => {
    setSelectedProject(null);
    modalRef.current?.close();
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="container mx-auto relative z-10">

        <AnimatedSection>
          <p className="text-primary font-mono text-sm text-center mb-2">
            {">"} projects.showcase()
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </AnimatedSection>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <div className="glass-card overflow-hidden hover:translate-y-[-3px] transition duration-300">

                {/* Gradient top (UNCHANGED UI) */}
                <div className={`h-40 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                  <span className="text-2xl font-bold text-foreground/20">
                    {p.title}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">{p.title}</h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {p.desc}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t) => (
                      <span key={t} className="tech-badge text-xs">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={p.github}
                      target="_blank"
                      className="btn-outline-glow text-xs px-3 py-2 flex items-center gap-1"
                    >
                      <Github size={14} /> Code
                    </a>

                    <a
                      href={p.live}
                      target="_blank"
                      className="btn-primary text-xs px-3 py-2 flex items-center gap-1"
                    >
                      <ExternalLink size={14} /> Live
                    </a>

                    <button
                      onClick={() => openModal(p)}
                      className="btn-outline-glow text-xs px-3 py-2"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* DAISYUI MODAL (NO UI CHANGE) */}
      <dialog ref={modalRef} id="my_modal_3" className="modal p-4 rounded-lg">

        <div className="modal-box">

          {/* Close button (same UI style kept) */}
          <form method="dialog">
            <button
              onClick={closeModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>

          {selectedProject && (
            <>
              <h3 className="font-bold text-lg">
                {selectedProject.title}
              </h3>

              <p className="py-4 text-sm text-muted-foreground">
                {selectedProject.desc}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-3">
                {selectedProject.tech.map((t: string) => (
                  <span key={t} className="tech-badge text-xs">
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-sm mb-2">
                <strong>Challenges:</strong> {selectedProject.challenges}
              </p>

              <p className="text-sm">
                <strong>Future Plans:</strong> {selectedProject.future}
              </p>
            </>
          )}

        </div>

        {/* backdrop click close */}
        <form method="dialog" className="modal-backdrop">
          <button onClick={closeModal}>close</button>
        </form>

      </dialog>
    </section>
  );
};

export default ProjectsSection;