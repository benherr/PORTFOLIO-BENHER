"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Download, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <>
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
              className="w-10 h-10 rounded-lg bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-blue-500 transition-colors shadow-sm"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          )}
        </div>

        {/* Desktop Links */}
        <div className={`hidden md:flex gap-8 items-center font-mono text-xs uppercase tracking-widest absolute left-1/2 -translate-x-1/2 drop-shadow-md transition-colors duration-500 ${isPastHero
          ? "text-zinc-900 dark:text-zinc-400"
          : "text-white/90 dark:text-zinc-400"
          }`}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`transition-colors ${isPastHero ? 'hover:text-blue-500 dark:hover:text-white' : 'hover:text-white dark:hover:text-white'}`}>
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex gap-3 md:gap-4 items-center">
          <a
            href="https://github.com/benherr"
            target="_blank"
            className="hidden sm:flex w-10 h-10 items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-blue-500 transition-colors bg-zinc-200 dark:bg-zinc-800 rounded-lg shadow-sm"
            aria-label="GitHub Profile"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a
            href="/Benher-Basheer-CV.pdf"
            target="_blank"
            className="flex items-center gap-2 px-5 py-2.5 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg font-bold text-xs uppercase tracking-wide hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-300 bg-zinc-50 dark:bg-zinc-900 shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">RESUME</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-blue-500 transition-colors bg-zinc-200 dark:bg-zinc-800 rounded-lg shadow-sm"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[200] bg-zinc-50/90 dark:bg-zinc-950/90 flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-5 w-10 h-10 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-red-500 transition-colors bg-zinc-200 dark:bg-zinc-800 rounded-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col gap-8 items-center text-3xl font-bold tracking-tight">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-zinc-900 dark:text-white hover:text-blue-500 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 flex gap-6"
            >
              <a href="https://github.com/benherr" target="_blank" className="p-3 bg-zinc-200 dark:bg-zinc-800 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-blue-500 transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
