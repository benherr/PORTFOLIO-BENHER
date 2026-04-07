"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Decentralized Voting Application",
    description: "A secure and transparent blockchain-based voting platform that eliminates fraud and ensures trust through smart contracts. Integrated IPFS for decentralized data storage and built an intuitive UI for seamless user interaction.",
    tech: ["Solidity", "Next.js", "Web3.js", "IPFS"],
    github: "https://github.com/benherr/D-voting-app",
    link: "https://github.com/benherr/D-voting-app",
    images: [
      "/Dapp/homeDapp.png",
      "/Dapp/candi_reg.png",
      "/Dapp/reg_voters.png",
      "/Dapp/reg_candidates.png",
      "/Dapp/vote.png",
      "/Dapp/result.png"

    ]
  },
  {
    title: "CampusCare",
    description: "A full-stack web application designed to streamline complaint registration, tracking, and resolution within a college with role-based access control for users and administrators. Focused on usability, real-time updates, and efficient workflow management.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/benherr/CampusCare",
    link: "https://github.com/benherr/CampusCare",
    images: [
      "/CampusCare/Home.png",
      "/CampusCare/home2.png",
      "/CampusCare/login.png",
      "/CampusCare/complaint_form.png",
      "/CampusCare/complaint_his.png",
      "/CampusCare/admin_dash.png",
      "/CampusCare/add_w.png"


    ]
  }
];

function ProjectImageSlider({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const paginate = (newDirection: number) => {
    if (newDirection > 0) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.preventDefault();
    paginate(1);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.preventDefault();
    paginate(-1);
  };

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = offset.x;
    if (swipe < -50) {
      paginate(1);
    } else if (swipe > 50) {
      paginate(-1);
    }
  };

  return (
    <div className="relative w-full h-full min-h-[250px] overflow-hidden group/slider rounded-xl">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 bg-cover bg-top transition-transform duration-700 group-hover:scale-105 cursor-grab active:cursor-grabbing"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
            <button
              onClick={prevImage}
              className="p-2 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md pointer-events-auto transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="p-2 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md pointer-events-auto transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-white w-4" : "bg-white/40"
                  }`}
              />
            ))}
          </div>
        </>
      )}

      {/* Subtle dark overlay so images don't overpower the UI */}
      <div className="absolute inset-0 bg-black/10 dark:bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-20 py-32 px-5 sm:px-8 md:px-24 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-blue-500" />
            <span className="text-sm font-mono uppercase tracking-[0.3em] text-blue-500">Selected Work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Impactful Implementations.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group flex flex-col md:flex-row gap-8 p-6 md:p-8 rounded-[2rem] bg-zinc-900/20 border border-white/5 hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-500"
            >
              {/* Left Column: Image Area */}
              <div className="w-full md:w-5/12 min-h-[250px] md:min-h-[350px] relative flex-shrink-0">
                <ProjectImageSlider images={project.images} />
              </div>

              {/* Right Column: Content */}
              <div className="flex-1 flex flex-col justify-between pt-4 md:pt-4 md:px-6">
                <div>
                  <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed text-lg mb-8 max-w-2xl">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 text-[10px] uppercase tracking-widest font-mono bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/5 rounded-full text-zinc-700 dark:text-zinc-300"
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
                      className="flex items-center gap-3 text-sm font-mono text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors group/link"
                    >
                      <div className="p-3 rounded-full bg-white/5 group-hover/link:bg-white/10 transition-colors">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                      </div>
                      Explore Repository
                    </a>
                    <a
                      href={project.link || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
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
