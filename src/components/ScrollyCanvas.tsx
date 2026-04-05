"use client";

import { useEffect, useRef, useMemo, useState } from "react";
import { useScroll, useTransform, motion, useMotionValue, useSpring } from "framer-motion";

interface ScrollyCanvasProps {
  frameCount: number;
}

export default function ScrollyCanvas({ frameCount }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  // High-performance scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0-1) to frame index (0-54)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);
  
  // Use a spring transition for buttery smooth scrubbing
  const smoothFrameIndex = useSpring(frameIndex, {
    stiffness: 400,
    damping: 30,
    restDelta: 0.001
  });

  // Pre-generate image instances (already cached by LoadingScreen)
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 0; i < frameCount; i++) {
        const frameId = i.toString().padStart(3, "0");
        const img = new Image();
        img.src = `/sequence/frame_${frameId}_delay-0.066s.webp`;
        loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [frameCount]);

  // Canvas drawing logic with object-fit: cover implementation
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || images.length === 0) return;

    const img = images[Math.floor(index)];
    if (!img) return;

    // Calculate dimensions for object-fit: cover
    const canvasAspect = canvas.width / canvas.height;
    const imgAspect = img.width / img.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasAspect > imgAspect) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgAspect;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgAspect;
      drawHeight = canvas.height;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Sync canvas with smoothFrameIndex
  useEffect(() => {
    const unsubscribe = smoothFrameIndex.on("change", (latest) => {
      drawFrame(latest);
    });

    // Initial draw
    if (images.length > 0) drawFrame(0);

    return () => unsubscribe();
  }, [images, smoothFrameIndex]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        drawFrame(smoothFrameIndex.get());
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial setup

    return () => window.removeEventListener("resize", handleResize);
  }, [images]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-zinc-950">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="block h-full w-full object-cover grayscale opacity-60"
        />
        {/* Subtle vignette overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>
    </div>
  );
}
