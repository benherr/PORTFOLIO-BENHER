"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[100] px-8 py-6 flex justify-between items-center bg-gradient-to-b from-zinc-950/80 to-transparent backdrop-blur-sm"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          B
        </div>
      </div>

      <div className="hidden md:flex gap-8 items-center font-mono text-xs uppercase tracking-widest text-zinc-400 absolute left-1/2 -translate-x-1/2">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        <a href="#experience" className="hover:text-white transition-colors">Experience</a>
        <a href="#education" className="hover:text-white transition-colors">Education</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>

      <div className="flex gap-4 items-center">
        <a
          href="https://github.com/Benherr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-lg hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.04c3.7-.4 7-1.8 7-7.96 0-1.6-.5-2.9-1.3-3.9.1-.3.6-1.8-.1-3.8 0 0-1-.3-3.3 1.2a11.5 11.5 0 0 0-6 0C8 3 7 3.3 7 3.3c-.7 2-.2 3.5-.1 3.8-.8 1-1.3 2.3-1.3 3.9 0 6.1 3.3 7.5 7 7.96a4.8 4.8 0 0 0-1 3.04v4"></path>
            <path d="M9 19c-4.3 1.4-5-2.5-7-3"></path>
          </svg>
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white rounded-lg font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:bg-blue-400 transition-all duration-300"
        >
          <Download className="w-4 h-4" />
          RESUME
        </a>
      </div>
    </motion.nav>
  );
}
