import { Briefcase } from "lucide-react";
import { Code } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { User } from "lucide-react";
export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" >
                About<span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl semibold font-bold">Passionate Web Developer & Tech Creator</h3>
                    <p className="text-muted-foreground">
                        As a fresher web developer, I am eager to contribute my skills and passion to the world of web development. I am currently in the process of honing my skills in React, Next.js, and Tailwind CSS, and I am excited to start my career as a web developer.
                    </p>
                    <p className="text-muted-foreground">
                        As a fresher web developer, I am eager to contribute my skills and passion to the world of web development. I am currently in the process of honing my skills in React, Next.js, and Tailwind CSS, and I am excited to start my career as a web developer.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="contact" className="cosmic-button">{" "}Get In Touch</a>
                        <a href="" className="px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors ">{" "}Download CV</a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">
                                    I am a full-stack developer who is passionate about creating innovative and user-friendly web applications.
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
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">
                                    I am a full-stack developer who is passionate about creating innovative and user-friendly web applications.
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
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">
                                    I am a full-stack developer who is passionate about creating innovative and user-friendly web applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>;
};