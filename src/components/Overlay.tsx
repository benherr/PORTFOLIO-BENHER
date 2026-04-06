"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Apply a spring to the scroll progress to match the silky smooth feel of the canvas
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Section 1: 0% - 25% (Name)
  const nameOpacity = useTransform(smoothProgress, [0, 0.1, 0.2, 0.25], [0, 1, 1, 0]);
  const nameScale = useTransform(smoothProgress, [0, 0.1, 0.2, 0.25], [0.9, 1, 1.05, 1.1]);
  const nameY = useTransform(smoothProgress, [0, 0.1, 0.2, 0.25], [100, 0, -50, -150]);

  // Section 2: 25% - 65% (The Journey - Left)
  const experienceOpacity = useTransform(smoothProgress, [0.25, 0.35, 0.55, 0.65], [0, 1, 1, 0]);
  const experienceX = useTransform(smoothProgress, [0.25, 0.35, 0.55, 0.65], [-50, 0, 10, 50]);
  const experienceY = useTransform(smoothProgress, [0.25, 0.35, 0.55, 0.65], [150, 0, -50, -150]);

  // Section 3: 55% - 100% (The Evolution - Right)
  const bridgeOpacity = useTransform(smoothProgress, [0.55, 0.65, 0.9, 1], [0, 1, 1, 1]);
  const bridgeX = useTransform(smoothProgress, [0.55, 0.65, 0.9, 1], [50, 0, -10, -10]);
  const bridgeY = useTransform(smoothProgress, [0.55, 0.65, 0.9, 1], [150, 0, -50, -50]);




  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 z-10 w-full h-[500vh]">
      {/* Single sticky container to hold all overlay text so it doesn't scroll away */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">

        {/* Name Section - Center */}
        <motion.div
          style={{ opacity: nameOpacity, scale: nameScale, y: nameY }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center will-change-transform will-change-opacity [transform:translateZ(0)] px-5"
        >
          <h1 className="text-5xl font-bold tracking-tight text-white md:text-8xl drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] dark:drop-shadow-none">
            Benher Basheer.
          </h1>
          <p className="mt-4 text-xl font-mono text-white/90 dark:text-zinc-400 md:text-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] dark:drop-shadow-none">
            Creative Developer.
          </p>
        </motion.div>

        {/* Experience Section - Left Aligned */}
        <motion.div
          style={{ opacity: experienceOpacity, x: experienceX, y: experienceY }}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-full px-5 sm:px-8 md:px-24 max-w-2xl will-change-transform will-change-opacity [transform:translateZ(0)]"
        >
          <span className="text-sm font-mono uppercase tracking-[0.3em] text-blue-500 shadow-black drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">The Journey</span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] dark:drop-shadow-xl shadow-transparent dark:shadow-black">
            I build Web Applications.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-white/90 dark:text-zinc-300 md:text-xl drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)] dark:drop-shadow-md shadow-transparent dark:shadow-black font-medium">
            <p>It started with a simple question: “How does this actually work?”</p>
            <p>That curiosity turned into experimentation.</p>
            <p>Experimentation turned into projects.</p>
            <p>Projects turned into a passion.</p>
          </div>
        </motion.div>

        {/* Engineering Section - Right Aligned */}
        <motion.div
          style={{ opacity: bridgeOpacity, x: bridgeX, y: bridgeY }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-full px-5 sm:px-8 md:px-24 flex justify-end text-right will-change-transform will-change-opacity [transform:translateZ(0)]"
        >
          <div className="max-w-2xl">
            <span className="text-sm font-mono uppercase tracking-[0.3em] text-blue-500 shadow-black drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">The Evolution</span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] dark:drop-shadow-xl shadow-transparent dark:shadow-black">
              Now, I build systems that go beyond just “working”.
            </h2>
            <p className="mt-6 text-lg text-white/90 dark:text-zinc-300 md:text-xl drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)] dark:drop-shadow-md shadow-transparent dark:shadow-black font-medium">
              Turning ideas into reality they’re efficient, scalable, and meaningful.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
