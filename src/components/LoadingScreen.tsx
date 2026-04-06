"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
  frameCount: number;
}

export default function LoadingScreen({ onComplete, frameCount }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loadedCount = 0;

    const preloadImages = async () => {
      const promises = Array.from({ length: frameCount }).map((_, i) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          // Adjust based on user's exact filename pattern: frame_000_delay-0.066s.webp
          const frameIndex = i.toString().padStart(3, "0");
          img.src = `/sequence/frame_${frameIndex}_delay-0.066s.webp`;
          img.onload = () => {
            loadedCount++;
            setProgress(Math.round((loadedCount / frameCount) * 100));
            resolve(img);
          };
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        setTimeout(onComplete, 500); // Small buffer for smoothness
      } catch (error) {
        console.error("Failed to preload images", error);
        onComplete(); // Proceed anyway to avoid being stuck
      }
    };

    preloadImages();
  }, [frameCount, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-950 text-white"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 font-mono text-xl tracking-tighter"
        >
          PRELOADING EXPERIENCE
        </motion.div>

        <div className="h-[1px] w-64 bg-zinc-800">
          <motion.div
            className="h-full bg-blue-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-4 font-mono text-sm text-zinc-500">
          {progress}%
        </div>
      </div>

      <div className="absolute bottom-12 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
        Thanks for visiting
      </div>
    </motion.div>
  );
}
