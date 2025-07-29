import { ExternalLink } from "lucide-react";
import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Medi+ (Hospital Management System)",
    description:
      "A hospital management platform with real-time bed and ward management using React.js. Scalable for real-world hospital deployment.",
    image: "/projects/project3.png",
    tags: ["MERN"],
    demoUrl: "https://sm-hospital.vercel.app/",
    githubUrl: "https://github.com/PrashantShukla7/Hospital-management",
  },
  {
    id: 3,
    title: "Sensai(AI Career Coach)",
    description:
      "Just built a Full Stack AI Career Coach — a cutting-edge project designed to empower users with personalized career insights, AI-powered resume building, and mock interviews! ",
    image: "/projects/project4.png",
    tags: ["FullStack, AI, NextJS"],
    demoUrl: "https://sensai1-psi.vercel.app/", // Update when deployed
    githubUrl: "https://github.com/proCoderVS/sensai1",
  },
  {
    id: 3,
    title: "VE-quest (EV Charging Finder)",
    description:
      "Frontend for an EV Charging Website. Features real-time EV station tracking, shortest & traffic-free route suggestions.",
    image: "/projects/project1.png",
    tags: ["Frontend"],
    demoUrl: "#", // Update when deployed
    githubUrl: "https://github.com/PrashantShukla7/lyriqon",
  },
  {
    id: 2,
    title: "NewsWeb",
    description:
      "A dynamic news web app using ReactJS. Integrated category-wise filters and news from various sources with a responsive UI.",
    image: "/projects/project2.png",
    tags: ["Frontend"],
    demoUrl: "#",
    githubUrl: "https://github.com/proCoderVS/News-Web",
  },
  
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.4)] mb-4 ">
          Featured <span className="text-primary drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]">Projects</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          A showcase of my work, highlighting the skills and technologies I've used to build impactful projects.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-md card-hover flex flex-col h-full"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title and Description */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>

                {/* Links */}
                <div className="mt-auto pt-2 flex items-center justify-between">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit items-center mx-auto gap-2"
            href="https://github.com/proCoderVS"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check my GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
