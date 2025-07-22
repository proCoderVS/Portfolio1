import { Briefcase, Code, Github, Linkedin, User } from "lucide-react";
import resume from "../assets/Vaibhav_Sharma_Resume_.pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="py-12 px-4 relative bg-secondary/30 rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.2)] ring-1 ring-white/10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-glow drop-shadow-[0_0_10px_rgba(59,130,246,0.4)] text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start md:items-center">
          {/* LEFT TEXT SECTION */}
          <div className="space-y-6 text-left max-w-prose mx-auto md:mx-0">
            <h3 className="text-2xl md:text-3xl font-bold leading-snug">
              Passionate Web Developer <br className="hidden sm:block" /> & Tech Creator
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a fresher web developer with a deep interest in crafting responsive, dynamic, and engaging user interfaces. I’m currently building my skills in React, Next.js, and Tailwind CSS, and I’m excited to start my journey in the tech industry.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I love transforming ideas into real-world applications and continuously learning to stay updated with modern technologies. My goal is to contribute meaningfully to impactful projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button">Get In Touch</a>
             <a
                href={resume}
                download="Vaibhav_Sharma_Resume_.pdf"
                className="px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors"
                    >
            Download CV
            </a>

            </div>
          </div>

          {/* RIGHT ICON CARDS */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend Skills</h4>
                  <p className="text-muted-foreground">
                    Proficient in React, Tailwind CSS, and building interactive user interfaces.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Team Player</h4>
                  <p className="text-muted-foreground">
                    Comfortable working in collaborative environments and contributing to team goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Career Goals</h4>
                  <p className="text-muted-foreground">
                    Aspiring to work on impactful web applications and continuously improve my skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
