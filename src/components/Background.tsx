"use client";

import { useEffect, useRef } from "react";

/** Ambient layers (gradient wash, grid, noise) + a cursor-following glow. */
export default function Background() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    if (!window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;

    let gx = innerWidth / 2,
      gy = innerHeight / 2,
      cx = gx,
      cy = gy,
      raf: number | null = null;

    const tick = () => {
      cx += (gx - cx) * 0.16;
      cy += (gy - cy) * 0.16;
      glow.style.transform = `translate(${cx}px,${cy}px)`;
      if (Math.abs(gx - cx) > 0.5 || Math.abs(gy - cy) > 0.5) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = null;
      }
    };
    const onMove = (e: MouseEvent) => {
      gx = e.clientX;
      gy = e.clientY;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    addEventListener("mousemove", onMove, { passive: true });
    return () => {
      removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="bg-fx" aria-hidden />
      <div className="bg-grid" aria-hidden />
      <div className="bg-noise" aria-hidden />
      <div id="cursor-glow" ref={glowRef} aria-hidden />
    </>
  );
}
