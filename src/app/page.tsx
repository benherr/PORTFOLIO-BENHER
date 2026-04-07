"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const frameCount = 47; // Cut 8 frames total for final flow

  return (
    <main className="relative bg-zinc-50 dark:bg-zinc-950 min-h-screen transition-colors duration-500">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen
            frameCount={frameCount}
            onComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />

          {/* Hero Scrollytelling Section */}
          <section className="relative">
            <ScrollyCanvas frameCount={frameCount} />
            <Overlay />
          </section>

          {/* Core Content Sections */}
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Contact />

          {/* Footer Component */}
          <footer className="py-16 border-t border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-zinc-950 text-center transition-colors duration-500 relative z-20">
            <div className="flex flex-col items-center gap-6">
              <a 
                href="#"
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-200/50 dark:bg-zinc-900/50 text-zinc-900 dark:text-white border border-zinc-300/50 dark:border-white/5 hover:bg-blue-500/10 hover:text-blue-500 hover:border-blue-500/30 transition-all duration-300 font-mono text-xs uppercase tracking-widest"
              >
                Back to Top
                <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </a>
              <p className="text-zinc-500 dark:text-zinc-500 font-mono text-[10px] tracking-widest uppercase mt-4">
                © {new Date().getFullYear()} Benher Basheer. High Performance Creative Development.
              </p>
            </div>
          </footer>
        </>
      )}
    </main>
  );
}
