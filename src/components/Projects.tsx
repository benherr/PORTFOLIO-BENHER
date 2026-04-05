"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Database, Layers, Cpu } from "lucide-react";

const projects = [
  {
    title: "Decentralized Voting Application",
    description: "A secure and transparent blockchain-based voting platform that eliminates fraud and ensures trust through smart contracts. Integrated IPFS for decentralized data storage and built an intuitive UI for seamless user interaction.",
    tech: ["Solidity", "Next.js", "Web3.js", "IPFS"],
    github: "https://github.com/benherr/D-voting-app",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f4e8b35?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "CampusCare",
    description: "A full-stack web application designed to streamline complaint registration, tracking, and resolution within a college with role-based access control for users and administrators. Focused on usability, real-time updates, and efficient workflow management.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/benherr/CampusCare",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2670&auto=format&fit=crop"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-20 py-32 px-8 md:px-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-blue-500" />
            <span className="text-sm font-mono uppercase tracking-[0.3em] text-blue-500">Selected Work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Impactful Implementations.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group flex flex-col md:flex-row gap-8 p-6 md:p-8 rounded-[2rem] bg-zinc-900/20 border border-white/5 hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-500"
            >
              {/* Left Column: Image Area */}
              <div className="w-full md:w-5/12 min-h-[250px] md:min-h-auto rounded-xl overflow-hidden relative flex-shrink-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                {/* Subtle dark overlay so images don't overpower the UI */}
                <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Right Column: Content */}
              <div className="flex-1 flex flex-col justify-between pt-4 md:pt-4 md:px-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-lg mb-8 max-w-2xl">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((t, i) => (
                      <span 
                         key={i} 
                         className="px-4 py-2 text-[10px] uppercase tracking-widest font-mono bg-white/5 border border-white/5 rounded-full text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm font-mono text-zinc-400 hover:text-white transition-colors group/link"
                    >
                      <div className="p-3 rounded-full bg-white/5 group-hover/link:bg-white/10 transition-colors">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                      </div>
                      Explore Repository
                    </a>
                    <a
                      href="#"
                      className="p-3 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors border border-blue-500/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
