import { useState } from "react";
import { cn } from "@/lib/util";

const skills = [
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 50, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Node.js", level: 60, category: "backend" },
  { name: "Next.js", level: 60, category: "backend" },
  { name: "MongoDB", level: 60, category: "Database" },
  { name: "Git/Github", level: 80, category: "tool" },
  { name: "VS Code", level: 95, category: "tool" },
];

const categories = ["all", "frontend", "backend", "Database", "tool"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-12 px-4 relative bg-secondary/30 rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.2)] ring-1 ring-white/10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]">
          My <span className="text-primary drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize border",
                activeCategory === category
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-transparent text-foreground border-border hover:bg-secondary/40"
                )}

            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover text-center"
            >
              <div className="text-left mb-4">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded origin-left animate-[grow_1.5s_ease-in-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
