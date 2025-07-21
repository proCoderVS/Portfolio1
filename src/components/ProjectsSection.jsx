import { ExternalLink } from "lucide-react";
import { Github } from "lucide-react";
// import React from "react";

const projects=[
    {
        id:1,
        title:"Hospital Management System",
        description:"A comprehensive hospital management system that streamlines patient care and administrative tasks.Also includes Ward and Beds Assignment System.",
        image:"/projects/project3.png",
        tags :["ReactJS","MUI","NodeJS","ExpressJS","MongoDB"],
        demoUrl:"#",
        githubUrl:"#",
    },
    {
        id:2,
        title:"News Web",
        description:"A beautiful dynamic news web app which provides latest news from various sources. It allows users to filter news by category and search for specific topics.",
        image:"/projects/project2.png",
        tags :["ReactJS","Tailwind","Bootstrap"],
        demoUrl:"#",
        githubUrl:"#",
    },
    {
        id:3,
        title:"EV Charging Statioon Finder",
        description:"A web application that helps users find nearby electric vehicle charging stations. It provides real-time information on station availability and location.",
        image:"/projects/project1.png",
        tags :["ReactJS","Tailwind","NodeJS","ExpressJS","MongoDB"],
        demoUrl:"#",
        githubUrl:"#",
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-12 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold">
                    {" "}
                Featured<span className="text-primary"> Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    A showcase of my work, highlighting the skills and technologies I've used to build impactful projects.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                        <div className="h-48 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}
                            </p>
                            <div className="flex justify-between item-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl} 
                                    target="_blank"
                                    className="text-foreground/80 hover:primary transition-colors duration-300"><ExternalLink size={20}/></a>
                                    <a href={project.githubUrl} 
                                    target="_blank"
                                    className="text-foreground/80 hover:primary transition-colors duration-300"><Github size={20}/></a>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit items-center mx-auto gap-2" href="https://github.com/yourusername" target="_blank">
                       Check my Github
                    </a>
                </div>
            </div>
            
        </section>
    );
}