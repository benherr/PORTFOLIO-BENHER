"use client";

import { motion } from "framer-motion";
import { Download, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      // Hero section height is roughly 500vh from ScrollyCanvas
      if (window.scrollY > window.innerHeight * 4.9) {
        setIsPastHero(true);
      } else {
        setIsPastHero(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[100] px-5 sm:px-8 py-6 flex justify-between items-center bg-transparent transition-colors duration-500"
    >
      <div className="flex items-center gap-2">
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-10 h-10 rounded-lg bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-blue-500 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        )}
      </div>

      <div className={`hidden md:flex gap-8 items-center font-mono text-xs uppercase tracking-widest absolute left-1/2 -translate-x-1/2 drop-shadow-md transition-colors duration-500 ${isPastHero
        ? "text-zinc-900 dark:text-zinc-400"
        : "text-white/90 dark:text-zinc-400"
        }`}>
        <a href="#projects" className={`transition-colors ${isPastHero ? 'hover:text-blue-500 dark:hover:text-white' : 'hover:text-white dark:hover:text-white'}`}>Projects</a>
        <a href="#skills" className={`transition-colors ${isPastHero ? 'hover:text-blue-500 dark:hover:text-white' : 'hover:text-white dark:hover:text-white'}`}>Skills</a>
        <a href="#experience" className={`transition-colors ${isPastHero ? 'hover:text-blue-500 dark:hover:text-white' : 'hover:text-white dark:hover:text-white'}`}>Experience</a>
        <a href="#education" className={`transition-colors ${isPastHero ? 'hover:text-blue-500 dark:hover:text-white' : 'hover:text-white dark:hover:text-white'}`}>Education</a>
        <a href="#contact" className={`transition-colors ${isPastHero ? 'hover:text-blue-500 dark:hover:text-white' : 'hover:text-white dark:hover:text-white'}`}>Contact</a>
      </div>

      <div className="flex gap-4 items-center">
        <a
          href="https://github.com/benherr"
          target="_blank"
          className="w-10 h-10 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-blue-500 transition-colors bg-zinc-200 dark:bg-zinc-800 rounded-lg"
          aria-label="GitHub Profile"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        <a
          href="/Benher-Basheer-CV.pdf"
          target="_blank"
          className="flex items-center gap-2 px-5 py-2.5 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg font-bold text-sm tracking-wide hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-300"
        >
          <Download className="w-4 h-4" />
          RESUME
        </a>
      </div>
    </motion.nav>
  );
}
