"use client";

import { useEffect } from "react";

/**
 * Mounts once and wires the two pointer micro-interactions that are simplest to
 * run imperatively across every button/card: magnetic `.mag` buttons and the
 * radial glow that tracks the cursor inside `.pcard` project cards.
 */
export default function Interactions() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    const fine = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
    const cleanups: Array<() => void> = [];

    if (!reduce && fine) {
      document.querySelectorAll<HTMLElement>(".mag").forEach((b) => {
        const move = (e: MouseEvent) => {
          const r = b.getBoundingClientRect();
          const mx = e.clientX - r.left - r.width / 2;
          const my = e.clientY - r.top - r.height / 2;
          b.style.transform = `translate(${mx * 0.28}px,${my * 0.4}px)`;
        };
        const leave = () => {
          b.style.transform = "";
        };
        b.addEventListener("mousemove", move);
        b.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          b.removeEventListener("mousemove", move);
          b.removeEventListener("mouseleave", leave);
        });
      });
    }

    document.querySelectorAll<HTMLElement>(".pcard").forEach((c) => {
      const move = (e: MouseEvent) => {
        const r = c.getBoundingClientRect();
        c.style.setProperty("--mx", `${e.clientX - r.left}px`);
        c.style.setProperty("--my", `${e.clientY - r.top}px`);
      };
      c.addEventListener("mousemove", move);
      cleanups.push(() => c.removeEventListener("mousemove", move));
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
