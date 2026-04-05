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
  const frameCount = 55; // 55 files found in sequence/

  return (
    <main className="relative bg-zinc-950 min-h-screen">
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
          <footer className="py-12 border-t border-white/5 bg-zinc-950 text-center">
            <div className="flex flex-col items-center gap-4">
              <p className="text-zinc-500 font-mono text-[10px] tracking-widest uppercase">
                Developed by Benher Basheer &copy; 2026
              </p>
            </div>
          </footer>
        </>
      )}
    </main>
  );
}
